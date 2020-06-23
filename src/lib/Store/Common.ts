export interface CommonStoreStatus {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage?: string;
}

export const CommonStoreStatusInit: CommonStoreStatus = {
  loading: true,
  loaded: false,
  error: false,
  errorMessage: null
};

export const onLoadingState: CommonStoreStatus = {
  loading: true,
  loaded: false,
  error: false,
};
export const onErrorState: CommonStoreStatus = {
  loading: false,
  loaded: false,
  error: true,
};
export const onSuccessState: CommonStoreStatus = {
  loading: false,
  loaded: true,
  error: false,
  errorMessage: null,
};
