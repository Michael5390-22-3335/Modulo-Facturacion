import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-registrar-empleado',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {
  empleado = {
    nombreEmpleado: '',
    direccion: '',
    edad: null,
    puesto: ''
  };

  constructor(private http: HttpClient) {}

  registrarEmpleado() {
    this.http.post('http://localhost:7070/api/empleados/guardar', this.empleado)
      .subscribe({
        next: () => alert('Empleado registrado exitosamente'),
        error: () => alert('Error al registrar empleado')
      });
  }

  limpiarFormulario() {
    this.empleado = {
      nombreEmpleado: '',
      direccion: '',
      edad: null,
      puesto: ''
    };
  }
}
