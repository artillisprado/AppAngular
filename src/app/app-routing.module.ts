import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesCreateComponent } from './components/cartoes/cartoes-create/cartoes-create.component';
import { CartoesDeleteComponent } from './components/cartoes/cartoes-delete/cartoes-delete.component';
import { CartoesListComponent } from './components/cartoes/cartoes-list/cartoes-list.component';
import { CartoesUpdateComponent } from './components/cartoes/cartoes-update/cartoes-update.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/clientes/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/clientes/cliente-update/cliente-update.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'cartoes', component: CartoesListComponent},
      {path: 'cartoes/create', component: CartoesCreateComponent},
      {path: 'cartoes/update/:id', component: CartoesUpdateComponent},
      {path: 'cartoes/delete/:id', component: CartoesDeleteComponent}, 

      {path: 'clientes', component: ClienteListComponent},
      {path: 'clientes/create', component: ClienteCreateComponent},
      {path: 'clientes/update/:id', component: ClienteUpdateComponent},
      {path: 'clientes/delete/:id', component: ClienteDeleteComponent},

      {path: 'chamados', component: ChamadoListComponent},
      {path: 'chamados/create', component: ChamadoCreateComponent},
      {path: 'chamados/update/:id', component: ChamadoUpdateComponent},
      {path: 'chamados/read/:id', component: ChamadoReadComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
