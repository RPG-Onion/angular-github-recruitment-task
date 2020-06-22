import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import { GithubService }    from './Services/Github.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: []
})
export class GithubModule { }
