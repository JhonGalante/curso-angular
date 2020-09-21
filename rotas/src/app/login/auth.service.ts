import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutentificado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutentificado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else{
      this.usuarioAutentificado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutentificado(){
    return this.usuarioAutentificado;
  }

}
