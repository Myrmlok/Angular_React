import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()src:string="";
  @Input()name:string="";
  @Input()date:number= Date.now();
  @Input()author:string="";
  @Input()size:string="";
  @Input()place:string="";
}
