import { Component, Input } from '@angular/core';
import { Constellation } from './constellation.model';
import { ConstellationService } from './constellation.service';
var ConstellationComponent = /** @class */ (function () {
    function ConstellationComponent(constellationService) {
        this.constellationService = constellationService;
    }
    return ConstellationComponent;
}());
export { ConstellationComponent };
