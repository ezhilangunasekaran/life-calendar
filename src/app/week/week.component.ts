import { Component, OnInit, ViewChild } from '@angular/core';
import {Week} from "../week"; (Week)
import {WeekService} from "../services/week.service"; (WeekService)
import { CapturedobComponent } from '../capturedob/capturedob.component'
import { AddweekdialogComponent } from '../addweekdialog/addweekdialog.component';
import { MdDialog,MdSidenav } from '@angular/material';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  // 90yrs week list generated from weekservice
  weekarr : Object[] = this._weekService.getCurrentWeeks();

  // list of weeks and their corresponding events from localStorage
  weeks = JSON.parse(localStorage.getItem('life-calendar'));


  lastDialogResult: Object;
  singleWeek: Week = {weekId:0,weekTitle:null};
  deleteWeek: Week = {weekId:0,weekTitle:null};

  constructor(private _weekService: WeekService,public _dialog: MdDialog) { }

  // DOB dialog popup
  dobDialog(){
    let dialogRef = this._dialog.open(CapturedobComponent);
    dialogRef.afterClosed().subscribe(result =>{

      this._weekService.setDob(result);
      this.weekarr = this._weekService.getCurrentWeeks();
    })
  }

  // add week dialog
  addweekDialog(){
    let dialogRef = this._dialog.open(AddweekdialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
      if(result != undefined){
        this.addWeekEvent(this.lastDialogResult);
      }
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

  // for sidebar
  @ViewChild('sidenav') sidenav: MdSidenav;
  listWeekEvents = [];
  currentWeekIndex;

  showWeek(wk,cwi){
    this.currentWeekIndex = cwi;
    this.listWeekEvents = wk;
    this.sidenav.open();
  }

  //CRUD operation
  addWeekEvent(newweek){
    const ONE_DAY = 1000*60*60*24;
    var menWeek;
    var dob;

    if(this._weekService.getDob() == null){
      dob = new Date().getTime();
    }else {
     dob = new Date(this._weekService.getDob()).getTime();
    }
    menWeek = new Date(newweek.nweek).getTime();

    this.singleWeek.weekId = Math.round(((menWeek-dob)/ONE_DAY)/7);
    this.singleWeek.weekTitle = newweek.title;
    if(!this.weeks[this.singleWeek.weekId]){
      this.weeks[this.singleWeek.weekId] = [];
    }
    this.weeks[this.singleWeek.weekId].push(this.singleWeek.weekTitle);
    this._weekService.addWeekEvent(this.singleWeek);

  }

  deleteWeekEvent(index,mainindex){
    let getDelEvent = this.weeks[mainindex].splice(index,1);
    if(this.weeks[mainindex].length ==0){
      delete this.weeks[mainindex];
    }
    this.deleteWeek.weekId = mainindex;
    this.deleteWeek.weekTitle = getDelEvent;
    this._weekService.deleteWeekEvent(this.deleteWeek);
  }
}
