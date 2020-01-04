import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google;
import { ModalController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PlaceLocation } from '../../places/location.model';
@Component({
  selector: 'app-searchride',
  templateUrl: './searchride.page.html',
  styleUrls: ['./searchride.page.scss'],
})
export class SearchridePage implements OnInit {
  search: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lattitude: any;
  longtitude: any;
  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private modalCtrl: ModalController,
    private http: HttpClient,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    this.loadMap();
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
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
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
  searchLocation() {

  }
}
