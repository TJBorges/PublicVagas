import { Injectable } from '@angular/core';
import { EmpresaService } from 'src/app/providers/empresa/empresa.service';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/basic/empresa';

@Injectable({
  providedIn: 'root'
})
export class CadastroGuardService {
  private sucessoCadastro: String;

  constructor(private router: Router,
    private empresaService: EmpresaService) { }


  salvarEmpresa(empresa: Empresa) {
    // if (usuario.email == '123' &&
    //     usuario.senha == '123'){

    //       this.usuarioAutenticado = true;
    //       this.router.navigate(['/']);
    //       this.mostrarMenuEmitter.emit(true);

    //     }else{
    //       this.usuarioAutenticado = false;
    //       this.mostrarMenuEmitter.emit(false);
    //     }

    this.empresaService.salvar(empresa).subscribe(data => {
      const response = (data as any);
      const objeto = JSON.parse(response._body);
      this.sucessoCadastro = objeto.sucess;

      if (this.sucessoCadastro != null) {
        //this.usuarioAutenticado = true;
        this.router.navigate(['/login']);
        //this.mostrarMenuEmitter.emit(true);
      }
      else {        
        console.log("else");
        console.log(this.sucessoCadastro);
      }
    }, error => {
      console.log(error);
    })
  }

}
