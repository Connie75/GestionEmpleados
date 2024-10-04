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
    this.empleadoService.getEmpleados().subscribe(empleados => {
      this.empleados = empleados;
    });
  }

  agregarEmpleado(): void {
    this.empleadoService.createEmpleado(this.nuevoEmpleado).subscribe(empleado => {
      this.empleados.push(empleado);
      this.nuevoEmpleado = {
        nombre: '',
        puesto: '',
        salario: 0
      };
    });
  }

  eliminarEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe(() => {
      this.empleados = this.empleados.filter(e => e._id !== id);
    });
  }
}
