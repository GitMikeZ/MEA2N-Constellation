import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';
var CommentInputComponent = /** @class */ (function () {
    function CommentInputComponent(commentService) {
        this.commentService = commentService;
    }
    CommentInputComponent.prototype.onSubmit = function (form) {
        var date = new Date();
        var dat = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        var comment = new Comment(form.value.content, 'John', dat);
        this.commentService.addComment(comment)
            .subscribe(function (data) { return console.log(data); });
        form.resetForm();
    };
    return CommentInputComponent;
}());
export { CommentInputComponent };
