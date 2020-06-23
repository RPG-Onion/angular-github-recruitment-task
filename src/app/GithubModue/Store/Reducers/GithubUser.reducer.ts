import { createReducer, on }                            from '@ngrx/store';
import { onErrorState, onLoadingState, onSuccessState } from '../../../../lib/Store/Common';
import {
  fetchUser,
  fetchUserError,
  fetchUsersRepos,
  fetchUsersReposError,
  fetchUsersReposSuccess,
  fetchUserSuccess
}                                                from '../Actions/Github.actions';
import { initialGithubState, repositoryAdapter } from './Github.store';

export const GithubUserReducer = createReducer(initialGithubState,
  on(fetchUser, state => ({
    user: {
      ...state.user,
      data: null,
      status: {
        ...onLoadingState
      }
    }
  })),
  on(fetchUserSuccess, (state, action) => ({
    user: {
      ...state.user,
      data: action.user,
      status: {
        ...onSuccessState
      },
    }
  })),
  on(fetchUserError, state => ({
    user: {
      ...state.user,
      data: null,
      status: {
        ...onErrorState
      },
    }
  })),
  on(fetchUsersRepos, state => ({
    user: {
      ...state.user,
      repos: {
        data: repositoryAdapter.getInitialState(),
        status: {
          ...onLoadingState
        },
      }
    }
  })),
  on(fetchUsersReposSuccess, (state, action) => ({
    user: {
      ...state.user,
      repos: {
        data: repositoryAdapter.setAll(action.repos.map(repo => ({
          data: repo,
          branches: {},
        })), state.user.repos.data),
        status: {
          ...onSuccessState
        },
      }
    }
  })),
  on(fetchUsersReposError, state => ({
    user: {
      ...state.user,
      repos: {
        data: repositoryAdapter.getInitialState(),
        status: {
          ...onErrorState
        },
      }
    }
  })),
);

