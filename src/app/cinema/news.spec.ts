import { News } from './news';

describe('News', () => {
  it('should create an instance', () => {
    expect(new News('title', 'publishDate', 'HTMLContent', 'imageURL')).toBeTruthy();
  });
});
