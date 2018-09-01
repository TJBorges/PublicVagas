import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { VagaComponent } from './vaga/vaga.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { VagasPublicadasComponent } from './vagas-publicadas/vagas-publicadas.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { InicioComponent } from './inicio/inicio.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroVagaComponent } from './cadastro-vaga/cadastro-vaga.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VagaComponent,
    MeusDadosComponent,
    VagasPublicadasComponent,
    LoginComponent,
    InicioComponent,
    CadastroComponent,
    CadastroVagaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MaterializeModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
