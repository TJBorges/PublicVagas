import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { VagaComponent } from './vaga/vaga.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { VagasPublicadasComponent } from './vagas-publicadas/vagas-publicadas.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MenuComponent,
    VagaComponent,
    MeusDadosComponent,
    VagasPublicadasComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
