import { Ng4Page } from './app.po';

describe('ng4 App', () => {
  let page: Ng4Page;

  beforeEach(() => {
    page = new Ng4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
