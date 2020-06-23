import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store }                       from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CommonStoreStatus }        from '../../../../../lib/Store/Common';
import { IGithubRepository, IGithubUser } from '../../../../GithubModue/Models';
import { GithubActions }                  from '../../../../GithubModue/Store/Actions/Github.actions';
import { GithubSelectos }                 from '../../../../GithubModue/Store/Selectors/github.selectors';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: [ './repos-list.component.sass' ]
})
export class ReposListComponent implements OnInit, OnDestroy {

  public reposStatus$: Observable<CommonStoreStatus>;
  private repos$: Subscription;
  public  repos: IGithubRepository[];

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.reposStatus$ = this.store.pipe(select(GithubSelectos.getReposStatus));
    this.repos$ = this.store.pipe(select(GithubSelectos.getRepos))
      .subscribe(res => {
        this.repos = Object.values(res)
          .map(reso => reso.data)
          .filter(reso => reso.fork !== true);
      });

    this.store.pipe(select(GithubSelectos.getUser)).subscribe(user => {
      if (user !== null) {
        this.store.dispatch(GithubActions.User.Repos.Fetch({ user }));
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.repos$) {
      this.repos$.unsubscribe();
    }
  }

}
