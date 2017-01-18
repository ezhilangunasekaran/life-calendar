import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { WeekService } from './services/week.service';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ WeekService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
