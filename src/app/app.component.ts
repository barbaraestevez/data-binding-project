import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataBinding';
  nombre:string = "Bárbara";
  numero1:number = 10;
  numero2:number = 2;
  resultadoSuma:number = 0 ;
  textPlaceholder:string = "Escribe un \"fistro\" de texto aquí";
  deshabilitado:boolean = true;
  image:string ="https://stafmagazine.com/wp-content/uploads/2019/03/chiquito3.jpg";
  textoJar:string="Hola";
  textoJar2:string="";

  estudiantes: Estudiante[]=[
    {nombre:"Pepe", estado:"aprobado"},
    {nombre:"Carmen", estado:"suspendido"},
    {nombre:"Luisa", estado:"no apto"},
    {nombre:"Bárbara  ", estado:"becado"},
  ]

  public changeVariable(){
    this.textoJar = "Adiós";
  }

  constructor(){
    setInterval(()=>this.deshabilitado=!this.deshabilitado,3000)
  }

  ngOnInit():void {
    setTimeout(()=>this.nombre="Anacleta",3000);
  }

  sumaNumeral (num1:number,num2:number):number{
    return this.resultadoSuma = num1 + num2;
  }
}
