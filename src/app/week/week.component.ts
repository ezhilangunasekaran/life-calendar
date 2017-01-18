import { Component, OnInit } from '@angular/core';
import {Week} from "../week"; (Week)
import {WeekService} from "../services/week.service"; (WeekService)
import { MdSidenav,MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weeks = this._weekService.getWeeks();
  weekarr : Object[] = (function(){
    var input = [];
    const MAX_AGE = 4693;
    const ONE_DAY = 1000*60*60*24;
    var dob = new Date(localStorage.getItem('lc-dob')).getTime();
    var current_week = Math.round(((new Date().getTime()-dob)/ONE_DAY)/7);
    for (let i = 1; i <= MAX_AGE; i++) {
      if(i<current_week){
        input.push([{no:i,class:"current"}]);
      }else{
        input.push([{no:i}]);
      }
    }
    return input;
  }());
  constructor(private _weekService: WeekService) { }

  ngOnInit() {
  }

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
