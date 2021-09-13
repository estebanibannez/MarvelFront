import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  URL_API = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH}`;
  // URL_API = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH}&title=Avengers`;

  constructor(private http : HttpClient) { }

  //obtiene los comics
  public getAllComics(offset:string, limit:string):Observable<any> {
    return this.http.get<any>(`${this.URL_API}&offset=${offset}&limit=${limit}`)
    .pipe(
        map((data:any) =>  {
          console.log('Respuesta comics', data.data.results);
          return data.data.results;
    }))
  }
}
