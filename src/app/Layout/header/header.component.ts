import { Component, OnDestroy, OnInit }       from '@angular/core';
import { Router }                from '@angular/router';
import { select, Store }         from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GithubState }                        from '../../GithubModue/Store/Reducers/Github.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.sass' ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  public searchPhrase: string = '';

  private searchSubject = new Subject<string>();
  private searchSubscription$: Subscription;

  constructor(private store: Store<GithubState>, private router: Router) {
  }

  public ngOnInit(): void {
    this.searchSubscription$ = this.searchSubject.pipe(
      debounceTime(200),
      distinctUntilChanged(),
    ).subscribe(username => {
      this.router.navigate([ 'user', username ]);
    });
  }

  public ngOnDestroy(): void {
    if (this.searchSubscription$) {
      this.searchSubscription$.unsubscribe();
    }
  }

  public searchChangeHandler(): void {
    this.searchSubject.next(this.searchPhrase);
  }
}
