import { EntityState, EntityMap, createEntityAdapter } from '@ngrx/entity';
import { EntityAdapter }                               from '@ngrx/entity/src/models';
import { CommonStoreStatus, CommonStoreStatusInit, onErrorState, onLoadingState, onSuccessState } from '../../../../lib/Store/Common';
import { IGithubRepository, IGithubUser }                                                         from '../../Models';

export const githubFeatureKey = 'github';

interface IRepositoryData {
  data: IGithubRepository;
  branches: {
    // data: EntityState<IBranchData>,
    // status: CommonStoreStatus,
  };
}

export const repositoryAdapter = createEntityAdapter<IRepositoryData>({
  selectId: model => model.data.node_id,
});

interface IBranchData {
  data: IGithubRepository;
  commits: {
    data: EntityState<any>,
    status: CommonStoreStatus,
  };
}

export interface GithubState {
  user: {
    data: IGithubUser,
    status: CommonStoreStatus,
    repos: {
      data: EntityState<IRepositoryData>,
      status: CommonStoreStatus
    },
  };
}

export const initialGithubState: GithubState = {
  user: {
    data: null,
    status: CommonStoreStatusInit,
    repos: {
      data: repositoryAdapter.getInitialState(),
      status: CommonStoreStatusInit
    },
  }
};


