(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.page.html":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"tutorial-page\" color=\"dark\">\n    <div padding-top text-end>\n      <ion-button fill=\"clear\" [routerLink]=\"'/login/'\" routerDirection=\"forward\" color=\"light\">Saltar<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\n    </div>\n  \n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <br>\n                  <br>\n                  <br>\n                  <img src=\"../../assets/biva.png\" alt=\"\">\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <h2>Bienvenido a ETH Pre-BIVA</h2>\n                  <p color=\"light\">La forma más fácil, rápida y segura de comprar acciones con Ethereum.</p>\n                  <br>\n                  <br>\n                  <br>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n  \n      <ion-slide>\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                      <img src=\"../../assets/blockchain.png\" alt=\"\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <h2>Presentamos MAYA Coin</h2>\n                      <p>Un Token para financiamiento de empresas privadas Mexicanas.</p>\n                      <br>\n                      <br>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-slide>\n  \n      <ion-slide>\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                    <div></div>\n                      <img src=\"../../assets/ether.png\" alt=\"\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                          <h2>Respaldado Etherium</h2>\n                          <p>Nuestra plataforma de inversion esta respaldada por Smart Contract.</p>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-slide>\n  \n      <ion-slide>\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                      <img src=\"../../assets/rising.png\" alt=\"\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <h2>¿Estas listo para Invertir?</h2>\n                      <ion-button expand=\"block\" fill=\"clear\" [routerLink]=\"'/login/'\" routerDirection=\"forward\">Comenzar</ion-button>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>"

/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tutorial-page .toolbar-background {\n  background: #fff;\n  border-color: transparent; }\n\n.tutorial-page .slide-zoom {\n  height: 100%; }\n\n.tutorial-page .slide-title {\n  margin-top: 2.8rem; }\n\n.tutorial-page .slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 18px 0; }\n\n.tutorial-page b {\n  font-weight: 500; }\n\n.tutorial-page p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646B; }\n\n.tutorial-page p b {\n    color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNpby9pb25pYy9IYWNrYXBhbG9vemEyMDE5L0Zyb250ZW5kL0lvbmljL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdNLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTs7QUFKL0I7RUFRTSxZQUFZLEVBQUE7O0FBUmxCO0VBWU0sa0JBQWtCLEVBQUE7O0FBWnhCO0VBZ0JNLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQWxCcEI7RUFzQk0sZ0JBQWdCLEVBQUE7O0FBdEJ0QjtFQTBCTSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBN0JwQjtJQWdDUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udHV0b3JpYWwtcGFnZSB7XG5cbiAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgXG4gICAgLnNsaWRlLXpvb20ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLnNsaWRlLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgICB9XG4gIFxuICAgIC5zbGlkZS1pbWFnZSB7XG4gICAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbjogMThweCAwO1xuICAgIH1cbiAgXG4gICAgYiB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgXG4gICAgcCB7XG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6ICM2MDY0NkI7XG4gIFxuICAgICAgYiB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPage = /** @class */ (function () {
    function LandingPage() {
    }
    LandingPage.prototype.ngOnInit = function () {
    };
    LandingPage.prototype.nfclick = function () {
    };
    LandingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPage);
    return LandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map