import { CommonStoreStatus, CommonStoreStatusInit, onErrorState, onLoadingState, onSuccessState } from '../../../../lib/Store/Common';
import { IGithubRepository, IGithubUser }                                                         from '../../Models';

export const githubFeatureKey = 'github';

export interface GithubState {
  user: {
    data: IGithubUser,
    status: CommonStoreStatus,
    repos: {
      data: IGithubRepository[],
      status: CommonStoreStatus
    },
  };
}

export const initialGithubState: GithubState = {
  user: {
    data: null,
    status: CommonStoreStatusInit,
    repos: {
      data: [],
      status: CommonStoreStatusInit
    },
  }
};


