export class News {
  title: string;
  publishDate: string;
  HTMLContent: string;
  imageURL: string;


  constructor(title: string, publishDate: string, HTMLContent: string, imageURL: string) {
    this.title = title;
    this.publishDate = publishDate;
    this.HTMLContent = HTMLContent;
    this.imageURL = imageURL;
  }
}
