import { Component, OnInit } from '@angular/core';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';
var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(commentService) {
        this.commentService = commentService;
    }
    CommentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getComments()
            .subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    return CommentListComponent;
}());
export { CommentListComponent };
