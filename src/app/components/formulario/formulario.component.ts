import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestortareasService } from '../../services/gestortareas.service';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  public nombre: string= "";
  public fecha: string= "";

  constructor(public gestorTarea: GestortareasService){}

  crearTarea() {
    //console.log("Creando Tarea: "+ this.nombre + ":" + this.fecha);
    const nuevaTarea: Tarea = {
      nombre: this.nombre,
      fecha: this.fecha
    }
    this.gestorTarea.agregar(nuevaTarea);
  }

}
