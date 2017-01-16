import {Week} from './week';

describe('Week', () => {
  it('should create an instance', () => {
    expect(new Week()).toBeTruthy();
  });

  it('should accept values in constructor',() =>{
    let newWeek = new Week({
      weekId:300,
      weekTitle:'this is 300'
    });
    expect(newWeek.weekId).toEqual(300);
    expect(newWeek.weekTitle).toEqual('this is 300');
  });
});

