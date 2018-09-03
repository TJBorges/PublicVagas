import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(){
    //console.log(this.usuario);
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
