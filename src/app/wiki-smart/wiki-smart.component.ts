import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Subject } from 'rxjs/Subject';

import { WikipediaService } from '../wiki/wikipedia.service';

@Component({
	selector: 'app-wiki-smart',
	templateUrl: './wiki-smart.component.html',
	styleUrls: ['./wiki-smart.component.scss'],
	providers: [WikipediaService]
})
export class WikiSmartComponent implements OnInit {
	@ViewChild('term') term;
	items: Observable<any>;
	private isSearchingStream = new Subject<boolean>(); ;
	private searchTermStream = new Subject<string>();

	constructor(private wikipediaService: WikipediaService) { }

	search(term: string) {
		this.searchTermStream.next(term);
	}

	ngOnInit() {
		this.term.nativeElement.focus();
		this.items = this.searchTermStream
			.distinctUntilChanged()
			.do(term => this.isSearchingStream.next(true))
			.debounceTime(500)
			.distinctUntilChanged()
			.switchMap((term: string) => {
				if (!term) return Promise.resolve([]);
				return this.wikipediaService.search(term);
			})
			.do(result => this.isSearchingStream.next(false));
	}

}
