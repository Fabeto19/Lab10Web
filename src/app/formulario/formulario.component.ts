import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  formularioValido: boolean = false;

  onSubmit() {
    const confirmacion = confirm('¿Estás seguro de enviar el formulario?');
    if (confirmacion) {
      console.log('Formulario enviado');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);
  
      // Verificar si los campos están llenados correctamente
      this.formularioValido = this.nombre.trim() !== '' && this.email.trim() !== '';

      // Abrir una nueva ventana con los campos del formulario
      const nuevaVentana = window.open('', '_blank');
      if (nuevaVentana) {
        nuevaVentana.document.write(`<h1>Campos del formulario:</h1>`);
        nuevaVentana.document.write(`<p>Nombre: ${this.nombre}</p>`);
        nuevaVentana.document.write(`<p>Email: ${this.email}</p>`);
        nuevaVentana.document.close();
      } else {
        console.error('No se pudo abrir la nueva ventana');
      }
    }
  }
}
