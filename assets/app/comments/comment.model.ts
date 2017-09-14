export class Comment {
	time: Date;
	content: string;
	commentId: string;
	userId: string;

	constructor(time: Date, content: string, commentId: string, userId: string) {
		this.time = time;
		this.content = content;
		this.commentId = commentId;
		this.userId = userId;
	}
}