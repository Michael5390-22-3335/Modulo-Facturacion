import { Routes } from '@angular/router';
import { RegistrarClienteComponent } from './pages/cliente/registrar-cliente/registrar-cliente.component';
import { RegistrarEmpleadoComponent } from './pages/empleado/registrar-empleado/registrar-empleado.component';
import { RegistrarFacturaComponent } from './pages/factura/registrar-factura/registrar-factura.component';
import { PrincipalComponent } from './pages/principal/principal/principal.component';

export const routes: Routes = [
  {
    path: '', component: PrincipalComponent, children: [
      { path: 'cliente', component: RegistrarClienteComponent },
      { path: 'empleado', component: RegistrarEmpleadoComponent },
      { path: 'factura', component: RegistrarFacturaComponent },
    ]
  }
];
