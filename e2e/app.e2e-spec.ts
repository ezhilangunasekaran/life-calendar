import { LifeCalendarPage } from './app.po';

describe('life-calendar App', function() {
  let page: LifeCalendarPage;

  beforeEach(() => {
    page = new LifeCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
