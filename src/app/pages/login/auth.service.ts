import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EmpresaService } from '../../providers/empresa/empresa.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter= new EventEmitter<boolean>();
  private usuario: Usuario;

  constructor(private router: Router,
              private empresaService: EmpresaService) { }

  login(usuario: Usuario){
    // if (usuario.email == '123' &&
    //     usuario.senha == '123'){

    //       this.usuarioAutenticado = true;
    //       this.router.navigate(['/']);
    //       this.mostrarMenuEmitter.emit(true);

    //     }else{
    //       this.usuarioAutenticado = false;
    //       this.mostrarMenuEmitter.emit(false);
    //     }

    this.empresaService.login(usuario).subscribe(data =>{
      const response = (data as any);
      const objeto = JSON.parse(response._body);
      this.usuario = objeto.sucess;

      // console.log("User");
      // console.log(usuario);    
      // console.log("this.User");
      // console.log(this.usuario);
       if(this.usuario != null){
        // this.authService.login(this.usuario);   
        // console.log("USER: " + this.usuario);
        // console.log("AUTENT: " +this.usuarioAutenticado);
        this.usuarioAutenticado = true;
          this.router.navigate(['/']);
          this.mostrarMenuEmitter.emit(true);

        
      }
      else{
        console.log("else");
      }
    },error =>{
     console.log(error);   
    })
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
