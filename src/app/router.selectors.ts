import * as fromRouter                           from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<fromRouter.MinimalRouterStateSnapshot>;
}

export const selectRouter = createFeatureSelector<State,
  fromRouter.RouterReducerState<fromRouter.MinimalRouterStateSnapshot>>('router');

const selectors = fromRouter.getSelectors(selectRouter);

/**
 * select the current route
 * (custom implementation for better typings)
 */
export const selectCurrentRoute = createSelector(selectRouter, state => state.state.root);

export const {
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl
} = selectors;
