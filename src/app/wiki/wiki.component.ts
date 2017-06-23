import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
	selector: 'app-wiki',
	//   templateUrl: './wiki.component.html',
	template: `
		<h1>Wikipedia Demo</h1>
		<p>Search after each keystroke</p>
		<input #term (keyup)="search(term.value)"/>
		<ul>
			<li *ngFor="let item of items | async">{{item}}</li>
		</ul>
	`,
	styleUrls: ['./wiki.component.scss'],
	providers: [WikipediaService]
})
export class WikiComponent implements OnInit {
	// items: Observable<string[]>;

	constructor(private wikipediaService: WikipediaService) { }

	ngOnInit() {
	}

	// search(term: string) {
	// 	this.items = this.wikipediaService.search(term);
	// }
}
