"use strict";
var NavigationBox = (function () {
    function NavigationBox(linkDescription, linkText, linkUrl) {
        this.isHidden = true;
        this.isHovered = false;
        this.linkDescription = linkDescription;
        this.linkText = linkText;
        this.linkUrl = linkUrl;
    }
    NavigationBox.prototype.displayShortDescription = function (description, length) {
        var trimmedString = description.substring(0, length) + "...";
        return trimmedString;
    };
    return NavigationBox;
}());
exports.NavigationBox = NavigationBox;
//# sourceMappingURL=navigation-box.model.js.map