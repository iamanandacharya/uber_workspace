(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ride-ride-module"],{

/***/ "./src/app/places/ride/ride.module.ts":
/*!********************************************!*\
  !*** ./src/app/places/ride/ride.module.ts ***!
  \********************************************/
/*! exports provided: RidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePageModule", function() { return RidePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ride_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ride.page */ "./src/app/places/ride/ride.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _ride_page__WEBPACK_IMPORTED_MODULE_5__["RidePage"]
    }
];
var RidePageModule = /** @class */ (function () {
    function RidePageModule() {
    }
    RidePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            entryComponents: [],
            declarations: [_ride_page__WEBPACK_IMPORTED_MODULE_5__["RidePage"]],
        })
    ], RidePageModule);
    return RidePageModule;
}());



/***/ }),

/***/ "./src/app/places/ride/ride.page.html":
/*!********************************************!*\
  !*** ./src/app/places/ride/ride.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-row>\n    <ion-col text-start padding-top>\n      <ion-title>Google Map</ion-title>\n    </ion-col>\n    <ion-col text-end>\n      <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\">\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n        Where I Am\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n <ion-item>\n   <ion-text>\n   Pickup Location: \n   <ion-text *ngIf=\"fetchCurrentAddress\">\n     {{currentAddress}} \n    </ion-text> \n    <ion-text *ngIf=\"fetchPickupAddress\"> {{pickupAddress}} </ion-text>\n   </ion-text>\n </ion-item>\n <ion-item>\n  <ion-text>\n  destination Address:  {{destinationAddress}}\n  </ion-text>\n</ion-item>\n  <div class=\"map-wrapper\">\n    \n    <div #map id=\"map\">\n    </div>\n   <ion-button expand=\"full\" (click)=\"onPickLocation()\">\n     Start ride\n   </ion-button>\n  </div>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/places/ride/ride.page.scss":
/*!********************************************!*\
  !*** ./src/app/places/ride/ride.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 70vh; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9wbGFjZXMvcmlkZS9yaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBSUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL3JpZGUvcmlkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgIFxuICAgXG4gICNhZGRyZXNzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAgXG4gICNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxuICAgXG4gIC5tYXAtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgXG4gICAgI21hcF9jZW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/places/ride/ride.page.ts":
/*!******************************************!*\
  !*** ./src/app/places/ride/ride.page.ts ***!
  \******************************************/
