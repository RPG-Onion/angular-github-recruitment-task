import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { Observable, of }                 from 'rxjs';
import { catchError }                     from 'rxjs/operators';
import { IGithubRepository, IGithubUser } from '../Models';

@Injectable()
export class GithubService {

  public baseUrl: string = 'https://api.github.com';

  constructor(
    public http: HttpClient
  ) {
  }

  private parseUrl(url: string) {
    return url.replace(/{.+?}/, '');
  }

  private get headers() {
    return {
      'Content-Type': 'application/json',
      Authorization: '443322e43320fd3a374b736708d65d606091714f'
    };
  }

  public getUser(username: string): Observable<IGithubUser | null> {
    return this.http.get<IGithubUser>(`${ this.baseUrl }/users/${ username }`, {
      headers: this.headers
    }).pipe(
      catchError(() => of(null))
    );
  }

  public getUsersRepositories(user: IGithubUser): Observable<IGithubRepository[]> {
    return this.http.get<IGithubRepository[]>(user.repos_url, {
      headers: this.headers
    }).pipe(
      catchError(() => of([]))
    );
  }

  public getRepoBranches(repo: IGithubRepository): Observable<unknown[]> {
    return this.http.get<IGithubRepository[]>(this.parseUrl(repo.branches_url), {
      headers: this.headers
    }).pipe(
      catchError(() => of([]))
    );
  }
}
