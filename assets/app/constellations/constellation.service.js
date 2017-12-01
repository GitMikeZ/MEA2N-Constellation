import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Constellation } from './constellation.model';
var ConstellationService = /** @class */ (function () {
    function ConstellationService(http) {
        this.http = http;
    }
    ConstellationService.prototype.getConstellations = function () {
        var _this = this;
        return this.http.get('http://constellations-env.icamfpwgk9.ca-central-1.elasticbeanstalk.com/constellation')
            .map(function (response) {
            var constellations = response.json().obj;
            var transformedConstellations = [];
            for (var _i = 0, constellations_1 = constellations; _i < constellations_1.length; _i++) {
                var constellation = constellations_1[_i];
                transformedConstellations.push(new Constellation(constellation.url, constellation.name, constellation._id, constellation.user._id));
            }
            _this.constellations = transformedConstellations;
            return transformedConstellations;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return ConstellationService;
}());
export { ConstellationService };
