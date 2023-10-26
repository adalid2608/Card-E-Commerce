import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  
  @Input() nombreProducto : string = ""
  @Input() imagenProducto : string = ""
  @Input() precioProducto : string = "0"
}
