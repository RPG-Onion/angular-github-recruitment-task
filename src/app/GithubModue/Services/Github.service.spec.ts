import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed }                                        from '@angular/core/testing';
import { GithubUserMock }                                 from '../Mock/GithubUser.mock';

import { GithubService } from './Github.service';

describe('GithubService', () => {

  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ GithubService ]
    });

    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user', () => {
    service.getUser('octocat').subscribe(res => {
      expect(res.login).toBe('octocat');
    });

    const http = httpMock.expectOne(`${service.baseUrl}/users/octocat`);

    expect(http.request.method).toBe('GET');
    http.flush(GithubUserMock);
  });
});
