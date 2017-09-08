import { Component, Input } from '@angular/core';

import { Constellation } from './constellation.model';
import { ConstellationService } from './constellation.service';

@Component({
	selector: 'app-constellation',
	templateUrl: './constellation.component.html',
})

export class ConstellationComponent {
	@Input() constellation: Constellation;

	constructor(private constellationService: ConstellationService) {}
}
