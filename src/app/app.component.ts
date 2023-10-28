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
      "nombre": "Audifonos diadema",   
      "imagen": "/assets/img/1.svg",   
      "precio": 209,   
    },
    {    
      "nombre": "Audifonos 2da generación",   
      "imagen": "/assets/img/3.svg",   
      "precio": 699,   
    },
    {    
      "nombre": "Audifonos inhalambricos",   
      "imagen": "/assets/img/5.svg",   
      "precio": 99,   
    },
  ]
  Lista2 : any[] = [
    {    
      "nombre": "Air Pods 2da generación",   
      "imagen": "/assets/img/2.svg",   
      "precio": 899,   
    },
    {    
      "nombre": "Audifonos marca Beat",   
      "imagen": "/assets/img/4.svg",   
      "precio": 599,   
    },
    {    
      "nombre": "Audifonos diadema cafe",   
      "imagen": "/assets/img/6.svg",   
      "precio": 199,   
    },
  ]   

  // nombre : string = "Earphones for Monitor"
  // imagen : string = "/assets/img/2.svg"
  // precio : string = "100"
}
