import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GithubState, githubFeatureKey }         from '../Reducers/Github.store';


export const githubState = createFeatureSelector<GithubState>(githubFeatureKey);

const getUser = createSelector(githubState, (state) => state.user.data);
const getUserStatus = createSelector(githubState, (state) => state.user.status);
const getRepos = createSelector(githubState, (state) => state.user.repos.data);
const getReposStatus = createSelector(githubState, (state) => state.user.repos.status);

export const GithubSelectos = {
  getUser,
  getUserStatus,
  getRepos,
  getReposStatus,
};
