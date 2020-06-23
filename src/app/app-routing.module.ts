import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent }    from './Pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: 'user/:username',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
