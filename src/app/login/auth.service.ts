import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter= new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(usuario: Usuario){
    if (usuario.email == 'tj.com' &&
        usuario.senha == '123'){

          this.usuarioAutenticado = true;
          this.router.navigate(['/']);
          this.mostrarMenuEmitter.emit(true);

        }else{
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
        }
  }

  usuarioLogado(){
    return this.usuarioAutenticado;
  }

  sair(){
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }
}
