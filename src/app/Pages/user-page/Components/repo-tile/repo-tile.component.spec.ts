import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTileComponent } from './repo-tile.component';

describe('RepoTileComponent', () => {
  let component: RepoTileComponent;
  let fixture: ComponentFixture<RepoTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
