import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CampiCasa {
  name: string;
  language: string;
  id: string;
  bio: string;
  version: string;
}

@Injectable({
  providedIn: 'root'
})

export class HouseserviceService {

// configUrl = 'assets/houses.json';
  configUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';  
  constructor(private http: HttpClient) { }

  getHouses() {
    return this.http.get<CampiCasa>(this.configUrl);
  }
}
