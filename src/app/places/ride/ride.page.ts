import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment, Geocoder, GoogleMapsAnimation, ILatLng
} from '@ionic-native/google-maps';
import { ModalController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PlaceLocation } from '../../places/location.model';
import { MapModalComponent } from 'src/app/shared/map-modal/map-modal.component';
declare var google;
import { ActionSheetController } from '@ionic/angular';
import { DestinationModelComponent } from 'src/app/shared/destination-model/destination-model.component';
@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address: string;
  @Output() locationPick = new EventEmitter<PlaceLocation>();
  selectedLocationImage: string;
  isLoading = false;
  lattitude: any;
  longtitude: any;
  currentAddress: any;
  pickupAddress: any;
  fetchCurrentAddress: boolean;
  fetchPickupAddress: boolean;
  destinationAddress: any;
  destinationLongtitude: any;
  destinationLattitude: any;
  search: string = '';
  googleAutoComplete = new google.maps.places.AutocompleteService();
  searchResult = new Array<any>();
  originMaster = Marker;
  destination: any;
  googleDirectionService = new google.maps.DirectionsService();
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private modalCtrl: ModalController,
    private http: HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    public ngZone: NgZone
  ) {
    this.fetchCurrentAddress = false;
    this.fetchPickupAddress = false;
  }

  ngOnInit() {
    this.loadMap();
  }
  startRide() {

  }
  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lattitude = resp.coords.latitude;
      this.longtitude = resp.coords.longitude;
      let latLng = new google.maps.LatLng(this.lattitude, this.longtitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      const currentAddress: PlaceLocation = {
        lat: this.lattitude,
        lng: this.longtitude,
        address: null,
        staticMapImageUrl: null
      }
      this.isLoading = true;
      this.getAddress(this.lattitude, this.longtitude)
        .pipe(
          switchMap(address => {
            currentAddress.address = address;
            this.currentAddress = address;
            this.destinationAddress = '';
            return of(
              this.getMapImage(this.lattitude, this.longtitude, 14)
            )
          })
        )
        .subscribe(staticMapImageUrl => {
          currentAddress.staticMapImageUrl = staticMapImageUrl;
          this.selectedLocationImage = staticMapImageUrl;
          this.isLoading = false;
          this.locationPick.emit(currentAddress);
        })
      this.getAddressFromCoords(this.lattitude, this.longtitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy', this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    this.addInfoWindow(marker);

  }
  addInfoWindow(marker) {
    google.maps.event.addListener(marker, 'click', () => {
    });

  }
  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }
  async onPickLocation() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Pickup Location',
        icon: 'radio-button-off',
        handler: () => {

          console.log(this.currentAddress)
          this.presentPickupAlertConfirm();
        }
      }, {
        text: 'Destination Location',
        icon: 'radio-button-off',
        handler: () => {
          this.callDestinationModel();
        }
      }]
    });
    await actionSheet.present();

  }
  async presentPickupAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Are you get current Location?',
      buttons: [
        {
          text: 'Yes',
          role: 'Yes',
          cssClass: 'secondary',
          handler: (blah) => {
            this.fetchCurrentAddress = true;
            this.fetchPickupAddress = false;
          }
        }, {
          text: 'No',
          handler: () => {
            this.callPickupModal();
          }
        }
      ]
    });

    await alert.present();
  }

  callPickupModal() {
    this.fetchCurrentAddress = false;
    this.fetchPickupAddress = true;
    this.modalCtrl.create({ component: MapModalComponent }).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        if (!modalData.data) {
          this.fetchCurrentAddress = false;
          this.fetchPickupAddress = false;
          return;
        }
        const pickedLocation: PlaceLocation = {
          lat: modalData.data.lat,
          lng: modalData.data.lng,
          address: null,
          staticMapImageUrl: null
        };

        this.lattitude = modalData.data.lat;
        this.longtitude = modalData.data.lng;
        console.log('lat ' + this.lattitude);
        console.log('lng ' + this.longtitude);
        this.isLoading = true;
        this.getAddress(modalData.data.lat, modalData.data.lng)
          .pipe(
            switchMap(address => {
              pickedLocation.address = address;
              this.pickupAddress = address;
              console.log('address ' + this.pickupAddress);
              this.lattitude = pickedLocation.lat;
              this.longtitude = pickedLocation.lng;
             
              return of(
                this.getMapImage(this.lattitude, this.longtitude, 14)
              );
            })
          )
          .subscribe(staticMapImageUrl => {
            pickedLocation.staticMapImageUrl = staticMapImageUrl;
            this.selectedLocationImage = staticMapImageUrl;
            this.isLoading = false;
            this.locationPick.emit(pickedLocation);
          });
      });
      modalEl.present();
    });
  }
  callDestinationModel() {

    this.modalCtrl.create({ component: DestinationModelComponent }).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        this.fetchCurrentAddress = false;
        this.fetchPickupAddress = true;

        this.currentAddress = '';
        if (!modalData.data) {
          return;
        }
        const destinationAddress: PlaceLocation = {
          lat: modalData.data.lat,
          lng: modalData.data.lng,
          address: null,
          staticMapImageUrl: null
        };

        this.lattitude = modalData.data.lat;
        this.longtitude = modalData.data.lng;
        console.log('lat ' + this.lattitude);
        console.log('lng ' + this.longtitude);
        this.isLoading = true;
        this.getAddress(modalData.data.lat, modalData.data.lng)
          .pipe(
            switchMap(address => {
              destinationAddress.address = address;
              this.destinationAddress = address;
              console.log('address ' + this.destinationAddress);
              this.destinationLattitude = destinationAddress.lat;
              this.destinationLongtitude = destinationAddress.lng;
                this.distanceBetweenTwoOrigin();
              return of(
                this.getMapImage(this.lattitude, this.longtitude, 14)
              );
            })
          )
          .subscribe(staticMapImageUrl => {
            destinationAddress.staticMapImageUrl = staticMapImageUrl;
            this.selectedLocationImage = staticMapImageUrl;
            this.isLoading = false;
            this.locationPick.emit(destinationAddress);
          });
      });
      modalEl.present();
    });
  }
  onLocationPicked(location: PlaceLocation) {
    console.log('location lat' + location);
  }
  onLocationSet(location: PlaceLocation) {
    console.log('location dest' + location)
  }

  private getAddress(lat: number, lng: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
        environment.googleMapsAPIKey
        }`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results.length === 0) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${environment.googleMapsAPIKey}`;
  }
  /*
  @method: distanceBetweenTwoOrigin => check distance between two origin
  follow this : https://developers.google.com/maps/documentation/javascript/distancematrix#transit_options
  */
  distanceBetweenTwoOrigin() {
    var origin1 = new google.maps.LatLng(this.lattitude, this.longtitude);
    console.log('origin 1' + origin1);
    var origin2 = this.pickupAddress;
    console.log('origin 1' + origin2);
    var destinationA = this.destinationAddress;
    console.log('origin 1' + destinationA);
    var destinationB = new google.maps.LatLng(this.destinationLattitude, this.destinationLongtitude);
    console.log('origin 1' + destinationB);
    const _servie = new google.maps.DistanceMatrixService();
    _servie.getDistanceMatrix(
      {
        origins: [origin1, origin2],
        destinations: [destinationA, destinationB],
        travelMode: 'DRIVING',
        avoidHighways: false,
        avoidTolls: false,
      }, this.callback
    )
  }
  callback(response, status) {
    console.log('response ' + JSON.stringify(response));
  }
  searchLocation() {
    console.log('search' + this.search);
    if(!this.search.trim().length) return;
    this.googleAutoComplete.getPlacePredictions({input: this.search}, prediction => {
      this.ngZone.run(() => {
        this.searchResult = prediction;
      })
    })
  }
 async calcRoute(result: any){
    console.log('result' + JSON.stringify(result));
    this.search = '';
    this.destination = result;
    var geocoder = new google.maps.Geocoder();
    const info: any = await geocoder.geocode({address: this.destination.description},
      function(result, status) {
        console.log(result );
        console.log(status ); 
      });
    console.log(info);
    // let markerDestination: Marker = this.map.addMarker.addMarkerSync({
    //   title: this.destination.description,
    //   icon: '#000',
    //   animation: GoogleMapsAnimation.DROP,
    //   position: info[0].position
    // });
    // this.googleDirectionService.route({
    //   origin: this.originMaster.getPosition(),
    //   destination: markerDestination.getPosition(),
    //   travelMode: 'DRIVING'
    // // tslint:disable-next-line: no-shadowed-variable
    // }, async result => {
    //   console.log(result)
    //   const points = new Array<ILatLng>();
    //   const route = result.route[0].overview_path;
    //   // tslint:disable-next-line: no-unused-expression
    //   for (let i = 0; i < result.length; i++) {
    //     points[i] = {
    //       lat: route[i].lat(),
    //       lng: route[i].lng()
    //     };
    //   }
    //   this.map.addPolyline({
    //     points: [this.originMaster.getPosition(), markerDestination.getPosition()],
    //     color: '#000',
    //     width: 3
    //   });
    //   this.map.moveCamera({target: points});
    // });
  }
}
