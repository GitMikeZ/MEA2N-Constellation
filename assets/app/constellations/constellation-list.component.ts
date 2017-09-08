import { Component, OnInit } from '@angular/core';

import { Constellation } from "./constellation.model";
import { ConstellationService } from "./constellation.service";

@Component({
	selector:'app-constellation-list',
	templateUrl: `
			<app-constellation
						[constellation]="constellation"
						*ngFor="let constellation of constellations">
			</app-constellation>
	`
})

export class ConstellationListComponent implements OnInit {

	constellations: Constellation[];

	constructor(private constellationService: ConstellationService) {}

	ngOnInit() {
		this.constellationService.getConstellations().subscribe(
			(constellations: Constellation[]) => {
				this.constellations = constellations;
			}
		);
	}
}