import { FccWikipediaViewerPage } from './app.po';

describe('fcc-wikipedia-viewer App', () => {
  let page: FccWikipediaViewerPage;

  beforeEach(() => {
    page = new FccWikipediaViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
