import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Person {
  nombre: string;
  apellido: string;
  correoElectronico: string;
  ci: string;
  cargo: string;
}

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent {
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'correoElectronico',
    'ci',
    'cargo',
  ];

  constructor() {
    const personas: Person[] = [
      {
        nombre: 'Juan',
        apellido: 'Pérez',
        correoElectronico: 'juan@example.com',
        ci: '1234567890',
        cargo: 'Gerente',
      },
      {
        nombre: 'María',
        apellido: 'Gómez',
        correoElectronico: 'maria@example.com',
        ci: '0987654321',
        cargo: 'Analista',
      },
      {
        nombre: 'Pedro',
        apellido: 'Vargas',
        correoElectronico: 'pedro@example.com',
        ci: '9876543210',
        cargo: 'Desarrollador',
      },
      {
        nombre: 'Ana',
        apellido: 'López',
        correoElectronico: 'ana@example.com',
        ci: '5678901234',
        cargo: 'Diseñadora',
      },
      {
        nombre: 'Luis',
        apellido: 'García',
        correoElectronico: 'luis@example.com',
        ci: '4567890123',
        cargo: 'Contador',
      },
      // Agrega más personas si lo deseas
    ];

    this.dataSource = new MatTableDataSource(personas);
  }
}
