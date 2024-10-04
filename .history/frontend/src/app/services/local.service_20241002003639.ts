import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
//import { LocalModel } from '../../models/local.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  locales: Local[] = [];
  nuevoLocal: Local = new LocalModel('', '', ''); // Define la propiedad nuevoLocal con valores iniciales

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
      this.nuevoLocal = new LocalModel('', '', ''); // Reinicia la propiedad nuevoLocal con valores iniciales
    });
  }
}
