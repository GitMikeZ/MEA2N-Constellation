import { Component } from '@angular/core';

@Component({
	selector: 'app-constellations',
	template: `
		<div class="row">
			<div class="col-md-10 col-offset-1">
				<app-constellation-list></app-constellation-list>
			</div>
		</div>
	`
})
export class ConstellationsComponent{

}