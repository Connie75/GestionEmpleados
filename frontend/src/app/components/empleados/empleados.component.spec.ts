// empleado.component.ts
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  nuevoEmpleado: Empleado = {
    nombre: '',
    puesto: '',
    salario: 0
  };

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: empleados => this.empleados = empleados,
      error: err => console.error('Error al obtener empleados:', err)
    });
  }

  agregarEmpleado(): void {
    this.empleadoService.createEmpleado(this.nuevoEmpleado).subscribe({
      next: empleado => {
        this.empleados.push(empleado);
        this.nuevoEmpleado = {
          nombre: '',
          puesto: '',
          salario: 0
        };
      },
      error: err => console.error('Error al agregar empleado:', err)
    });
  }

  eliminarEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe({
      next: () => this.empleados = this.empleados.filter(e => e._id !== id),
      error: err => console.error('Error al eliminar empleado:', err)
    });
  }

  trackByEmpleadoId(index: number, empleado: Empleado): string {
    return empleado._id;
  }
}
