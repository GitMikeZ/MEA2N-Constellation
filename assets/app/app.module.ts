import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { ConstellationComponent } from './constellations/constellation.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ConstellationComponent,
	],
	imports: [BrowserModule],
	bootstrap: [AppComponent]
})

export class AppModule {

}