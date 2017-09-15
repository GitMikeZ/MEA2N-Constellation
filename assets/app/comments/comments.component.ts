import { Component } from '@angular/core';
import { CommentInputComponent } from './comment-input.component';

@Component({
	selector: 'app-comments',
	template: `
		<div class="col-md-10 col-md-offset-1">
			<h2>Welcome to the Consellations Website!</h2>
			<p>This web-site was designed to showcase the mondern constellation
			star maps that resides in the Earth's celestial sphere.</p>
			<br>
			<app-comment-input></app-comment-input>
			<br>
			<app-comment-list></app-comment-list>
		</div>
	`
})

export class CommentsComponent {

}