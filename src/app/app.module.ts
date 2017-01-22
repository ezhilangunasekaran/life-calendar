import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { WeekService } from './services/week.service';
import { CapturedobComponent } from './capturedob/capturedob.component';
import { AddweekdialogComponent } from './addweekdialog/addweekdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    CapturedobComponent,
    AddweekdialogComponent
  ],
  entryComponents: [
    AppComponent,WeekComponent,CapturedobComponent,AddweekdialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    DatePickerModule
  ],
  providers: [ WeekService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
