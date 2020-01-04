(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-edit-offer-edit-offer-module"],{

/***/ "./src/app/places/offers/edit-offer/edit-offer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.module.ts ***!
  \***************************************************************/
/*! exports provided: EditOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPageModule", function() { return EditOfferPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-offer.page */ "./src/app/places/offers/edit-offer/edit-offer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_offer_page__WEBPACK_IMPORTED_MODULE_5__["EditOfferPage"]
    }
];
var EditOfferPageModule = /** @class */ (function () {
    function EditOfferPageModule() {
    }
    EditOfferPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_offer_page__WEBPACK_IMPORTED_MODULE_5__["EditOfferPage"]]
        })
    ], EditOfferPageModule);
    return EditOfferPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.html":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [defaultHref]=\"'/places/tabs/offers/' + placeId\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onUpdateOffer()\" [disabled]=\"!form?.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"isLoading\" text-center>\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"\n          !form.get('description').valid && form.get('description').touched\n        \"\n      >\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvZWRpdC1vZmZlci9lZGl0LW9mZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.ts ***!
  \*************************************************************/
/*! exports provided: EditOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPage", function() { return EditOfferPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditOfferPage = /** @class */ (function () {
    function EditOfferPage(route, placesService, navCtrl, router, loadingCtrl, alertCtrl) {
        this.route = route;
        this.placesService = placesService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
    }
    EditOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            _this.placeId = paramMap.get('placeId');
            _this.isLoading = true;
            _this.placeSub = _this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe(function (place) {
                _this.place = place;
                _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.place.title, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    }),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.place.description, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(180)]
                    })
                });
                _this.isLoading = false;
            }, function (error) {
                _this.alertCtrl
                    .create({
                    header: 'An error occurred!',
                    message: 'Place could not be fetched. Please try again later.',
                    buttons: [
                        {
                            text: 'Okay',
                            handler: function () {
                                _this.router.navigate(['/places/tabs/offers']);
                            }
                        }
                    ]
                })
                    .then(function (alertEl) {
                    alertEl.present();
                });
            });
        });
    };
    EditOfferPage.prototype.onUpdateOffer = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl
            .create({
            message: 'Updating place...'
        })
            .then(function (loadingEl) {
            loadingEl.present();
            _this.placesService
                .updatePlace(_this.place.id, _this.form.value.title, _this.form.value.description)
                .subscribe(function () {
                loadingEl.dismiss();
                _this.form.reset();
                _this.router.navigate(['/places/tabs/offers']);
            });
        });
    };
    EditOfferPage.prototype.ngOnDestroy = function () {
        if (this.placeSub) {
            this.placeSub.unsubscribe();
        }
    };
    EditOfferPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-offer',
            template: __webpack_require__(/*! ./edit-offer.page.html */ "./src/app/places/offers/edit-offer/edit-offer.page.html"),
            styles: [__webpack_require__(/*! ./edit-offer.page.scss */ "./src/app/places/offers/edit-offer/edit-offer.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], EditOfferPage);
    return EditOfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-edit-offer-edit-offer-module.js.map