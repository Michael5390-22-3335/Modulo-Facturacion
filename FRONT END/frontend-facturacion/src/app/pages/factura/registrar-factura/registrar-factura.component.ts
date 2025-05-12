import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-factura',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-factura.component.html',
  styleUrls: ['./registrar-factura.component.css']
})
export class RegistrarFacturaComponent {
  clienteId: number = 1;
  fechaFactura: string = '';
  total: number = 0;
  productos: any[] = [
    { productoId: 0, cantidad: 1, precioUnitario: 0 }
  ];

  constructor(private http: HttpClient) { }

  agregarProducto() {
    this.productos.push({ productoId: 0, cantidad: 1, precioUnitario: 0 });
    this.actualizarTotal();
  }

  eliminarProducto(index: number) {
    if (this.productos.length > 1) {
      this.productos.splice(index, 1);
      this.actualizarTotal();
    }
  }

  actualizarTotal() {
    this.total = this.productos.reduce((acc, p) => acc + (p.cantidad * p.precioUnitario), 0);
  }

  registrarFactura() {
    const factura = {
      clienteId: this.clienteId,
      fechaFactura: this.fechaFactura,
      total: this.total,
      detalles: this.productos
    };

    this.http.post('http://localhost:7070/api/facturas/guardar', factura)
      .subscribe({
        next: () => alert('Factura registrada correctamente'),
        error: () => alert('Error al registrar la factura')
      });
  }

  limpiarFormulario() {
    this.clienteId = 0;
    this.fechaFactura = '';
    this.productos = [
      { productoId: 0, cantidad: 1, precioUnitario: 0 }
    ];
    this.total = 0;
  }

}
