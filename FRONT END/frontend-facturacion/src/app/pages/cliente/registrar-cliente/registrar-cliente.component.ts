import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-registrar-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {
  cliente = {
    nombre: '',
    direccion: '',
    nit: ''
  };

  constructor(private http: HttpClient) { }

  registrarCliente() {
    console.log('Enviando cliente:', this.cliente);
    this.http.post('http://localhost:7070/api/clientes/guardar', this.cliente)
      .subscribe({
        next: (response) => {
          alert('Cliente registrado exitosamente');
          console.log('Respuesta del backend:', response);
        },
        error: (error) => {
          alert('Error al registrar cliente');
          console.error('Error:', error);
        }
      });
  }

  limpiarCampos() {
    this.cliente = {
      nombre: '',
      direccion: '',
      nit: ''
    };
  }


}
