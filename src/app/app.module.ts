import { FormsModule }                 from '@angular/forms';
import { BrowserModule }               from '@angular/platform-browser';
import { NgModule }                                   from '@angular/core';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { StoreDevtoolsModule }      from '@ngrx/store-devtools';
import { environment }              from '../environments/environment';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule }            from '@ngrx/effects';
import { ServiceWorkerModule }      from '@angular/service-worker';
import { GithubModule }             from './GithubModue';
import { HeaderComponent }          from './Layout/header/header.component';
import { LayoutComponent }          from './Layout/layout/layout.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { ReposListComponent } from './Pages/user-page/Components/repos-list/repos-list.component';
import { RepoTileComponent } from './Pages/user-page/Components/repo-tile/repo-tile.component';

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [] : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    UserPageComponent,
    ReposListComponent,
    RepoTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      router: routerReducer,
    }, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    GithubModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
