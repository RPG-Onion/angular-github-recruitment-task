import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GithubState, githubFeatureKey }         from '../Reducers/Github.store';


export const githubState = createFeatureSelector<GithubState>(githubFeatureKey);

const getUser = createSelector(githubState, (state) => state.user.data);
const getUserStatus = createSelector(githubState, (state) => state.user.status);
const getRepos = createSelector(githubState, (state) => state.user.repos.data.entities);
const getReposStatus = createSelector(githubState, (state) => state.user.repos.status);
const getReposBranches = createSelector(
  githubState,
  (state: GithubState, props: {repoId: string}) => {
    return state.user.repos.data.entities[props.repoId]?.branches.data.entities;
  }
);

export const GithubSelectos = {
  getUser,
  getUserStatus,
  getRepos,
  getReposStatus,
  getReposBranches
};
