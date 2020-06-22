import { HttpClient }                     from '@angular/common/http';
import { Injectable }                     from '@angular/core';
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

  public getUser(username: string): Observable<IGithubUser | null> {
    return this.http.get<IGithubUser>(`${ this.baseUrl }/users/${ username }`).pipe(
      catchError(() => of(null))
    );
  }

  public getUsersRepositories(user: IGithubUser): Observable<IGithubRepository[]> {
    return this.http.get<IGithubRepository[]>(user.repos_url).pipe(
      catchError(() => of([]))
    );
  }
}
