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
var core_1 = require("@angular/core");
var top_menu_service_1 = require("./top-menu.service");
var TopMenuComponent = (function () {
    function TopMenuComponent(topMenuService) {
        this.topMenuService = topMenuService;
        this.show = false;
    }
    TopMenuComponent.prototype.getNavigationBoxes = function () {
        var _this = this;
        this.topMenuService.getMenuItems()
            .subscribe(function (response) { return _this.topMenuItems = response; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    TopMenuComponent.prototype.ngOnInit = function () {
        this.getNavigationBoxes();
    };
    ;
    TopMenuComponent.prototype.displayMenuForMobile = function () {
        this.show = !this.show;
    };
    TopMenuComponent = __decorate([
        core_1.Component({
            selector: "<nav>",
            templateUrl: './src/app/top-menu/top-menu.component.html',
            providers: [top_menu_service_1.TopMenuService]
        }), 
        __metadata('design:paramtypes', [top_menu_service_1.TopMenuService])
    ], TopMenuComponent);
    return TopMenuComponent;
}());
exports.TopMenuComponent = TopMenuComponent;
//# sourceMappingURL=top-menu.component.js.map