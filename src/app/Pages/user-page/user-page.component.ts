import { Component, OnInit } from '@angular/core';
import { select, Store }     from '@ngrx/store';
import { Observable }        from 'rxjs';
import { CommonStoreStatus } from '../../../lib/Store/Common';
import { IGithubUser }       from '../../GithubModue/Models';
import { GithubActions }     from '../../GithubModue/Store/Actions/Github.actions';
import { GithubSelectos }    from '../../GithubModue/Store/Selectors/github.selectors';
import { selectRouteParam }  from 'src/app/router.selectors';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.sass' ]
})
export class UserPageComponent implements OnInit {

  public user$: Observable<IGithubUser>;
  public userStatus$: Observable<CommonStoreStatus>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {

    this.store.pipe(select(selectRouteParam('username'))).subscribe(username => {
      this.store.dispatch(GithubActions.User.Load.Fetch({ username }));
    });

    this.user$ = this.store.pipe(select(GithubSelectos.getUser));

    this.userStatus$ = this.store.pipe(select(GithubSelectos.getUserStatus));
    ;
  }
}

