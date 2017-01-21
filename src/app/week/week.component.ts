import { Component, OnInit } from '@angular/core';
import {Week} from "../week"; (Week)
import {WeekService} from "../services/week.service"; (WeekService)
import { CapturedobComponent } from '../capturedob/capturedob.component'
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weeks = this._weekService.getWeeks();
  weekarr : Object[] = this._weekService.getCurrentWeeks();
  enteredDob: string;
  constructor(private _weekService: WeekService,public _dialog: MdDialog) { }

  dobDialog(){
    let dialogRef = this._dialog.open(CapturedobComponent);
    dialogRef.afterClosed().subscribe(result =>{
      this.enteredDob = result;
      this._weekService.setDob(result);
      this.weekarr = this._weekService.getCurrentWeeks();
    })
  }

  ngOnInit() {

  }
  //for adding class
  eventsNgClass(current,eventWeek){
    if(eventWeek != undefined){
      return 'eventWeek';
    } else if(current != undefined){
      return 'current';
    }
  }

  //CRUD operation
  addWeekEvent(newweek){
    var singleWeek: Week;
    const ONE_DAY = 1000*60*60*24;
    // from initial prompt
    var dob = new Date(localStorage.getItem('lc-dob')).getTime();
    // from date picker

    var menWeek = new Date(newweek.nweek).getTime();
    singleWeek.weekId = Math.round(((menWeek-dob)/ONE_DAY)/7);
    singleWeek.weekTitle = newweek.title;
    this._weekService.addWeekEvent(singleWeek);
  }

  deleteWeekEvent(index,mainindex){
    var deleteWeek: Week;
    this.weeks[mainindex].splice(index,1);
    if(this.weeks[mainindex].length ==0){
      delete this.weeks[mainindex];
    }
    deleteWeek.weekId = mainindex;
    deleteWeek.weekTitle = index.replace(/<(?:.|\n)*?>/gm, '');
    this._weekService.deleteWeekEvent(deleteWeek);
  }
}
