(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-place-detail-place-detail-module~offers-new-offer-new-offer-module~ride-ride-module"],{

/***/ "./src/app/shared/destination-model/destination-model.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/destination-model/destination-model.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">{{ closeButtonText }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared/destination-model/destination-model.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/destination-model/destination-model.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in; }\n\n.map.visible {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9zaGFyZWQvZGVzdGluYXRpb24tbW9kZWwvZGVzdGluYXRpb24tbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFFWCw2QkFBNkI7RUFFN0IsVUFBVTtFQUNWLHlDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGVzdGluYXRpb24tbW9kZWwvZGVzdGluYXRpb24tbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG4gIH1cbiAgXG4gIC5tYXAudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/destination-model/destination-model.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/destination-model/destination-model.component.ts ***!
  \*************************************************************************/
/*! exports provided: DestinationModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationModelComponent", function() { return DestinationModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DestinationModelComponent = /** @class */ (function () {
    function DestinationModelComponent(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = { lat: -34.397, lng: 150.644 };
        this.selectable = true;
        this.closeButtonText = 'Cancel';
        this.title = 'Destination Location';
    }
    DestinationModelComponent.prototype.ngOnInit = function () { };
    DestinationModelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getGoogleMaps()
            .then(function (googleMaps) {
            _this.googleMaps = googleMaps;
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: _this.center,
                zoom: 16
            });
            _this.googleMaps.event.addListenerOnce(map, 'idle', function () {
                _this.renderer.addClass(mapEl, 'visible');
            });
            if (_this.selectable) {
                _this.clickListener = map.addListener('click', function (event) {
                    var selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    _this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                var marker = new googleMaps.Marker({
                    position: _this.center,
                    map: map,
                    title: 'Destination Location'
                });
                marker.setMap(map);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    DestinationModelComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    DestinationModelComponent.prototype.ngOnDestroy = function () {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    };
    DestinationModelComponent.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src =
                'https://maps.googleapis.com/maps/api/js?key=' +
                    _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DestinationModelComponent.prototype, "mapElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DestinationModelComponent.prototype, "center", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DestinationModelComponent.prototype, "selectable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DestinationModelComponent.prototype, "closeButtonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DestinationModelComponent.prototype, "title", void 0);
    DestinationModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination-model',
            template: __webpack_require__(/*! ./destination-model.component.html */ "./src/app/shared/destination-model/destination-model.component.html"),
            styles: [__webpack_require__(/*! ./destination-model.component.scss */ "./src/app/shared/destination-model/destination-model.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DestinationModelComponent);
    return DestinationModelComponent;
}());



/***/ }),

/***/ "./src/app/shared/location-set/location-set.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/location-set/location-set.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img\n    role=\"button\"\n    class=\"location-image\"\n    (click)=\"onPickLocation()\"\n    [src]=\"selectedLocationImage\"\n    *ngIf=\"selectedLocationImage && !isLoading\"\n  ></ion-img>\n  <ion-button\n    color=\"primary\"\n    (click)=\"onPickLocation()\"\n    *ngIf=\"!selectedLocationImage && !isLoading\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n  </ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/location-set/location-set.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/location-set/location-set.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9zaGFyZWQvbG9jYXRpb24tc2V0L2xvY2F0aW9uLXNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvY2F0aW9uLXNldC9sb2NhdGlvbi1zZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlja2VyIHtcbiAgICB3aWR0aDogMzByZW07XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAubG9jYXRpb24taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/location-set/location-set.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/location-set/location-set.component.ts ***!
  \***************************************************************/
/*! exports provided: LocationSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSetComponent", function() { return LocationSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationSetComponent = /** @class */ (function () {
    function LocationSetComponent(modalCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
    }
    LocationSetComponent.prototype.ngOnInit = function () { };
    LocationSetComponent.prototype.onPickLocation = function () {
        var _this = this;
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData.data) {
                    return;
                }
                var pickedLocation = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng,
                    address: null,
                    staticMapImageUrl: null
                };
                _this.isLoading = true;
                _this.getAddress(modalData.data.lat, modalData.data.lng)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (address) {
                    pickedLocation.address = address;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
                }))
                    .subscribe(function (staticMapImageUrl) {
                    pickedLocation.staticMapImageUrl = staticMapImageUrl;
                    _this.selectedLocationImage = staticMapImageUrl;
                    _this.isLoading = false;
                    _this.locationPick.emit(pickedLocation);
                });
            });
            modalEl.present();
        });
    };
    LocationSetComponent.prototype.getAddress = function (lat, lng) {
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleMapsAPIKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (geoData) {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    };
    LocationSetComponent.prototype.getMapImage = function (lat, lng, zoom) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=" + zoom + "&size=500x300&maptype=roadmap\n    &markers=color:red%7Clabel:Place%7C" + lat + "," + lng + "\n    &key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleMapsAPIKey;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LocationSetComponent.prototype, "locationPick", void 0);
    LocationSetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-set',
            template: __webpack_require__(/*! ./location-set.component.html */ "./src/app/shared/location-set/location-set.component.html"),
            styles: [__webpack_require__(/*! ./location-set.component.scss */ "./src/app/shared/location-set/location-set.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationSetComponent);
    return LocationSetComponent;
}());



