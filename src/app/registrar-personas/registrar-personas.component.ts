import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent {
  nombre: string = '';
  apellido: string = '';
  correoElectronico: string = '';
  ci: string = '';
  fechaNacimiento: Date | null = null;
  disponibilidadHorario: boolean = false;
  
  registrar() {
    // Aquí puedes realizar la lógica para enviar los datos del formulario
    // a tu backend o hacer cualquier otra acción necesaria
    console.log('Datos registrados:', {
      nombre: this.nombre,
      apellido: this.apellido,
      correoElectronico: this.correoElectronico,
      ci: this.ci,
      fechaNacimiento: this.fechaNacimiento,
      disponibilidadHorario: this.disponibilidadHorario
    });
  }

}
