import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	template: `
		<div class="container">
			<div class="col-md-4 col-md-offset-4">
				<ul class="nav nav-tabs">
					<li routerLinkActive="active"><a [routerLink]="['signin']">Signin</a></li>
					<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
				</ul>
			<div>
			<br>
			<router-outlet></router-outlet>
		</div>
	`
})
export class LoginComponent {
	constructor(private authService: LoginService) {}

}