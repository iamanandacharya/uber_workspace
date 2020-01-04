(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.page.html":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-button (click)=\"onOpenMenu()\">\n        Open\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"all\" checked>All Places</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable Places</ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid\n    *ngIf=\"!isLoading && (!relevantPlaces || relevantPlaces.length <= 0)\"\n  >\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <p>There are no bookable places right now, please come back later!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && relevantPlaces.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle\n              >{{ relevantPlaces[0].price | currency }} /\n              Night</ion-card-subtitle\n            >\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imageUrl\"></ion-img>\n          <ion-card-content>\n            <p>{{ relevantPlaces[0].description }}</p>\n          </ion-card-content>\n          <div>\n            <ion-button\n              fill=\"clear\"\n              color=\"primary\"\n              [routerLink]=\"[\n                '/',\n                'places',\n                'tabs',\n                'discover',\n                relevantPlaces[0].id\n              ]\"\n            >\n              More\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-virtual-scroll\n          [items]=\"listedLoadedPlaces\"\n          approxItemHeight=\"70px\"\n        >\n          <ion-item\n            [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\"\n            detail\n            *virtualItem=\"let place\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place.title }}</h2>\n              <p>{{ place.description }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placesService, menuCtrl, authService) {
        this.placesService = placesService;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.isLoading = false;
    }
    DiscoverPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesSub = this.placesService.places.subscribe(function (places) {
            _this.loadedPlaces = places;
            _this.relevantPlaces = _this.loadedPlaces;
            _this.listedLoadedPlaces = _this.relevantPlaces.slice(1);
        });
    };
    DiscoverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe(function () {
            _this.isLoading = false;
        });
    };
    DiscoverPage.prototype.onOpenMenu = function () {
        this.menuCtrl.toggle();
    };
    DiscoverPage.prototype.onFilterUpdate = function (event) {
        var _this = this;
        if (event.detail.value === 'all') {
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter(function (place) { return place.userId !== _this.authService.userId; });
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
    };
    DiscoverPage.prototype.ngOnDestroy = function () {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    };
    DiscoverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.page.html */ "./src/app/places/discover/discover.page.html"),
            styles: [__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map