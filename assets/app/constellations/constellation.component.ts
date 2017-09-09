import { Component, Input } from '@angular/core';

import { Constellation } from './constellation.model';
import { ConstellationService } from './constellation.service';

@Component({
	selector: 'app-constellation',
	templateUrl: './constellation.component.html',
	styles: [`
			img {
				display: block;
				position: relative;
				width: 250px;
				height: 250px;
				margin: auto;
			}
			.panel-heading {
				font-weight: bold;
				text-align: center;
			}
	`]
})

export class ConstellationComponent {
	@Input() constellation: Constellation;

	constructor(private constellationService: ConstellationService) {}
}
