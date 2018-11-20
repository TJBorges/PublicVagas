import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicosProvider } from '../servicos';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(public http: Http,
    private URL: ServicosProvider) { }

  listarCargos() {
   return this.http.get(this.URL.endereco + `cargos`);

  }
}
