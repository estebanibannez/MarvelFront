import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private APIKEY = environment.APIKEY;
  private URL = `https://identitytoolkit.googleapis.com/v1`;

  userToken!: string;

  constructor(private http: HttpClient) {
    this.verifyToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  //metodo para login de usuario registrado
  login(usuario:UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.URL }/accounts:signInWithPassword?key=${ this.APIKEY }`,
      authData
    ).pipe(
      map( (resp : any)  => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );
  }

  //metodo para el registro de un nuevo usuario
  signUp(usuario:UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.URL }/accounts:signUp?key=${ this.APIKEY }`,
      authData
    ).pipe(
      map( (resp : any)  => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );
  }

  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      //token expirado
      return false;
    }
  }

  //valida si existe un token en localstorage
  verifyToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken =  localStorage.getItem('token') || '';
    } else {
      this.userToken = '';
    }
    return this.userToken;

  }

  //almacena el token que retorna firebase en el localstorage agrega tiempo de expiración del token
  private saveToken( idToken: string ) {
    debugger
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }
}
