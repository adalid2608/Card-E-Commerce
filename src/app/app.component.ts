import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards';
  
  Lista1 : any[] = [
    {    
      "nombre": "Earphones for Monitor",   
      "imagen": "/assets/img/1.svg",   
      "precio": 199,   
    },
    {    
      "nombre": "Earphones for Monitor",   
      "imagen": "/assets/img/2.svg",   
      "precio": 199,   
    },
    {    
      "nombre": "Earphones for Monitor",   
      "imagen": "/assets/img/3.svg",   
      "precio": 199,   
    },
  ]
  Lista2 : any[] = [
    {    
      "nombre": "Monitor LG 22'inc 4K",   
      "imagen": "/assets/img/4.svg",   
      "precio": 199,   
    },
    {    
      "nombre": "Monitor LG 22'inc 4K",   
      "imagen": "/assets/img/5.svg",   
      "precio": 199,   
    },
    {    
      "nombre": "Monitor LG 22'inc 4K",   
      "imagen": "/assets/img/6.svg",   
      "precio": 199,   
    },
  ]   

  nombre : string = "Earphones for Monitor"
  imagen : string = "/assets/img/2.svg"
  precio : string = "100"
}
