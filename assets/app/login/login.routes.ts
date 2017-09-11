import { Routes } from '@angular/router';

import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';

export const LOGIN_ROUTES: Routes = [
	{ path: '', redirectTo: 'signin', pathMatch: 'full' },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent }
];
