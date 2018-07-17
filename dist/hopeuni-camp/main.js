(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camper/home/home.component */ "./src/app/pages/camper/home/home.component.ts");
/* harmony import */ var _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin/home-admin/home-admin.component */ "./src/app/pages/admin/home-admin/home-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'camper',
        component: _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'admin',
        component: _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_3__["HomeAdminComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ul>\n  <li><a [routerLink]=\"['/camper']\">Camper</a></li>\n  <li><a [routerLink]=\"['/admin']\">Admin</a></li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_camper_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/camper/announcements/announcements.component */ "./src/app/pages/camper/announcements/announcements.component.ts");
/* harmony import */ var _pages_camper_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/camper/schedule/schedule.component */ "./src/app/pages/camper/schedule/schedule.component.ts");
/* harmony import */ var _pages_camper_camper_info_camper_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/camper/camper-info/camper-info.component */ "./src/app/pages/camper/camper-info/camper-info.component.ts");
/* harmony import */ var _pages_camper_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/camper/feedback/feedback.component */ "./src/app/pages/camper/feedback/feedback.component.ts");
/* harmony import */ var _pages_camper_testimony_testimony_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/camper/testimony/testimony.component */ "./src/app/pages/camper/testimony/testimony.component.ts");
/* harmony import */ var _pages_admin_announcements_admin_announcements_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/admin/announcements-admin/announcements-admin.component */ "./src/app/pages/admin/announcements-admin/announcements-admin.component.ts");
/* harmony import */ var _pages_admin_schedule_admin_schedule_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin/schedule-admin/schedule-admin.component */ "./src/app/pages/admin/schedule-admin/schedule-admin.component.ts");
/* harmony import */ var _pages_admin_camper_info_admin_camper_info_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/admin/camper-info-admin/camper-info-admin.component */ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.ts");
/* harmony import */ var _pages_admin_feedback_admin_feedback_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/admin/feedback-admin/feedback-admin.component */ "./src/app/pages/admin/feedback-admin/feedback-admin.component.ts");
/* harmony import */ var _pages_admin_testimony_admin_testimony_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/admin/testimony-admin/testimony-admin.component */ "./src/app/pages/admin/testimony-admin/testimony-admin.component.ts");
/* harmony import */ var _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/camper/home/home.component */ "./src/app/pages/camper/home/home.component.ts");
/* harmony import */ var _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/admin/home-admin/home-admin.component */ "./src/app/pages/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _pages_admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin/login-admin/login-admin.component */ "./src/app/pages/admin/login-admin/login-admin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_camper_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsComponent"],
                _pages_camper_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"],
                _pages_camper_camper_info_camper_info_component__WEBPACK_IMPORTED_MODULE_7__["CamperInfoComponent"],
                _pages_camper_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
                _pages_camper_testimony_testimony_component__WEBPACK_IMPORTED_MODULE_9__["TestimonyComponent"],
                _pages_admin_announcements_admin_announcements_admin_component__WEBPACK_IMPORTED_MODULE_10__["AnnouncementsAdminComponent"],
                _pages_admin_schedule_admin_schedule_admin_component__WEBPACK_IMPORTED_MODULE_11__["ScheduleAdminComponent"],
                _pages_admin_camper_info_admin_camper_info_admin_component__WEBPACK_IMPORTED_MODULE_12__["CamperInfoAdminComponent"],
                _pages_admin_feedback_admin_feedback_admin_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackAdminComponent"],
                _pages_admin_testimony_admin_testimony_admin_component__WEBPACK_IMPORTED_MODULE_14__["TestimonyAdminComponent"],
                _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_16__["HomeAdminComponent"],
                _pages_admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_17__["LoginAdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // Import HttpClientModule
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/announcements-admin/announcements-admin.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/announcements-admin/announcements-admin.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  announcements-admin works!\n</p>\n\n<div>\n\t<p> <label> Id </label> <input type='number' #id> </p>\n\t<p> <label> Description </label> <input type='text' #description> </p>\n\t<p> <button (click)=\"createAnno(id.value, description.value)\"> Create Announcement </button> </p>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/announcements-admin/announcements-admin.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/announcements-admin/announcements-admin.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/announcements-admin/announcements-admin.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/announcements-admin/announcements-admin.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AnnouncementsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsAdminComponent", function() { return AnnouncementsAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_announcements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/announcements.service */ "./src/app/service/announcements.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementsAdminComponent = /** @class */ (function () {
    function AnnouncementsAdminComponent(annoService) {
        this.annoService = annoService;
    }
    AnnouncementsAdminComponent.prototype.ngOnInit = function () {
    };
    AnnouncementsAdminComponent.prototype.createAnno = function (id, description) {
        var anno = { id: id, description: description };
        this.annoService.appendSheet(anno).subscribe(function (response) {
            console.log(response);
        });
    };
    AnnouncementsAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcements-admin',
            template: __webpack_require__(/*! ./announcements-admin.component.html */ "./src/app/pages/admin/announcements-admin/announcements-admin.component.html"),
            styles: [__webpack_require__(/*! ./announcements-admin.component.scss */ "./src/app/pages/admin/announcements-admin/announcements-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_announcements_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementsService"]])
    ], AnnouncementsAdminComponent);
    return AnnouncementsAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/camper-info-admin/camper-info-admin.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  camper-info-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/camper-info-admin/camper-info-admin.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/camper-info-admin/camper-info-admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: CamperInfoAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamperInfoAdminComponent", function() { return CamperInfoAdminComponent; });
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

