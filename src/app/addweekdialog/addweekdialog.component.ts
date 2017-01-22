import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-addweekdialog',
  templateUrl: './addweekdialog.component.html',
  styleUrls: ['./addweekdialog.component.css']
})
export class AddweekdialogComponent{
  constructor(public dialogRef: MdDialogRef<AddweekdialogComponent>) { }
  nuweek;
  nuweekdate: Object;
  chkDob = localStorage.getItem('lc-dob');
}
