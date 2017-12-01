import { Component, OnInit } from '@angular/core';

import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
	selector: 'app-comment-list',
	template: `
			<app-comment
					[comment]="comment"
					*ngFor="let comment of comments"></app-comment>
	`
})
export class CommentListComponent implements OnInit {
	comments: Comment[];

	constructor(private commentService: CommentService){}

	ngOnInit() {
		this.commentService.getComments()
			.subscribe(
				(comments: Comment[]) => {
					this.comments = comments;
				}
			);
	}
}