import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

import { CommentService } from './comment.service';
import { Comment } from './comment.model';

@Component({
	selector: 'app-comment-input',
	templateUrl: './comment-input.component.html'
})
export class CommentInputComponent {
	comment: Comment;

	constructor(private commentService: CommentService ){}

	onSubmit(form: NgForm) {
		var date = new Date();
		var dat = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();

		const comment = new Comment(form.value.content, 'John', dat);
		this.commentService.addComment(comment)
			.subscribe(
				data => console.log(data),
			);
			form.resetForm();
	}
}