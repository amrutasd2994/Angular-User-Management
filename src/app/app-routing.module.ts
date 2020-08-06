import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedComponent } from './components/LazyLoadedModule/lazy-loaded/lazy-loaded.component';
import { HomeComponent } from './components/home/home.component'
import { UserDetailsComponent } from './components/user-details/user-details.component'


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users-list',
    component: LazyLoadedComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
