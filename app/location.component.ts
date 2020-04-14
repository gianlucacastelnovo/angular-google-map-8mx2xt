import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<button (click)="prova()">#nome</button>',
  styles: [`h1 { font-family: Lato; }`]
})
export class LocationComponent  {
  @Input() name: string;

prova(){
  this.name="cioa";
  alert("prova");

}

}
