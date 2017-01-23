import { Injectable } from '@angular/core';
import { Week } from '../week';
import { Init } from '../init-weeks';

@Injectable()
export class WeekService extends Init{


  constructor() { super();
    console.log("Week service started");
    this.load();
  }
  dob: string = localStorage.getItem('lc-dob');
  // set DOB
  setDob(birthday:string){
    this.dob = birthday;
    localStorage.setItem('lc-dob',birthday);
    return this;
  }
  getDob(){
    return this.dob;
  }
  getCurrentWeeks(){
    let input = [];
    const MAX_AGE = 4693;
    const ONE_DAY = 1000*60*60*24;
    let current_week;
    if(this.getDob()){
      console.log("init");
      let dob = new Date(this.getDob()).getTime();
      current_week = Math.round(((new Date().getTime()-dob)/ONE_DAY)/7);
    }else {
      current_week = 0
    }

    for (let i = 1; i <= MAX_AGE; i++) {
      if(i<current_week){
        input.push([{no:i,class:"current"}]);
      }else{
        input.push([{no:i}]);
      }
    }
    //console.log(input);
    return input;
  }

  weeks: {} = JSON.parse(localStorage.getItem('life-calendar'));

  getWeeks(){
    return this.weeks;
  }

  addWeekEvent(singleweek: Week): WeekService{
    this.weeks = JSON.parse(localStorage.getItem('life-calendar'));
    console.log(this.weeks);
    if(!this.weeks[singleweek.weekId]){
      this.weeks[singleweek.weekId] = [];
    }
    this.weeks[singleweek.weekId].push(singleweek.weekTitle);
    localStorage.setItem('life-calendar',JSON.stringify(this.weeks));
  return this;
  }

  deleteWeekEvent(singleweek: Week): WeekService{
    var index = this.weeks[singleweek.weekId].indexOf(singleweek.weekTitle);
    this.weeks[singleweek.weekId].splice(index,1);
    if(this.weeks[singleweek.weekId].length == 0){
      delete this.weeks[singleweek.weekId];
    }
    localStorage.setItem('life-calendar',JSON.stringify(this.weeks));
    return this;
  }

}
