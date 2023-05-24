import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css']
})
export class EliminarPersonaComponent {

  searchQuery: string = '';
  editar() {
    // Lógica para editar el formulario
  }

  nombre: string = ''; 
  apellido: string = '';
  correoElectronico: string = '';
  ci: string = '';
  fechaNacimiento: undefined;
  disponibilidadHorario: boolean = false;

}
