import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MaterializeModule } from 'angular-materialize';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { VagaComponent } from './vaga/vaga.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { VagasPublicadasComponent } from './vagas-publicadas/vagas-publicadas.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VagaComponent,
    MeusDadosComponent,
    VagasPublicadasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
