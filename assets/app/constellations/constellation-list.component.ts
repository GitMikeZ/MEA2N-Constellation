import { Component, OnInit } from '@angular/core';

import { Constellation } from "./constellation.model";
import { ConstellationService } from "./constellation.service";

@Component({
	selector:'app-constellation-list',
	templateUrl: `
		<div class="container">
			<app-constellation
				[constellation]="constellation"
				*ngFor="let constellation of constellations">
			</app-constellation>
		</div>
		<br>
		<br>
		<app-footer></app-footer>
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