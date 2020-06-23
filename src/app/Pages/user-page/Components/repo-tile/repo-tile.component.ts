import { Component, Input, OnInit } from '@angular/core';
import { Store }                    from '@ngrx/store';
import { IGithubRepository }        from '../../../../GithubModue/Models';
import { GithubActions }            from '../../../../GithubModue/Store/Actions/Github.actions';

@Component({
  selector: 'repo-tile',
  templateUrl: './repo-tile.component.html',
  styleUrls: [ './repo-tile.component.sass' ],

})
export class RepoTileComponent implements OnInit {

  @Input() public repo: IGithubRepository;

  constructor(private store: Store) {
  }

  public get license(): string {
    if (typeof this.repo.license === 'string') {
      return this.repo.license;
    }

    return this.repo.license?.name ?? null;
  }

  ngOnInit() {
    if (this.repo) {
      console.log(this.repo);
      console.log(this.repo.branches_url);
      this.store.dispatch(GithubActions.User.Repos.Branches.Fetch({ repo: this.repo }));
    }
  }

}
