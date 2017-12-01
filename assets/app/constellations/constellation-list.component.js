import { Component, OnInit } from '@angular/core';
import { Constellation } from "./constellation.model";
import { ConstellationService } from "./constellation.service";
var ConstellationListComponent = /** @class */ (function () {
    function ConstellationListComponent(constellationService) {
        this.constellationService = constellationService;
    }
    ConstellationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.constellationService.getConstellations().subscribe(function (constellations) {
            _this.constellations = constellations;
        });
    };
    return ConstellationListComponent;
}());
export { ConstellationListComponent };
