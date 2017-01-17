import { Injectable } from '@angular/core';
import { Week } from '../week';
import { Init } from '../init-weeks';

@Injectable()
export class WeekService extends Init{


  constructor() { super();
    this.load();
  }

  weeks: {} = JSON.parse(localStorage.getItem('life-calendar'));

  getWeeks(){
    return this.weeks;
  }

  addWeekEvent(singleweek: Week): WeekService{
    if(!this.weeks[singleweek.weekId]){
      this.weeks[singleweek.weekId] = [];
    }
    this.weeks[singleweek.weekId].push(singleweek.weekTitle);
  return this;
  }

  deleteWeekEvent(singleweek: Week): WeekService{
    var index = this.weeks[singleweek.weekId].indexOf(singleweek.weekTitle);
    this.weeks[singleweek.weekId].splice(index,1);
    if(this.weeks[singleweek.weekId].length == 0){
      delete this.weeks[singleweek.weekId];
    }
    return this;
  }

}
