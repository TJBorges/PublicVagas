import { Component, OnInit, HostListener, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { EmpresaService } from '../../providers/empresa/empresa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioL: any={
    email: "123",
    senha: "123"
  }

  public email : string;
  public senha : string;
   private usuario: Usuario = new Usuario();
   private usuarioAutenticado: boolean = false;
   mostrarMenuEmitter= new EventEmitter<boolean>();

  constructor(private authService: AuthService,
              private router: Router,
              private empresaService: EmpresaService) { }              
  
    ngOnInit() {
      
    }

  login(){
    console.log(this.usuario);
    this.authService.login(this.usuario); 

     
  }
  
  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      //console.log(event);
    
      if (event.keyCode == 13) {
        this.login();
      }
    }

  telaCadastrar(){
    this.router.navigate(['/cadastro']);
  }

}
