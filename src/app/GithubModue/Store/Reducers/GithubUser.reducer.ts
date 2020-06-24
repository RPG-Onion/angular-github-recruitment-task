import { createReducer, on }                            from '@ngrx/store';
import { onErrorState, onLoadingState, onSuccessState, CommonStoreStatusInit } from '../../../../lib/Store/Common';
import {
  fetchRepoBranchesSuccess,
  fetchUser,
  fetchUserError,
  fetchUsersRepos,
  fetchUsersReposError,
  fetchUsersReposSuccess,
  fetchUserSuccess
}                                                               from '../Actions/Github.actions';
import { branchAdapter, initialGithubState, repositoryAdapter } from './Github.store';

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
  on(fetchUserError, (state, action) => ({
    user: {
      ...state.user,
      data: null,
      status: {
        ...onErrorState,
        errorMessage: action.msg
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
          branches: {
            data: branchAdapter.getInitialState(),
            status: {...CommonStoreStatusInit}
          },
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
  on(fetchRepoBranchesSuccess, (state, action) => ({
    user: {
      ...state.user,
      repos: {
        ...state.user.repos,
        data: repositoryAdapter.updateOne({
          id: action.repo.node_id,
          changes: {
            branches: {
              data: branchAdapter.setAll(action.branches, state.user.repos.data.entities[action.repo.node_id].branches.data),
              status: {
                ...onSuccessState
              },
            }
          }
        }, state.user.repos.data)
      }
    }
  }))
);

