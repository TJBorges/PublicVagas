import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { VagaComponent } from './pages/vaga/vaga.component';
import { MeusDadosComponent } from './pages/meus-dados/meus-dados.component';
import { VagasPublicadasComponent } from './pages/vagas-publicadas/vagas-publicadas.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthService } from './pages/login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroVagaComponent } from './pages/cadastro-vaga/cadastro-vaga.component';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { HttpModule } from '@angular/http';
import { EmpresaService } from './providers/empresa/empresa.service';
import { ServicosProvider } from './providers/servicos';

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
    MaterializeModule,
    BrMaskerModule,
    HttpModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    EmpresaService,
    ServicosProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
