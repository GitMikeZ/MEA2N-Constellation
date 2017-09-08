import { Component } from '@angular/core';

import { ConstellationService } from './constellations/constellation.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['app.component.css'],
	providers: [ConstellationService]
})

export class AppComponent {

}