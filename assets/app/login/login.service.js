import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { User } from './user.model';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://constellations-env.icamfpwgk9.ca-central-1.elasticbeanstalk.com/login', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    LoginService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://constellations-env.icamfpwgk9.ca-central-1.elasticbeanstalk.com/login/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    LoginService.prototype.logout = function () {
        localStorage.clear();
    };
    LoginService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    return LoginService;
}());
export { LoginService };
