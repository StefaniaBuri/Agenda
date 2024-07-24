import { Component } from '@angular/core';
import { TareaComponent } from "../tarea/tarea.component";

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [TareaComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {

}
