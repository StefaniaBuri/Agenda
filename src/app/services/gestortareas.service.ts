import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class GestortareasService {
  public tareas: Tarea[] = [];
  constructor() { }

    agregar(tarea: Tarea): void {
      this.tareas.push(tarea);
      /*this.tareas.forEach(p => {
        console.log(tarea);
        
      })*/
    }

}
