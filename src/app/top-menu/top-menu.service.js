"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var top_menu_model_1 = require('./top-menu.model');
var TopMenuService = (function () {
    function TopMenuService(http) {
        this.http = http;
        this.apiUrl = "./src/app/top-menu/top-menu-data.json";
    }
    ;
    TopMenuService.prototype.getMenuItems = function () {
        return this.http.get(this.apiUrl)
            .map(function (responseData) {
            return responseData.json().data;
        })
            .map(function (menuItems) {
            var results = [];
            if (menuItems) {
                menuItems.forEach(function (item) {
                    results.push(new top_menu_model_1.TopMenuItem(item.title, item.linkUrl));
                });
            }
            ;
            return results;
        })
            .catch(this.handleError);
    };
    ;
    TopMenuService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ;
    TopMenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TopMenuService);
    return TopMenuService;
}());
exports.TopMenuService = TopMenuService;
//# sourceMappingURL=top-menu.service.js.map