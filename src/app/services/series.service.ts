import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  endpoint: string;

  constructor(private http: HttpClient) { 

    this.endpoint =
    `https://gateway.marvel.com/v1/public/`;
    
  }

  public getListSeries(offset?:string, limit?:string): Observable<Array<any>> {
    return this.http.get<Array<any>>(
      this.endpoint + `series?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH}&offset=${offset}&limit=${limit}`,
    ).pipe(
      map((data:any) =>  {
        console.log('Respuesta series', data.data.results);
        return data.data.results;
    }))
  }
}
