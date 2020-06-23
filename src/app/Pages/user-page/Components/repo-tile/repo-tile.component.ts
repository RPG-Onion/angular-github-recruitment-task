import { Component, Input, OnInit } from '@angular/core';
import { select, Store }            from '@ngrx/store';
import { Observable }               from 'rxjs';
import { map }                      from 'rxjs/operators';
import { IGithubRepository }        from '../../../../GithubModue/Models';
import { IGithubBranch }            from '../../../../GithubModue/Models/IGithubBranch';
import { GithubActions }            from '../../../../GithubModue/Store/Actions/Github.actions';
import { GithubSelectos }           from '../../../../GithubModue/Store/Selectors/github.selectors';

@Component({
  selector: 'repo-tile',
  templateUrl: './repo-tile.component.html',
  styleUrls: [ './repo-tile.component.sass' ],

})
export class RepoTileComponent implements OnInit {

  @Input() public repo: IGithubRepository;
  public branches$: Observable<IGithubBranch[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {

    if (this.repo) {
      this.store.dispatch(GithubActions.User.Repos.Branches.Fetch({ repo: this.repo }));
    }

    this.branches$ = this.store
      .pipe(
        select(GithubSelectos.getReposBranches, {repoId: this.repo.node_id}),
        map(res => Object.values(res))
      );
  }

}