/*! exports provided: RidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePage", function() { return RidePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var src_app_shared_destination_model_destination_model_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/destination-model/destination-model.component */ "./src/app/shared/destination-model/destination-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var RidePage = /** @class */ (function () {
    function RidePage(geolocation, nativeGeocoder, modalCtrl, http, actionSheetController, alertCtrl) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
        this.fetchCurrentAddress = false;
        this.fetchPickupAddress = false;
    }
    RidePage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    RidePage.prototype.startRide = function () {
    };
    RidePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lattitude = resp.coords.latitude;
            _this.longtitude = resp.coords.longitude;
            var latLng = new google.maps.LatLng(_this.lattitude, _this.longtitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var currentAddress = {
                lat: _this.lattitude,
                lng: _this.longtitude,
                address: null,
                staticMapImageUrl: null
            };
            _this.isLoading = true;
            _this.getAddress(_this.lattitude, _this.longtitude)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (address) {
                currentAddress.address = address;
                _this.currentAddress = address;
                _this.destinationAddress = '';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.getMapImage(_this.lattitude, _this.longtitude, 14));
            }))
                .subscribe(function (staticMapImageUrl) {
                currentAddress.staticMapImageUrl = staticMapImageUrl;
                _this.selectedLocationImage = staticMapImageUrl;
                _this.isLoading = false;
                _this.locationPick.emit(currentAddress);
            });
            _this.getAddressFromCoords(_this.lattitude, _this.longtitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.addMarker();
            _this.map.addListener('tilesloaded', function () {
                console.log('accuracy', _this.map.center.lat());
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    RidePage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        this.addInfoWindow(marker);
    };
    RidePage.prototype.addInfoWindow = function (marker) {
        google.maps.event.addListener(marker, 'click', function () {
        });
    };
    RidePage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = "";
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ", ";
            }
            _this.address = _this.address.slice(0, -2);
        })
            .catch(function (error) {
            _this.address = "Address Not Available!";
        });
    };
    RidePage.prototype.onPickLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Pickup Location',
                                    icon: 'radio-button-off',
                                    handler: function () {
                                        console.log(_this.currentAddress);
                                        _this.presentPickupAlertConfirm();
                                    }
                                }, {
                                    text: 'Destination Location',
                                    icon: 'radio-button-off',
                                    handler: function () {
                                        _this.callDestinationModel();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RidePage.prototype.presentPickupAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm!',
                            message: 'Are you get current Location?',
                            buttons: [
                                {
                                    text: 'Yes',
                                    role: 'Yes',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.fetchCurrentAddress = true;
                                        _this.fetchPickupAddress = false;
                                    }
                                }, {
                                    text: 'No',
                                    handler: function () {
                                        _this.callPickupModal();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RidePage.prototype.callPickupModal = function () {
        var _this = this;
        this.fetchCurrentAddress = false;
        this.fetchPickupAddress = true;
        this.modalCtrl.create({ component: src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__["MapModalComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData.data) {
                    _this.fetchCurrentAddress = false;
                    _this.fetchPickupAddress = false;
                    return;
                }
                var pickedLocation = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng,
                    address: null,
                    staticMapImageUrl: null
                };
                _this.lattitude = modalData.data.lat;
                _this.longtitude = modalData.data.lng;
                console.log('lat ' + _this.lattitude);
                console.log('lng ' + _this.longtitude);
                _this.isLoading = true;
                _this.getAddress(modalData.data.lat, modalData.data.lng)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (address) {
                    pickedLocation.address = address;
                    _this.pickupAddress = address;
                    console.log('address ' + _this.pickupAddress);
                    _this.lattitude = pickedLocation.lat;
                    _this.longtitude = pickedLocation.lng;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.getMapImage(_this.lattitude, _this.longtitude, 14));
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
    RidePage.prototype.callDestinationModel = function () {
        var _this = this;
        this.modalCtrl.create({ component: src_app_shared_destination_model_destination_model_component__WEBPACK_IMPORTED_MODULE_9__["DestinationModelComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                _this.fetchCurrentAddress = false;
                _this.fetchPickupAddress = true;
                _this.currentAddress = '';
                if (!modalData.data) {
                    return;
                }
                var destinationAddress = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng,
                    address: null,
                    staticMapImageUrl: null
                };
                _this.lattitude = modalData.data.lat;
                _this.longtitude = modalData.data.lng;
                console.log('lat ' + _this.lattitude);
                console.log('lng ' + _this.longtitude);
                _this.isLoading = true;
                _this.getAddress(modalData.data.lat, modalData.data.lng)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (address) {
                    destinationAddress.address = address;
                    _this.destinationAddress = address;
                    console.log('address ' + _this.destinationAddress);
                    _this.lattitude = destinationAddress.lat;
                    _this.longtitude = destinationAddress.lng;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.getMapImage(_this.lattitude, _this.longtitude, 14));
                }))
                    .subscribe(function (staticMapImageUrl) {
                    destinationAddress.staticMapImageUrl = staticMapImageUrl;
                    _this.selectedLocationImage = staticMapImageUrl;
                    _this.isLoading = false;
                    _this.locationPick.emit(destinationAddress);
                });
            });
            modalEl.present();
        });
    };
    RidePage.prototype.onLocationPicked = function (location) {
        console.log('location lat' + location);
    };
    RidePage.prototype.onLocationSet = function (location) {
        console.log('location dest' + location);
    };
    RidePage.prototype.getAddress = function (lat, lng) {
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsAPIKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (geoData) {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    };
    RidePage.prototype.getMapImage = function (lat, lng, zoom) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=" + zoom + "&size=500x300&maptype=roadmap\n    &markers=color:red%7Clabel:Place%7C" + lat + "," + lng + "\n    &key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsAPIKey;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RidePage.prototype, "mapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RidePage.prototype, "locationPick", void 0);
    RidePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride',
            template: __webpack_require__(/*! ./ride.page.html */ "./src/app/places/ride/ride.page.html"),
            styles: [__webpack_require__(/*! ./ride.page.scss */ "./src/app/places/ride/ride.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RidePage);
    return RidePage;
}());



/***/ })

}]);
//# sourceMappingURL=ride-ride-module.js.map