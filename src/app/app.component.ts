import { Component } from '@angular/core';
import { alumno } from './interfaces/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public alumno:alumno=this.alumnoVacio();
public alumnos: alumno[]=[];
public alumnos1: alumno[]=[];
public alumnos2: alumno[]=[];

   onDatos(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.alumno);
    this.alumnos.push(this.alumno);
    this.alumno= this.alumnoVacio();
    console.log("el arreglo alumnos tiene:",this.alumnos.length,"elementos")
   }
   onDatos1(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.alumno);
    this.alumnos1.push(this.alumno);
    this.alumno= this.alumnoVacio();
    console.log("el arreglo alumnos tiene:",this.alumnos1.length,"elementos")
   }
   onDatos2(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.alumno);
    this.alumnos2.push(this.alumno);
    this.alumno= this.alumnoVacio();
    console.log("el arreglo alumnos tiene:",this.alumnos2.length,"elementos")
   }

   alumnoVacio(): alumno{
     return{
       nombre:"",
       codigo:"",
       email:""
     };
   }
   onEliminar(i:number):void{
    //  this.lista.splice(i,1);
    this.alumnos.splice(i,1);
   }
   onModificar(nombre:string,codigo:string,email:string){

   }
  //  onChange(event:Event){
  //   const elemento = event.target as HTMLInputElement;
  //   this.alumno.nombre = elemento.value;
  // }
  // public imagen:string="https://i.ytimg.com/vi/DCBYc4Yx8r0/maxresdefault.jpg"
  // public estadoBoton: boolean = false;
  // onGuardar(): void{
  //   console.log("metodo onGuardar() invocado"); 
  // }
  // onEstado(): void{
  //   console.log("metodo onEstado() invocado"); 
  //   this.estadoBoton=!this.estadoBoton;
  // }
 }


