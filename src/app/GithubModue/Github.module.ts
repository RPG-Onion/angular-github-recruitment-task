import { HttpClientModule }                from '@angular/common/http';
import { NgModule }                        from '@angular/core';
import { EffectsModule }                   from '@ngrx/effects';
import { StoreModule }                     from '@ngrx/store';
import { GithubService }                   from './Services/Github.service';
import { GithubEffects }     from './Store/Effects/Github.effects';
import { githubFeatureKey }  from './Store/Reducers/Github.store';
import { GithubUserReducer } from './Store/Reducers/GithubUser.reducer';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature([ GithubEffects ]),
    StoreModule.forFeature(githubFeatureKey, GithubUserReducer),
  ],
  providers: [ GithubService ],
  bootstrap: []
})
export class GithubModule {
}
