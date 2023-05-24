import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
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
