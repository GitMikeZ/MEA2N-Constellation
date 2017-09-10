import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html'
})

export class SigninComponent {
	myForm: FormGroup;

	constructor(private authService: AuthService, private router: Router ) {}

	onSubmit() {
			const user = new User(this.myForm.value.email, this.myForm.value.password);
			this.authService
	}
}