import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { RegistrarPersonasComponent } from './registrar-personas/registrar-personas.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './buscar-persona/buscar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ListadoPersonasComponent,
    RegistrarPersonasComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
