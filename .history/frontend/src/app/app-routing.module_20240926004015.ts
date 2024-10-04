import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfigComponent } from './components/config/config.component';
import { LocalComponent } from './components/local/local.component';

const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'local', component: LocalComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
