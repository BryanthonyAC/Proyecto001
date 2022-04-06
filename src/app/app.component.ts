import { Component } from '@angular/core';
import { producto } from './interfaces/producto';
import { cliente } from './interfaces/cliente';
import { pago } from './interfaces/pago';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public pro01:producto ={
  nombre:"FUNKO POP! CARNAGE EXCLUSIVO 10″ (25CM) #890 (VENOM)",
  descripcion:"Consigue el Funko Pop! Carnage Exclusivo 10″ (25cm) en Frikily y goza los precios más bajos de Internet y envíos rapidísimos en solo 24h. 🙊 En este magnífico muñequito podemos ver al villano de Venom “Carnage” en una versión super sized de 10 pulgadas (25cm de altura aproximadamente) y en una edición especial que no puede faltar en tu colección. Lo podemos ver con los brazos abiertos, mostrando su gran dentadura y con la lengua fuera.",
  precio:120
}

// public alumno:alumno=this.alumnoVacio();
// public alumnos: alumno[]=[];

public cliente:cliente=this.clienteVacio();
public clientes: cliente[]=[];

public pago:pago=this.pagoVacio();
public pagos: pago[]=[];

   onDatos(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.cliente);
    this.clientes.push(this.cliente);
    this.cliente= this.clienteVacio();
    this.pagos.push(this.pago);
    this.pago= this.pagoVacio();
    console.log("el arreglo cliente tiene:",this.clientes.length,"elementos")
   }

   clienteVacio(): cliente{
     return{
      nombre:"",
      apellidos:"",
      dni:"",
      celular:"",
      email:""
     };
   }
   pagoVacio(): pago{
    return{
      nrotarjeta:"",
      cvv:"",
      fechavencimiento:""
    };
  }
   onEliminar(i:number):void{
    //  this.lista.splice(i,1);
    this.clientes.splice(i,1);
   }
   onEliminar1(i:number):void{
    //  this.lista.splice(i,1);
    this.pagos.splice(i,1);
   }
   onModificar(nombre:string,codigo:string,email:string){

   }
  //  onChange(event:Event){
  //   const elemento = event.target as HTMLInputElement;
  //   this.alumno.nombre = elemento.value;
  // }
  public imagen:string="https://assets.frikily.com/wp-content/uploads/2021/04/Funko-Pop-Carnage-Exclusivo-25cm-Venom.jpg"
  public imagen1:string="https://assets.frikily.com/wp-content/uploads/2021/08/Figura-POP-Marvel-Venom-2-Carnage-25cm-1.jpg"
  public imagen2:string="https://assets.frikily.com/wp-content/uploads/2021/08/Figura-POP-Marvel-Venom-2-Carnage-25cm.jpg"
  
  // public estadoBoton: boolean = false;
  // onGuardar(): void{
  //   console.log("metodo onGuardar() invocado"); 
  // }
  // onEstado(): void{
  //   console.log("metodo onEstado() invocado"); 
  //   this.estadoBoton=!this.estadoBoton;
  // }
 }