var CamperInfoAdminComponent = /** @class */ (function () {
    function CamperInfoAdminComponent() {
    }
    CamperInfoAdminComponent.prototype.ngOnInit = function () {
    };
    CamperInfoAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camper-info-admin',
            template: __webpack_require__(/*! ./camper-info-admin.component.html */ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.html"),
            styles: [__webpack_require__(/*! ./camper-info-admin.component.scss */ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CamperInfoAdminComponent);
    return CamperInfoAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/feedback-admin/feedback-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/feedback-admin/feedback-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feedback-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/feedback-admin/feedback-admin.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/feedback-admin/feedback-admin.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/feedback-admin/feedback-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/feedback-admin/feedback-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedbackAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackAdminComponent", function() { return FeedbackAdminComponent; });
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

var FeedbackAdminComponent = /** @class */ (function () {
    function FeedbackAdminComponent() {
    }
    FeedbackAdminComponent.prototype.ngOnInit = function () {
    };
    FeedbackAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-admin',
            template: __webpack_require__(/*! ./feedback-admin.component.html */ "./src/app/pages/admin/feedback-admin/feedback-admin.component.html"),
            styles: [__webpack_require__(/*! ./feedback-admin.component.scss */ "./src/app/pages/admin/feedback-admin/feedback-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackAdminComponent);
    return FeedbackAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/home-admin/home-admin.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/home-admin/home-admin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-admin *ngIf=\"requiresLogin()\"></app-login-admin>\n<div *ngIf=\"!requiresLogin()\">\n\t<app-announcements-admin></app-announcements-admin>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/home-admin/home-admin.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/home-admin/home-admin.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/home-admin/home-admin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/home-admin/home-admin.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeAdminComponent = /** @class */ (function () {
    function HomeAdminComponent(activatedRouter, router, oauth) {
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.oauth = oauth;
    }
    HomeAdminComponent.prototype.requiresLogin = function () {
        return !this.oauth.hasOAuth();
    };
    HomeAdminComponent.prototype.ngOnInit = function () {
        var arr = ["hello", "byebye", ["a", "b", { "d": "Hello" }]];
        this.json = JSON.stringify(arr, null, 2);
    };
    HomeAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__(/*! ./home-admin.component.html */ "./src/app/pages/admin/home-admin/home-admin.component.html"),
            styles: [__webpack_require__(/*! ./home-admin.component.scss */ "./src/app/pages/admin/home-admin/home-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleOAuthService"]])
    ], HomeAdminComponent);
    return HomeAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/login-admin/login-admin.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/login-admin/login-admin.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login-admin works!\n\n  <a [href]=\"getAuthLink()\"><button> Login With Google </button></a>\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/login-admin/login-admin.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/login-admin/login-admin.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/login-admin/login-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/login-admin/login-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(oauth) {
        this.oauth = oauth;
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
        this.oauth.extractToken(window.location.hash);
    };
    LoginAdminComponent.prototype.getAuthLink = function () {
        return this.oauth.getAuthUrl();
    };
    LoginAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-admin',
            template: __webpack_require__(/*! ./login-admin.component.html */ "./src/app/pages/admin/login-admin/login-admin.component.html"),
            styles: [__webpack_require__(/*! ./login-admin.component.scss */ "./src/app/pages/admin/login-admin/login-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleOAuthService"]])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/schedule-admin/schedule-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/schedule-admin/schedule-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  schedule-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/schedule-admin/schedule-admin.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/schedule-admin/schedule-admin.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/schedule-admin/schedule-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/schedule-admin/schedule-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: ScheduleAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAdminComponent", function() { return ScheduleAdminComponent; });
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

var ScheduleAdminComponent = /** @class */ (function () {
    function ScheduleAdminComponent() {
    }
    ScheduleAdminComponent.prototype.ngOnInit = function () {
    };
    ScheduleAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-admin',
            template: __webpack_require__(/*! ./schedule-admin.component.html */ "./src/app/pages/admin/schedule-admin/schedule-admin.component.html"),
            styles: [__webpack_require__(/*! ./schedule-admin.component.scss */ "./src/app/pages/admin/schedule-admin/schedule-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleAdminComponent);
    return ScheduleAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/testimony-admin/testimony-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/testimony-admin/testimony-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  testimony-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/testimony-admin/testimony-admin.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/testimony-admin/testimony-admin.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/testimony-admin/testimony-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/testimony-admin/testimony-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestimonyAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyAdminComponent", function() { return TestimonyAdminComponent; });
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

var TestimonyAdminComponent = /** @class */ (function () {
    function TestimonyAdminComponent() {
    }
    TestimonyAdminComponent.prototype.ngOnInit = function () {
    };
    TestimonyAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimony-admin',
            template: __webpack_require__(/*! ./testimony-admin.component.html */ "./src/app/pages/admin/testimony-admin/testimony-admin.component.html"),
            styles: [__webpack_require__(/*! ./testimony-admin.component.scss */ "./src/app/pages/admin/testimony-admin/testimony-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonyAdminComponent);
    return TestimonyAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/announcements/announcements.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/camper/announcements/announcements.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1> Annoucnement </h1>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/camper/announcements/announcements.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/camper/announcements/announcements.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/announcements/announcements.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/camper/announcements/announcements.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function() { return AnnouncementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_announcements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/announcements.service */ "./src/app/service/announcements.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementsComponent = /** @class */ (function () {
    function AnnouncementsComponent(annoService) {
        this.annoService = annoService;
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.annoService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
        });
    };
    AnnouncementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcements',
            template: __webpack_require__(/*! ./announcements.component.html */ "./src/app/pages/camper/announcements/announcements.component.html"),
            styles: [__webpack_require__(/*! ./announcements.component.scss */ "./src/app/pages/camper/announcements/announcements.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_announcements_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementsService"]])
    ], AnnouncementsComponent);
    return AnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/camper-info/camper-info.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/camper/camper-info/camper-info.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1> Camper Info </h1>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/camper-info/camper-info.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/camper/camper-info/camper-info.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/camper-info/camper-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/camper/camper-info/camper-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: CamperInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamperInfoComponent", function() { return CamperInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_camper_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/camper-info.service */ "./src/app/service/camper-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CamperInfoComponent = /** @class */ (function () {
    function CamperInfoComponent(camperInfoService) {
        this.camperInfoService = camperInfoService;
    }
    CamperInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.camperInfoService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
        });
    };
    CamperInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camper-info',
            template: __webpack_require__(/*! ./camper-info.component.html */ "./src/app/pages/camper/camper-info/camper-info.component.html"),
            styles: [__webpack_require__(/*! ./camper-info.component.scss */ "./src/app/pages/camper/camper-info/camper-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_camper_info_service__WEBPACK_IMPORTED_MODULE_1__["CamperInfoService"]])
    ], CamperInfoComponent);
    return CamperInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/feedback/feedback.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/feedback/feedback.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1> Feedback </h1>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/feedback/feedback.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/feedback/feedback.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/feedback/feedback.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/camper/feedback/feedback.component.ts ***!
  \*************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/feedback.service */ "./src/app/service/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/pages/camper/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/pages/camper/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/camper/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n\n<app-announcements></app-announcements>\n<app-camper-info></app-camper-info>\n<app-schedule></app-schedule>\n<app-feedback></app-feedback>\n<app-testimony></app-testimony>"

/***/ }),

/***/ "./src/app/pages/camper/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/camper/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/camper/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/camper/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/camper/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1> Schedule </h1>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule.component.ts ***!
  \*************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/schedule.service */ "./src/app/service/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(scheduleService) {
        this.scheduleService = scheduleService;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
        });
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/pages/camper/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/pages/camper/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_1__["ScheduleService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/testimony/testimony.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/camper/testimony/testimony.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1> Testimony </h1>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/testimony/testimony.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/camper/testimony/testimony.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/testimony/testimony.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/testimony/testimony.component.ts ***!
  \***************************************************************/
/*! exports provided: TestimonyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyComponent", function() { return TestimonyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_testimony_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/testimony.service */ "./src/app/service/testimony.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonyComponent = /** @class */ (function () {
    function TestimonyComponent(testimonyService) {
        this.testimonyService = testimonyService;
    }
    TestimonyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testimonyService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
        });
    };
    TestimonyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimony',
            template: __webpack_require__(/*! ./testimony.component.html */ "./src/app/pages/camper/testimony/testimony.component.html"),
            styles: [__webpack_require__(/*! ./testimony.component.scss */ "./src/app/pages/camper/testimony/testimony.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_testimony_service__WEBPACK_IMPORTED_MODULE_1__["TestimonyService"]])
    ], TestimonyComponent);
    return TestimonyComponent;
}());



