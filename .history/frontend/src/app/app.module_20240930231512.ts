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
local.component.ts/

import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  locales: Local[] = [];
  nuevoLocal: Local = new Local(); // Define la propiedad nuevoLocal

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.getLocales();
  }

  getLocales(): void {
    this.localService.getLocales().subscribe((locales) => {
      this.locales = locales;
    });
  }

  addLocal(): void { // Define el método addLocal
    this.localService.addLocal(this.nuevoLocal).subscribe(() => {
      this.getLocales();
      this.nuevoLocal = new Local(); // Reinicia la propiedad nuevoLocal
    });
  }
}