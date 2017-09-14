import { Component, Input } from '@angular/core';

import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html'
})

export class CommentComponent {
	@Input() comment: Comment;

	constructor(private commentService: CommentService){}

}