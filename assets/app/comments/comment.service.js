import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Comment } from './comment.model';
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.addComment = function (comment) {
        var _this = this;
        var body = JSON.stringify(comment);
        var headers = new Headers({ 'Content-type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://constellations-env.icamfpwgk9.ca-central-1.elasticbeanstalk.com/comment' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var comment = new Comment(result.obj.content, result.obj.user.username, result.obj.date, result.obj._id, result.obj.user._id);
            _this.comments.push(comment);
            return comment;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    CommentService.prototype.getComments = function () {
        var _this = this;
        return this.http.get('http://constellations-env.icamfpwgk9.ca-central-1.elasticbeanstalk.com/comment')
            .map(function (response) {
            var comments = response.json().obj;
            var transformedComments = [];
            for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
                var comment = comments_1[_i];
                transformedComments.push(new Comment(comment.content, comment.user.username, comment.date, comment._id, comment.user._id));
            }
            _this.comments = transformedComments;
            return transformedComments;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return CommentService;
}());
export { CommentService };
