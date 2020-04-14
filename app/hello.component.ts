import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;



  getLocation(event){
    let offsetLeft = 0;
    let offsetTop = 0;

    let el = event.srcElement;

    while(el){
        offsetLeft += el.offsetLeft;
        offsetTop += el.offsetTop;
        el = el.parentElement;
    }
    return { offsetTop:offsetTop , offsetLeft:offsetLeft }
}
}
