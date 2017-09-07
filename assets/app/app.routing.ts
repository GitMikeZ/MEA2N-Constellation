import { Routes, RouterModule } from "@angular/router";

import { ConstellationComponent } from './constellations/constellation.component';

const APP_ROUTES: Routes = [
		{ path: '', redirectTo: '/constellations', pathMatch: 'full' },
		{ path: 'constellations', component: ConstellationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);