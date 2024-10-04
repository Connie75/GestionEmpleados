import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  nuevoEmpleado: any = {}; // Define la propiedad nuevoEmpleado

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

  agregarEmpleado(): void { // Define el método agregarEmpleado
    this.empleadoService.addEmpleado(this.nuevoEmpleado).subscribe(() => {
      this.obtenerEmpleados();
      this.nuevoEmpleado = {}; // Reinicia la propiedad nuevoEmpleado
    });
  }

  eliminarEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => this.obtenerEmpleados(),
      error => console.error('Error al eliminar empleado', error)
    );
  }
}