/***/ }),

/***/ "./src/app/service/announcements.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/announcements.service.ts ***!
  \**************************************************/
/*! exports provided: AnnouncementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsService", function() { return AnnouncementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
/* harmony import */ var _google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnnouncementsService = /** @class */ (function () {
    function AnnouncementsService(googleSheetService, googleOAuthService) {
        this.googleSheetService = googleSheetService;
        this.googleOAuthService = googleOAuthService;
        this.sheetname = "announcements";
    }
    AnnouncementsService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    AnnouncementsService.prototype.appendSheet = function (announcement) {
        var accessToken = this.googleOAuthService.getAccessToken();
        return this.googleSheetService.append(this.sheetname, [announcement.description, announcement.id], accessToken);
    };
    AnnouncementsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"],
            _google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleOAuthService"]])
    ], AnnouncementsService);
    return AnnouncementsService;
}());



/***/ }),

/***/ "./src/app/service/camper-info.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/camper-info.service.ts ***!
  \************************************************/
/*! exports provided: CamperInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamperInfoService", function() { return CamperInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CamperInfoService = /** @class */ (function () {
    function CamperInfoService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "camperInfo";
    }
    CamperInfoService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    CamperInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], CamperInfoService);
    return CamperInfoService;
}());



/***/ }),

/***/ "./src/app/service/feedback.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/feedback.service.ts ***!
  \*********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = /** @class */ (function () {
    function FeedbackService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "feedback";
    }
    FeedbackService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/service/google-o-auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/google-o-auth.service.ts ***!
  \**************************************************/
/*! exports provided: GoogleOAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleOAuthService", function() { return GoogleOAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleOAuthService = /** @class */ (function () {
    function GoogleOAuthService(http) {
        this.http = http;
        this.endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        this.clientId = "947394714759-dfj9erkpjkc7ovptjs177gmlpfb0nb1d.apps.googleusercontent.com";
        this.clientSecret = "_zSNCEfA16GkLs92_-0Gor9x";
        this.redirectUri = "http://localhost:4200/admin";
        this.responseType = "token";
        this.scopes = Array.prototype.join.call([
            "https://www.googleapis.com/auth/spreadsheets"
        ], " ");
        this.apiEndPoint = this.endpoint + "?" + Array.prototype.join.call([
            "scope=" + this.scopes,
            "response_type=" + this.responseType,
            "redirect_uri=" + this.redirectUri,
            "client_id=" + this.clientId
        ], "&");
    }
    GoogleOAuthService.prototype.getAuthUrl = function () {
        return this.apiEndPoint;
    };
    GoogleOAuthService.prototype.getAccessToken = function () {
        return localStorage.getItem("access_token");
    };
    GoogleOAuthService.prototype.hasOAuth = function () {
        return localStorage.getItem("access_token") != null &&
            localStorage.getItem("expires_in") != null &&
            new Date(localStorage.getItem("expires_in")).getTime() - new Date().getTime() > 0;
    };
    GoogleOAuthService.prototype.saveOAuth = function (params) {
        console.log("Saving OAuth");
        var now = new Date();
        now.setSeconds(+now.getSeconds() + +params.expires_in);
        localStorage.setItem("access_token", params.access_token);
        localStorage.setItem("token_type", params.token_type);
        localStorage.setItem("expires_in", now.toString());
    };
    GoogleOAuthService.prototype.extractToken = function (hashString) {
        var params = {};
        hashString.substr(1).split("&").map(function (parts) {
            var keyValue = parts.split("=");
            params[keyValue[0]] = keyValue[1];
        });
        this.saveOAuth(params);
        return params['access_token'];
    };
    GoogleOAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleOAuthService);
    return GoogleOAuthService;
}());



