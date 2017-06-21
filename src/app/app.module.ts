import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki-smart/wiki-smart.component';

@NgModule({
	declarations: [
		AppComponent,
		WikiComponent,
		WikiSmartComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		JsonpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
