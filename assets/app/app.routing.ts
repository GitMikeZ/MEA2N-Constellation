import { Routes, RouterModule } from "@angular/router";

import { ConstellationsComponent } from './constellations/constellations.component';

const APP_ROUTES: Routes = [
		{ path: '', redirectTo: '/constellations', pathMatch: 'full' },
		{ path: 'constellations', component: ConstellationsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);