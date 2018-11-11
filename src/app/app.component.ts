import { Component } from '@angular/core';
import { AuthService } from './pages/login/auth.service';
import { Usuario } from './pages/login/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu: boolean = false;
  usuario: Usuario;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    //this.usuario = 
  }

  sair(){
    this.authService.sair();
    
  }
    
}
