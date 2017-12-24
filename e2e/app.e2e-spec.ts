import { TestMulAcctPage } from './app.po';

describe('test-mul-acct App', () => {
  let page: TestMulAcctPage;

  beforeEach(() => {
    page = new TestMulAcctPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
