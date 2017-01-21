import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-capturedob',
  template: `<form>
              <ng2-datepicker [options]="Date" [(ngModel)]="entered_dob" name="dob"></ng2-datepicker>
              <button md-raised-button (click)="dialogRef.close(entered_dob.formatted)" type="button">
              submit
              </button>
              </form>`,
  styleUrls: ['./capturedob.component.css']
})
export class CapturedobComponent{
  constructor(public dialogRef: MdDialogRef<CapturedobComponent>) { }
  entered_dob;
}
