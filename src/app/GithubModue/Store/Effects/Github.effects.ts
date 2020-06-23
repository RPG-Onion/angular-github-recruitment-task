import { Injectable }                                from '@angular/core';
import { Actions, createEffect, ofType }             from '@ngrx/effects';
import { Store }                                     from '@ngrx/store';
import { of, throwError }                                       from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, concatMap } from 'rxjs/operators';
import { IGithubUser }                                          from '../../Models';
import { GithubService }                             from '../../Services/Github.service';
import {
  fetchUser,
  fetchUserError,
  fetchUsersRepos,
  fetchUsersReposError,
  fetchUsersReposSuccess,
  fetchUserSuccess, GithubActions
} from '../Actions/Github.actions';
import { GithubState } from '../Reducers/Github.store';

@Injectable()
export class GithubEffects {

  fetchGithubUser = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUser),
      mergeMap((action) => this.githubService.getUser(action.username)
        .pipe(
          map(user => fetchUserSuccess({user})),
          catchError(() => of(fetchUserError))
        )
      )
    )
  );

  fetchGithubUsersRepos = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsersRepos),
      mergeMap((action) => this.githubService.getUsersRepositories(action.user)
        .pipe(
          map(repos => fetchUsersReposSuccess({repos})),
          catchError(() => of(fetchUsersReposError))
        )
      )
    )
  );

  fetchGithubUsersReposBranches = createEffect(() =>
    this.actions$.pipe(
      ofType(GithubActions.User.Repos.Branches.Fetch),
      concatMap((action) => this.githubService.getRepoBranches(action.repo)
        .pipe(
          map((branches) => GithubActions.User.Repos.Branches.Success({branches, repo: action.repo})),
          catchError(() => of(GithubActions.User.Repos.Branches.Error))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private githubService: GithubService,
    private store: Store<GithubState>
  ) {}
}
