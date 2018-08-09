import { FooLibModule } from 'foo-lib';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [FooLibModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
