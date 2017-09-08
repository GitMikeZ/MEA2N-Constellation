import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { ConstellationComponent } from './constellations/constellation.component';
import { ConstellationListComponent } from './constellations/constellation-list.component';
import { ConstellationsComponent } from './constellations/constellations.component';

import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ConstellationComponent,
		ConstellationListComponent,
		ConstellationsComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		routing
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}