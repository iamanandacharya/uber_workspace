(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-place-detail-place-detail-module"],{

/***/ "./src/app/bookings/create-booking/create-booking.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ selectedPlace.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center padding>\n  <form (ngSubmit)=\"onBookPlace()\" #f=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"first-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"last-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of Guests</ion-label>\n            <ion-select [ngModel]=\"'2'\" name=\"guest-number\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">From</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"startDate\"\n              name=\"date-from\"\n              required\n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"startDateCtrl.value\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"endDate\"\n              name=\"date-to\"\n              required\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            color=\"primary\"\n            expand=\"block\"\n            [disabled]=\"!f.valid || !datesValid()\"\n          >\n            Book!\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2NyZWF0ZS1ib29raW5nL2NyZWF0ZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function() { return CreateBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _places_place_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places/place.model */ "./src/app/places/place.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateBookingComponent = /** @class */ (function () {
    function CreateBookingComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CreateBookingComponent.prototype.ngOnInit = function () {
        var availableFrom = new Date(this.selectedPlace.availableFrom);
        var availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() +
                Math.random() *
                    (availableTo.getTime() -
                        7 * 24 * 60 * 60 * 1000 -
                        availableFrom.getTime())).toISOString();
            this.endDate = new Date(new Date(this.startDate).getTime() +
                Math.random() *
                    (new Date(this.startDate).getTime() +
                        6 * 24 * 60 * 60 * 1000 -
                        new Date(this.startDate).getTime())).toISOString();
        }
    };
    CreateBookingComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CreateBookingComponent.prototype.onBookPlace = function () {
        if (!this.form.valid || !this.datesValid) {
            return;
        }
        this.modalCtrl.dismiss({
            bookingData: {
                firstName: this.form.value['first-name'],
                lastName: this.form.value['last-name'],
                guestNumber: +this.form.value['guest-number'],
                startDate: new Date(this.form.value['date-from']),
                endDate: new Date(this.form.value['date-to'])
            }
        }, 'confirm');
    };
    CreateBookingComponent.prototype.datesValid = function () {
        var startDate = new Date(this.form.value['date-from']);
        var endDate = new Date(this.form.value['date-to']);
        return endDate > startDate;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _places_place_model__WEBPACK_IMPORTED_MODULE_3__["Place"])
    ], CreateBookingComponent.prototype, "selectedPlace", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CreateBookingComponent.prototype, "selectedMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CreateBookingComponent.prototype, "form", void 0);
    CreateBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-booking',
            template: __webpack_require__(/*! ./create-booking.component.html */ "./src/app/bookings/create-booking/create-booking.component.html"),
            styles: [__webpack_require__(/*! ./create-booking.component.scss */ "./src/app/bookings/create-booking/create-booking.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], CreateBookingComponent);
    return CreateBookingComponent;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPage"]
    }
];
var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPage"], _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__["CreateBookingComponent"]],
            entryComponents: [_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__["CreateBookingComponent"]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ isLoading ? 'Loading...' : place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div text-center *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid no-padding *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" no-padding>\n        <ion-img [src]=\"place.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" text-center padding>\n        <p>{{ place.description }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" padding text-center>\n        <p>{{ place.location.address }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" no-padding>\n        <ion-img role=\"button\" (click)=\"onShowFullMap()\" class=\"location-image\" [src]=\"place.location.staticMapImageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isBookable\">\n      <ion-col size-sm=\"6\" offset-sm=\"3\" text-center>\n        <ion-button color=\"primary\" margin (click)=\"onBookPlace()\"\n          >Book</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location-image {\n  width: 100%;\n  height: 25rem;\n  max-height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\np {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVyZW07XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var _bookings_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../bookings/booking.service */ "./src/app/bookings/booking.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(navCtrl, route, placesService, modalCtrl, actionSheetCtrl, bookingService, loadingCtrl, authService, alertCtrl, router) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.placesService = placesService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.isBookable = false;
        this.isLoading = false;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/discover');
                return;
            }
            _this.isLoading = true;
            _this.placeSub = _this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe(function (place) {
                _this.place = place;
                _this.isBookable = place.userId !== _this.authService.userId;
                _this.isLoading = false;
            }, function (error) {
                _this.alertCtrl
                    .create({
                    header: 'An error ocurred!',
                    message: 'Could not load place.',
                    buttons: [
                        {
                            text: 'Okay',
                            handler: function () {
                                _this.router.navigate(['/places/tabs/discover']);
                            }
                        }
                    ]
                })
                    .then(function (alertEl) { return alertEl.present(); });
            });
        });
    };
    PlaceDetailPage.prototype.onBookPlace = function () {
        var _this = this;
        // this.router.navigateByUrl('/places/tabs/discover');
        // this.navCtrl.navigateBack('/places/tabs/discover');
        // this.navCtrl.pop();
        this.actionSheetCtrl
            .create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: function () {
                        _this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: function () {
                        _this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    PlaceDetailPage.prototype.openBookingModal = function (mode) {
        var _this = this;
        console.log(mode);
        this.modalCtrl
            .create({
            component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["CreateBookingComponent"],
            componentProps: { selectedPlace: this.place, selectedMode: mode }
        })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (resultData) {
            if (resultData.role === 'confirm') {
                _this.loadingCtrl
                    .create({ message: 'Booking place...' })
                    .then(function (loadingEl) {
                    loadingEl.present();
                    var data = resultData.data.bookingData;
                    _this.bookingService
                        .addBooking(_this.place.id, _this.place.title, _this.place.imageUrl, data.firstName, data.lastName, data.guestNumber, data.startDate, data.endDate)
                        .subscribe(function () {
                        loadingEl.dismiss();
                    });
                });
            }
        });
    };
    PlaceDetailPage.prototype.onShowFullMap = function () {
        this.modalCtrl
            .create({
            component: _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_7__["MapModalComponent"],
            componentProps: {
                center: {
                    lat: this.place.location.lat,
                    lng: this.place.location.lng
                },
                selectable: false,
                closeButtonText: 'Close',
                title: this.place.location.address
            }
        })
            .then(function (modalEl) {
            modalEl.present();
        });
    };
    PlaceDetailPage.prototype.ngOnDestroy = function () {
        if (this.placeSub) {
            this.placeSub.unsubscribe();
        }
    };
    PlaceDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-place-detail',
            template: __webpack_require__(/*! ./place-detail.page.html */ "./src/app/places/discover/place-detail/place-detail.page.html"),
            styles: [__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/places/discover/place-detail/place-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _bookings_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-place-detail-place-detail-module.js.map