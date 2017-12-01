var Comment = /** @class */ (function () {
    function Comment(content, username, date, commentId, userId) {
        this.content = content;
        this.username = username;
        this.date = date;
        this.commentId = commentId;
        this.userId = userId;
    }
    return Comment;
}());
export { Comment };
