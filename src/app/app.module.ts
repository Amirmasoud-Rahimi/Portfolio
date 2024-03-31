import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TypingAnimatorModule} from "angular-typing-animator";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingAnimatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
