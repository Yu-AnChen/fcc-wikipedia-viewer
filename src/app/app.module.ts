import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki-smart/wiki-smart.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		WikiComponent,
		WikiSmartComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		AngularFontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
