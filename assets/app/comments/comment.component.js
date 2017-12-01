import { Component, Input } from '@angular/core';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';
var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
    }
    return CommentComponent;
}());
export { CommentComponent };
