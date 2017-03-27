import { WorkstationWebcliPage } from './app.po';

describe('workstation-webcli App', () => {
  let page: WorkstationWebcliPage;

  beforeEach(() => {
    page = new WorkstationWebcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