/***/ }),

/***/ "./src/app/service/googlesheet.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/googlesheet.service.ts ***!
  \************************************************/
/*! exports provided: GooglesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglesheetService", function() { return GooglesheetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglesheetService = /** @class */ (function () {
    function GooglesheetService(http) {
        this.http = http;
        this.API_KEY = "AIzaSyAuPPsTAsNyQc4UiByhjvP4kGc_chB0DqA";
        this.SHEET_ID = "1CaSxTF0GTyjppwlmiuCN36dYt_tjw31E8zYfLJh4grM";
    }
    GooglesheetService.prototype.load = function (sheetname) {
        var url = "https://sheets.googleapis.com/v4/spreadsheets/" + this.SHEET_ID + "/values/" + sheetname + "?key=" + this.API_KEY;
        return this.http.get(url);
    };
    GooglesheetService.prototype.append = function (sheetname, values, access_token) {
        var requestBody = { "values": [values] };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        });
        var url = "https://sheets.googleapis.com/v4/spreadsheets/"
            + this.SHEET_ID
            + "/values/"
            + sheetname
            + ":append"
            + "?valueInputOption=USER_ENTERED";
        console.log(url, requestBody, headers);
        return this.http.post(url, requestBody, { headers: headers });
    };
    GooglesheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GooglesheetService);
    return GooglesheetService;
}());



/***/ }),

/***/ "./src/app/service/schedule.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/schedule.service.ts ***!
  \*********************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleService = /** @class */ (function () {
    function ScheduleService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "schedule";
    }
    ScheduleService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    ScheduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], ScheduleService);
    return ScheduleService;
}());



/***/ }),

/***/ "./src/app/service/testimony.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/testimony.service.ts ***!
  \**********************************************/
/*! exports provided: TestimonyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyService", function() { return TestimonyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonyService = /** @class */ (function () {
    function TestimonyService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "testimony";
    }
    TestimonyService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    TestimonyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], TestimonyService);
    return TestimonyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeremiahang/Documents/personal/codes/helpers/webapps/hopeuni-camp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map