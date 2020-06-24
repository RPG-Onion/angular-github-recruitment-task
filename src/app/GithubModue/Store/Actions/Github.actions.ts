import { createAction, props }            from '@ngrx/store';
import { IGithubRepository, IGithubUser } from '../../Models';
import { IGithubBranch }                  from '../../Models/IGithubBranch';

export const fetchUser = createAction('[Github] Get User', props<{ username: string }>());
export const fetchUserSuccess = createAction('[Github] Get User Success', props<{ user: IGithubUser }>());
export const fetchUserError = createAction('[Github] Get User Error', props<{msg: string}>());

export const fetchUsersRepos = createAction('[Github] Get User`s repositories', props<{ user: IGithubUser }>());
export const fetchUsersReposSuccess = createAction('[Github] Get User`s repositories Success', props<{ repos: IGithubRepository[] }>());
export const fetchUsersReposError = createAction('[Github] Get User`s repositories Error');

export const fetchRepoBranches = createAction('[Github] Get Repo`s branches', props<{ repo: IGithubRepository }>());
export const fetchRepoBranchesSuccess = createAction(
  '[Github] Get Repo`s branches Success',
  props<{ branches: IGithubBranch[], repo: IGithubRepository }>()
);
export const fetchRepoBranchesError = createAction('[Github] Get Repo`s branches Error');

export const GithubActions = {
  User: {
    Load: {
      Success: fetchUserSuccess,
      Error: fetchUserError,
      Fetch: fetchUser,
    },
    Repos: {
      Success: fetchUsersReposSuccess,
      Error: fetchUsersReposError,
      Fetch: fetchUsersRepos,
      Branches: {
        Fetch: fetchRepoBranches,
        Success: fetchRepoBranchesSuccess,
        Error: fetchRepoBranchesError,
      }
    }
  }
};
