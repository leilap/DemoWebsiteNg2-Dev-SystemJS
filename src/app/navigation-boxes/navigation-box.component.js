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
var navigation_box_service_1 = require('./navigation-box.service');
var NavigationBoxComponent = (function () {
    function NavigationBoxComponent(navigationBoxService) {
        this.navigationBoxService = navigationBoxService;
    }
    NavigationBoxComponent.prototype.getNavigationBoxes = function () {
        var _this = this;
        this.navigationBoxService.getNavigationBoxes()
            .subscribe(function (response) { return _this.navigationBoxes = response; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    NavigationBoxComponent.prototype.isCollapsed = function (navBox) {
        return navBox.isHidden;
    };
    ;
    NavigationBoxComponent.prototype.isHovered = function (navBox) {
        return navBox.isHovered;
    };
    ;
    NavigationBoxComponent.prototype.mouseEventFunc = function (navBox) {
        navBox.isHovered = !navBox.isHovered;
        return navBox.isHovered;
    };
    ;
    NavigationBoxComponent.prototype.ngOnInit = function () {
        this.getNavigationBoxes();
    };
    ;
    NavigationBoxComponent.prototype.toggle = function (navBox, repeaterIndex) {
        navBox.isHidden = !navBox.isHidden;
        this.navigationBoxes.forEach(function (item, i) {
            if (repeaterIndex != i) {
                item.isHidden = true;
            }
        });
    };
    ;
    NavigationBoxComponent = __decorate([
        core_1.Component({
            selector: '<navigation-boxes>',
            templateUrl: './src/app/navigation-boxes/navigation-box.component.html',
            providers: [navigation_box_service_1.NavigationBoxService]
        }), 
        __metadata('design:paramtypes', [navigation_box_service_1.NavigationBoxService])
    ], NavigationBoxComponent);
    return NavigationBoxComponent;
}());
exports.NavigationBoxComponent = NavigationBoxComponent;
//# sourceMappingURL=navigation-box.component.js.map