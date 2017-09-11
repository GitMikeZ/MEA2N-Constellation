import { Routes, RouterModule } from "@angular/router";

import { ConstellationsComponent } from './constellations/constellations.component';
import { LoginComponent } from './login/login.component';
import { LOGIN_ROUTES } from './login/login.routes';

const APP_ROUTES: Routes = [
		{ path: '', redirectTo: '/constellations', pathMatch: 'full' },
		{ path: 'constellations', component: ConstellationsComponent },
		{ path: 'login', component: LoginComponent, children: LOGIN_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);