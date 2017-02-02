import { MakingYourAngularAppsFastPage } from './app.po';

describe('making-your-angular-apps-fast App', function() {
  let page: MakingYourAngularAppsFastPage;

  beforeEach(() => {
    page = new MakingYourAngularAppsFastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
