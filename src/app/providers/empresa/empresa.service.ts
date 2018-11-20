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
    return this.http.post(this.URL.endereco + `empresa/salvar?cnpj=${empresa.nr_cnpj}&razaosocial=${empresa.ds_razao_social}&nomefantasia=${empresa.ds_nome_fantasia}&endereco=${empresa.ds_endereco}&cep=${empresa.ds_cep}&areaatuacao=${empresa.ds_area_atuacao}&responsavel=${empresa.ds_responsavel_cadastro}&telefone=${empresa.ds_telefone}&email=${empresa.ds_email}&site=${empresa.ds_site}&senha=${empresa.ds_senha}`, empresa);                     

  }
}