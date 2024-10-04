import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfigComponent } from './components/config/config.component';
import { LocalComponent } from './components/local/local.component';

import { EmpleadoService } from './services/empleado.service';
import { AdminService } from './services/admin.service';
import { ConfigService } from './services/config.service';
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    AdminComponent,
    ConfigComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmpleadoService,
    AdminService,
    ConfigService,
    LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
