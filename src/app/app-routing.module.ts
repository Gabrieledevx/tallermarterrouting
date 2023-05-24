import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './buscar-persona/buscar-persona.component';
import { RegistrarPersonasComponent } from './registrar-personas/registrar-personas.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';

const routes: Routes = [
  {
    path: 'buscar',
    component: BuscarPersonaComponent,
  },
  { 
    path: 'registrar', 
    component: RegistrarPersonasComponent 
  },
  {
    path: 'editar',
    component: EditarPersonaComponent
  },
  {
    path: 'eliminar',
    component: EliminarPersonaComponent
  },
  {
    path: 'listar',
    component: ListadoPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
