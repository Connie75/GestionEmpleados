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
