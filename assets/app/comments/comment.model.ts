export class Comment {
	content: string;
	username: string;
	date: string;
	commentId?: string;
	userId?: string;

	constructor(content: string,
							username: string,
							date: string,
							commentId?: string,
							userId?: string) {

		this.content = content;
		this.username = username;
		this.date = date;
		this.commentId = commentId;
		this.userId = userId;
	}
}