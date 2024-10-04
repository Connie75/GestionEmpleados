import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  locals: Local[] = [];
  nuevoLocal: Local = {
    name: '',
    address: '',
    phone: ''
  };

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.obtenerLocals();
  }

  obtenerLocals(): void {
    this.localService.getLocals().subscribe(locals => {
      this.locals = locals;
    });
  }

  agregarLocal(): void {
    this.localService.createLocal(this.nuevoLocal).subscribe(local => {
      this.locals.push(local);
      this.nuevoLocal = {
        name: '',
        address: '',
        phone: ''
      };
    });
  }
}

eliminarLocal(id: string): void {
  this.localService.deleteLocal(id).subscribe(() => {
    this.locals = this.locals.filter(e => e._id !== id);
  });
}
}
