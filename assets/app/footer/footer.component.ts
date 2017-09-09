import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styles: [`
		#footer-list {
			background: #555;
			padding: 30px;
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		li {
			display: block;
			color: white;
			text-align: left;
			font-size: 7px;
		}
	`]
})

export class FooterComponent {

}