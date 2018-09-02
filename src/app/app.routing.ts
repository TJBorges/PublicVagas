import {Routes, RouterModule} from '@angular/Router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { VagaComponent } from './vaga/vaga.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { VagasPublicadasComponent } from './vagas-publicadas/vagas-publicadas.component';

const app_routes: Routes =  [
{path:'', component: LoginComponent},
{path: 'principal', component: PrincipalComponent},
{path: 'meusDados', component: MeusDadosComponent},
{path: 'vaga', component: VagaComponent},
{path: 'vagaPublicada', component: VagasPublicadasComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);