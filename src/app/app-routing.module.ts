import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesListComponent } from './components/cartoes/cartoes-list/cartoes-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'cartoes', component: CartoesListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
