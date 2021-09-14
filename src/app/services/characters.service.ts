import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // e.g. md5(ts+privateKey+publicKey)
  // https://www.md5hashgenerator.com


  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH}`;

  constructor(private http: HttpClient) { }

  //obtiene los personajes
  getAllCharacters(offset:string, limit:string):Observable<any>{
    return this.http.get<any>(`${this.URL_API}&offset=${offset}&limit=${limit}`)
    .pipe(map((data:any) => data.data.results))
  }
}
