import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    MaterialModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  data: string = ''; //almacena la palabra
  isCapicua: boolean = false;

  checkCapicua(): void{
     // Limpiar espacios y convertir todo a minúsculas para evitar problemas de capitalización
    const cleanData = this.data.toLowerCase().replace(/\s/g, '');

    // Revertir la palabra para comparar
    const reversedData = cleanData.split('').reverse().join('');

    // Verificar si la palabra original es igual a la palabra revertida
    this.isCapicua = cleanData === reversedData;
  }
}
