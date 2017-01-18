import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

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
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ WeekService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
