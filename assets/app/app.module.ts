import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { ConstellationComponent } from './constellations/constellation.component';
import { ConstellationListComponent } from './constellations/constellation-list.component';
import { ConstellationsComponent } from './constellations/constellations.component';

import { routing } from './app.routing';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './login/signin.component';
import { SignupComponent } from './login/signup.component';
import { AuthService } from './login/auth.service';

import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ConstellationComponent,
		ConstellationListComponent,
		ConstellationsComponent,
		LoginComponent,
		SigninComponent,
		SignupComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		routing
	],
	providers: [
		AuthService
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}