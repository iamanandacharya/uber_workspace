(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./src/app/places/offers/offer-item/offer-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer.imageUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{ offer.title }}</h1>\n    <div class=\"offer-details\">\n      <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{\n        offer.availableFrom | date\n      }}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" class=\"space-left\" color=\"primary\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{\n        offer.availableTo | date\n      }}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>\n"

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-primary);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-primary); }\n\n.offer-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.offer-details .space-left {\n    margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BhcmVzaC9kZW1vLWxlYXJuL21hcHMtMDQtZmluaXNoZWQvc3JjL2FwcC9wbGFjZXMvb2ZmZXJzL29mZmVyLWl0ZW0vb2ZmZXItaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBRnJCO0lBS0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvb2ZmZXJzL29mZmVyLWl0ZW0vb2ZmZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ub2ZmZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnNwYWNlLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
  \******************************************************************/
/*! exports provided: OfferItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferItemComponent", function() { return OfferItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../place.model */ "./src/app/places/place.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OfferItemComponent = /** @class */ (function () {
    function OfferItemComponent() {
    }
    OfferItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _place_model__WEBPACK_IMPORTED_MODULE_1__["Place"])
    ], OfferItemComponent.prototype, "offer", void 0);
    OfferItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer-item',
            template: __webpack_require__(/*! ./offer-item.component.html */ "./src/app/places/offers/offer-item/offer-item.component.html"),
            styles: [__webpack_require__(/*! ./offer-item.component.scss */ "./src/app/places/offers/offer-item/offer-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OfferItemComponent);
    return OfferItemComponent;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.module.ts":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-item/offer-item.component */ "./src/app/places/offers/offer-item/offer-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_5__["OffersPage"]
    }
];
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_5__["OffersPage"], _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_6__["OfferItemComponent"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.page.html":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <div *ngIf=\"isLoading\" text-center>\n          <ion-spinner color=\"primary\"></ion-spinner>\n        </div>\n        <div text-center *ngIf=\"!isLoading && offers.length <= 0\">\n          <p>No offers found! Please create one first!</p>\n          <ion-button color=\"primary\" routerLink=\"/places/tabs/offers/new\"\n            >Offer New Place</ion-button\n          >\n        </div>\n        <ion-list *ngIf=\"!isLoading && offers.length > 0\">\n          <ion-item-sliding *ngFor=\"let offer of offers\" #slidingItem>\n            <app-offer-item [offer]=\"offer\"></app-offer-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option\n                color=\"secondary\"\n                (click)=\"onEdit(offer.id, slidingItem)\"\n              >\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/offers.page.scss":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/offers.page.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OffersPage = /** @class */ (function () {
    function OffersPage(placesService, router) {
        this.placesService = placesService;
        this.router = router;
        this.isLoading = false;
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesSub = this.placesService.places.subscribe(function (places) {
            _this.offers = places;
        });
    };
    OffersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe(function () {
            _this.isLoading = false;
        });
    };
    OffersPage.prototype.onEdit = function (offerId, slidingItem) {
        slidingItem.close();
        this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
        console.log('Editing item', offerId);
    };
    OffersPage.prototype.ngOnDestroy = function () {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    };
    OffersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.page.html */ "./src/app/places/offers/offers.page.html"),
            styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/places/offers/offers.page.scss")]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module.js.map