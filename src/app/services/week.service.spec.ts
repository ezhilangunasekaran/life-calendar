/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Week } from '../week';
import { WeekService } from './week.service';

describe('WeekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekService]
    });
  });

  it('should ...', inject([WeekService], (service: WeekService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getWeeks()', ()=>{
    it('should an empty object', inject([WeekService], (service: WeekService) => {

      expect(service.getWeeks()).toEqual({1:['you have born']});
    }));

    it('should return all weeks', inject([WeekService], (service: WeekService) => {

      let week1 = new Week({weekId:34, weekTitle:'week no 34'});
      let week2 = new Week({weekId:35, weekTitle:'week no 35'});
      service.addWeekEvent(week1);
      service.addWeekEvent(week2);
    }));
  });

  describe('#deleteWeekEvent()', ()=>{

    it('delete mentioned week', inject([WeekService], (service: WeekService) => {
      let init = new Week({weekId:1, weekTitle:'you have born'});
      let week1 = new Week({weekId:34, weekTitle:'week no 34'});
      let week2 = new Week({weekId:35, weekTitle:'week no 35'});
      service.addWeekEvent(week1);
      service.addWeekEvent(week2);
      expect(service.getWeeks()).toEqual({1:['you have born'],34:['week no 34'],35:['week no 35']});
      service.deleteWeekEvent(week1);
      expect(service.getWeeks()).toEqual({1:['you have born'],35:['week no 35']});
      service.deleteWeekEvent(week2);
      expect(service.getWeeks()).toEqual({1:['you have born']});
    }));
  });

});
