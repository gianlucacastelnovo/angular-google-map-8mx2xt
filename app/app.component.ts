import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationService} from './location.service';
import { OnInit } from '@angular/core';
  import {Renderer2} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular 5';
  renderer: Renderer2;
  lat:any;
  lng:any;
  pos:any;
   public service: LocationService;
  constructor(){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

ngOnInit(){

  this.renderExternalScript('https://apis.google.com/js/client:platform.js').onload = () => {
  alert('Google API Script loaded');
    // do something with this library
  }

}

renderExternalScript(src: string): HTMLScriptElement {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = true;
  script.defer = true;
  this.renderer.appendChild(document.body, script);
  return script;
}


 getLocation(event){

this.service.getPosition().then(pos=>
  {
     alert(`Positon: ${pos.lng} ${pos.lat}`);
  });
 }
 getLocation1(event){

this.service.getPosition().then(pos=>
  {
     alert(`Positon: ${pos.lng} ${pos.lat}`);
  });
/*
navigator.geolocation.getCurrentPosition((position) => {
      this.pos = position;
    });
    this.lat=this.pos.coords.latitude;
alert(this.lat);
   */
    let offsetLeft = 0;
    let offsetTop = 0;

    let el = event.srcElement;

    while(el){
        offsetLeft += el.offsetLeft;
        offsetTop += el.offsetTop;
        el = el.parentElement;
    }
   //  alert("--"+offsetLeft+"--"+offsetTop);
    return { offsetTop:offsetTop , offsetLeft:offsetLeft }
}

}