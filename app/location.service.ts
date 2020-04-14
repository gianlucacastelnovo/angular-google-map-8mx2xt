 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class LocationService {
    constructor(private http: HttpClient) { }


    getPosition(): Promise<any>
  {alert(1);
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}

 
 