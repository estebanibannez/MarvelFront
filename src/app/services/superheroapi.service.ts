import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperheroapiService {
  ENDPOINT = `https://superheroapi.com/api/${environment.SUPERHERO_TOKEN}`

  constructor(http: HttpClient) {
    this.ENDPOINT = "/test";
  }
}
