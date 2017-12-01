import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConstellationComponent } from './constellations/constellation.component';
import { ConstellationListComponent } from './constellations/constellation-list.component';
import { ConstellationsComponent } from './constellations/constellations.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './login/signin.component';
import { SignupComponent } from './login/signup.component';
import { LoginService } from './login/login.service';
import { CommentComponent } from './comments/comment.component';
import { CommentInputComponent } from './comments/comment-input.component';
import { CommentListComponent } from './comments/comment-list.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comments/comment.service';
import { FooterComponent } from './footer/footer.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
