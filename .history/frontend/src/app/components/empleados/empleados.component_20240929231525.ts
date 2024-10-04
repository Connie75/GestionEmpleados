import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      data => this.empleados = data,
      error => console.error('Error al obtener empleados', error)
    );
  }

  eliminarEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => this.obtenerEmpleados(),
      error => console.error('Error al eliminar empleado', error)
    );
  }
}
