import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Constellation } from './constellation.model';

@Injectable()
export class ConstellationService {
		private constellations: Constellation[] = [];

		constructor(private http: Http) {}

		getMessages() {
			return this.http.get('http://localhost:3000/')
				.map((response: Response) => {
						const constellations = response.json().obj;
						let transformedConstellations: Constellation[] = [];
						for( let constellation of constellations) {
								transformedConstellations.push(new Constellation(
									constellation.url,
									constellation.name,
									constellation._id,
									constellation.user._id)
								);
						}
						this.constellations = transformedConstellations;
						return transformedConstellations;
				})
				.catch((error: Response) => Observable.throw(error.json()))

		}
}