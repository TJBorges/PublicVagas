import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicosProvider } from '../servicos';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: Http,
              private URL: ServicosProvider) { }

  login(email: string, senha: string) {
    return this.http.get(this.URL.endereco + `empresa/login?login=${email}&senha=${senha}`);
  }

}