import { Component } from '@angular/core';
import { TareaComponent } from "../tarea/tarea.component";
import { GestortareasService } from '../../services/gestortareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [TareaComponent, CommonModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  
  constructor(public gestorTareas : GestortareasService){
  }

}