/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">{{ closeButtonText }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in; }\n\n.map.visible {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9zaGFyZWQvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUVYLDZCQUE2QjtFQUU3QixVQUFVO0VBQ1YseUNBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5tYXAudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = { lat: -34.397, lng: 150.644 };
        this.selectable = true;
        this.closeButtonText = 'Cancel';
        this.title = 'Pick Location';
    }
    MapModalComponent.prototype.ngOnInit = function () { };
    MapModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getGoogleMaps()
            .then(function (googleMaps) {
            _this.googleMaps = googleMaps;
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: _this.center,
                zoom: 16
            });
            _this.googleMaps.event.addListenerOnce(map, 'idle', function () {
                _this.renderer.addClass(mapEl, 'visible');
            });
            if (_this.selectable) {
                _this.clickListener = map.addListener('click', function (event) {
                    var selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    _this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                var marker = new googleMaps.Marker({
                    position: _this.center,
                    map: map,
                    title: 'Picked Location'
                });
                marker.setMap(map);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MapModalComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    MapModalComponent.prototype.ngOnDestroy = function () {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    };
    MapModalComponent.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src =
                'https://maps.googleapis.com/maps/api/js?key=' +
                    _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapModalComponent.prototype, "mapElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "center", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "selectable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "closeButtonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "title", void 0);
    MapModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-modal',
            template: __webpack_require__(/*! ./map-modal.component.html */ "./src/app/shared/map-modal/map-modal.component.html"),
            styles: [__webpack_require__(/*! ./map-modal.component.scss */ "./src/app/shared/map-modal/map-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MapModalComponent);
    return MapModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img\n    role=\"button\"\n    class=\"location-image\"\n    (click)=\"onPickLocation()\"\n    [src]=\"selectedLocationImage\"\n    *ngIf=\"selectedLocationImage && !isLoading\"\n  ></ion-img>\n  <ion-button\n    color=\"primary\"\n    (click)=\"onPickLocation()\"\n    *ngIf=\"!selectedLocationImage && !isLoading\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n  </ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9zaGFyZWQvcGlja2Vycy9sb2NhdGlvbi1waWNrZXIvbG9jYXRpb24tcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGlja2Vycy9sb2NhdGlvbi1waWNrZXIvbG9jYXRpb24tcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XG4gIHdpZHRoOiAzMHJlbTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjByZW07XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvY2F0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function() { return LocationPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationPickerComponent = /** @class */ (function () {
    function LocationPickerComponent(modalCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
    }
    LocationPickerComponent.prototype.ngOnInit = function () { };
    LocationPickerComponent.prototype.onPickLocation = function () {
        var _this = this;
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData.data) {
                    return;
                }
                var pickedLocation = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng,
                    address: null,
                    staticMapImageUrl: null
                };
                _this.isLoading = true;
                _this.getAddress(modalData.data.lat, modalData.data.lng)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (address) {
                    pickedLocation.address = address;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
                }))
                    .subscribe(function (staticMapImageUrl) {
                    pickedLocation.staticMapImageUrl = staticMapImageUrl;
                    _this.selectedLocationImage = staticMapImageUrl;
                    _this.isLoading = false;
                    _this.locationPick.emit(pickedLocation);
                });
            });
            modalEl.present();
        });
    };
    LocationPickerComponent.prototype.getAddress = function (lat, lng) {
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleMapsAPIKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (geoData) {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    };
    LocationPickerComponent.prototype.getMapImage = function (lat, lng, zoom) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=" + zoom + "&size=500x300&maptype=roadmap\n    &markers=color:red%7Clabel:Place%7C" + lat + "," + lng + "\n    &key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleMapsAPIKey;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LocationPickerComponent.prototype, "locationPick", void 0);
    LocationPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-picker',
            template: __webpack_require__(/*! ./location-picker.component.html */ "./src/app/shared/pickers/location-picker/location-picker.component.html"),
            styles: [__webpack_require__(/*! ./location-picker.component.scss */ "./src/app/shared/pickers/location-picker/location-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationPickerComponent);
    return LocationPickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ "./src/app/shared/pickers/location-picker/location-picker.component.ts");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _location_set_location_set_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-set/location-set.component */ "./src/app/shared/location-set/location-set.component.ts");
/* harmony import */ var _destination_model_destination_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destination-model/destination-model.component */ "./src/app/shared/destination-model/destination-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__["MapModalComponent"], _location_set_location_set_component__WEBPACK_IMPORTED_MODULE_5__["LocationSetComponent"], _destination_model_destination_model_component__WEBPACK_IMPORTED_MODULE_6__["DestinationModelComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__["LocationPickerComponent"], _destination_model_destination_model_component__WEBPACK_IMPORTED_MODULE_6__["DestinationModelComponent"], _location_set_location_set_component__WEBPACK_IMPORTED_MODULE_5__["LocationSetComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__["MapModalComponent"]],
            entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__["MapModalComponent"], _destination_model_destination_model_component__WEBPACK_IMPORTED_MODULE_6__["DestinationModelComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~discover-place-detail-place-detail-module~offers-new-offer-new-offer-module~ride-ride-module.js.map