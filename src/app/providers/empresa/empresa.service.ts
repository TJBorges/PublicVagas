import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicosProvider } from '../servicos';
import { Usuario } from 'src/app/basic/usuario';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private usuario: Usuario;

  constructor(private http: Http,
              private URL: ServicosProvider) { }

  login(usuario) {
    return this.http.post(this.URL.endereco + `empresa/login?login=${usuario.email}&senha=${usuario.senha}`, usuario );
  }

}