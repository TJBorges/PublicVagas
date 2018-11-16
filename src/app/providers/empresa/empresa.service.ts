import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicosProvider } from '../servicos';
import { Usuario } from 'src/app/basic/usuario';
import { Empresa } from 'src/app/basic/empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private usuario: Usuario;
  private empresa: Empresa;

  constructor(private http: Http,
    private URL: ServicosProvider) { }

  login(usuario) {
    return this.http.post(this.URL.endereco + `empresa/login?login=${usuario.email}&senha=${usuario.senha}`, usuario);
  }

  salvar(empresa) {
    return this.http.post(this.URL.endereco + `empresa/salvar?salvar=${empresa}`, empresa);                     

  }
}