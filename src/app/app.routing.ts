import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { LoginComponent } from "./pages/login/login.component";
import { VagasPublicadasComponent } from "./pages/vagas-publicadas/vagas-publicadas.component";
import { MeusDadosComponent } from "./pages/meus-dados/meus-dados.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { AuthGuard } from "./guards/auth.guard";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { CadastroVagaComponent } from "./pages/cadastro-vaga/cadastro-vaga.component";


const APP_ROUTE: Routes = [
    { path: '', component: InicioComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'cadastroVagas', component: CadastroVagaComponent, canActivate:[AuthGuard] },
    { path: 'vagasPublicadas', component: VagasPublicadasComponent, canActivate:[AuthGuard] },
    { path: 'perfil', component: MeusDadosComponent, canActivate:[AuthGuard] },
    { path: 'cadastro', component: CadastroComponent }
    
    
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);