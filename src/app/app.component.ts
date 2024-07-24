import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PieComponent } from "./components/pie/pie.component";
import { ContenedorComponent } from "./components/contenedor/contenedor.component";
import { TareaComponent } from "./components/tarea/tarea.component";


@Component({ // decorador de la clase Component, lo que esta dentro de este codigo es un objeto
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, FormularioComponent, PieComponent, ContenedorComponent, TareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agenda';
}
