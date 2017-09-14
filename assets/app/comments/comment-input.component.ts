import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

import { CommentService } from './comment.service';

@Component({
	selector: 'app-comment-input',
	templateUrl: './comment-input.component.html'
})
export class CommentInputComponent {
	comment: Comment;

	constructor(private commentService: CommentService ){}

	onSubmit(form: NgForm) {
		// const comment = new Comment(form.value.content, 'Max');
		//this.commentService.addComment(comment);
	}
}