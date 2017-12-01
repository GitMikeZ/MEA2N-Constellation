import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    return HeaderComponent;
}());
export { HeaderComponent };
