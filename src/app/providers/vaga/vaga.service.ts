import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicosProvider } from '../servicos';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private http: Http,
    private URL: ServicosProvider) { }

  cadastraVaga()
  {
   // return this.http.post(this.URL.endereco + `/vaga/salvar?login=${usuario.email}&senha=${usuario.senha}`, usuario );
  }


}



