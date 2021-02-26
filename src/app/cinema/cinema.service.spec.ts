import { TestBed } from '@angular/core/testing';
import { CinemaService } from './cinema.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {News} from './news';
import {HttpClient, HttpEvent, HttpEventType} from '@angular/common/http';

describe('CinemaService', () => {
  let cinemaService: CinemaService;
  let cinemaNews: News;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CinemaService]
    });
    cinemaService = TestBed.inject(CinemaService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  describe('getData()', () => {
    it('should return array of movie news', () => {
      cinemaNews = {title: 'Title', publishDate: '26.2.2020', HTMLContent: 'HTMLContent', imageURL: 'imageURL'};
      cinemaService.getData().subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(cinemaNews);
        }
      });

      const mockReq = httpTestingController.expectOne(cinemaService.url);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('text');
      mockReq.flush(cinemaNews);

      httpTestingController.verify();
    });
  });
});
