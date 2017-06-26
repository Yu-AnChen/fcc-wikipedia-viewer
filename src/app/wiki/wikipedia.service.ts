import { Injectable } from '@angular/core';
import { Jsonp, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {

	constructor(
		private jsonp: Jsonp,
		private http: Http) { }

	search(term: string) {
		let url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php';

		let params = new URLSearchParams();
		params.set('search', term);
		params.set('action', 'opensearch');
		params.set('format', 'json');

		return this.http
			.get(url, { search: params })
			.map(this.extractData)
			.map(data => this.parseData(data));
	}

	private extractData(res: Response): any {
		let body = res.json();
		// console.log(res);
		return body || [];
	}
	private parseData(data: Array<any>) {
		if (!data[1]) return [];
		return data[1].map((element, idx) => [element, data[2][idx], data[3][idx]]);
	}
}
