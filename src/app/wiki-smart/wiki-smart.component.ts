import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Subject } from 'rxjs/Subject';

import { WikipediaService } from '../wiki/wikipedia.service';

@Component({
	selector: 'app-wiki-smart',
	template: `
   		<h1>Smarter Wikipedia Demo</h1>
    	<p>Search when typing stops</p>
    	<input #term (keyup)="search(term.value)"/>
		<ul>
			<li *ngFor="let item of items | async">{{item}}</li>
		</ul>
	`,
	styleUrls: ['./wiki-smart.component.scss'],
	providers: [WikipediaService]
})
export class WikiSmartComponent implements OnInit {
	items: Observable<string[]>;

	constructor(private wikipediaService: WikipediaService) { }

	private searchTermStream = new Subject<string>();
	search(term: string) {
		console.log(term);
		this.searchTermStream.next(term);
		console.log(this.searchTermStream);
	}

	ngOnInit() {
		this.items = this.searchTermStream
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap((term: string) =>
				this.wikipediaService.search(term)
			);
	}

}
