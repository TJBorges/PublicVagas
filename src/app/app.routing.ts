import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { LoginComponent } from "./login/login.component";
import { VagasPublicadasComponent } from "./vagas-publicadas/vagas-publicadas.component";
import { MeusDadosComponent } from "./meus-dados/meus-dados.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AuthGuard } from "./guards/auth.guard";


const APP_ROUTE: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'vagasPublicadas', component: VagasPublicadasComponent, canActivate:[AuthGuard] },
    { path: 'perfil', component: MeusDadosComponent, canActivate:[AuthGuard] },
    { path: '', component: InicioComponent, canActivate:[AuthGuard] }
    
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);