import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import { ErrorService } from "../errors/error.service";

// wut?
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Message } from "./message.model";

@Injectable()

export class MessageService {
	private messages: Message[] = [];

	messageIsEdit = new EventEmitter<Message>();

	constructor(private http: Http, private errorService: ErrorService ) {

	}

	addMessage(message: Message) {
		// unshift adds to the front of array
		// instead of push from the back

		//console.log(this.messages);
		this.messages.unshift(message);
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';
		return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
				.map((response: Response) => {
						const result = response.json();
						const message = new Message(result.obj.content, 'Dummy', result.obj._id, null);
						this.messages.unshift(message);
						return message;
				})
				.catch((error: Response) => {
						this.errorService.handleError(error.json());
						return Observable.throw(error.json());
				});
	}

	getMessages() {
		return this.http.get('http://localhost:3000/message')
				.map((response: Response) => {
						const messages = response.json().obj;
						let transformedMessages: Message[] = [];
						for( let message of messages ) {
							transformedMessages.push(new Message(message.content, 'Dummy', message._id, null));
						}
						this.messages = transformedMessages;
						return transformedMessages;
				})
				.catch((error: Response) => {
						this.errorService.handleError(error.json());
						return Observable.throw(error.json());
				});
	}

	editMessage(message: Message) {
		this.messageIsEdit.emit(message);
	}

	updateMessage(message: Message) {
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';
		return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
				.map((response: Response) => response.json())
				.catch((error: Response) => {
						this.errorService.handleError(error.json());
						return Observable.throw(error.json());
				});
	}

	// This method might not be the best way
	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';
				return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
				.map((response: Response) => response.json())
				.catch((error: Response) => {
						this.errorService.handleError(error.json());
						return Observable.throw(error.json());
				});
	}
}