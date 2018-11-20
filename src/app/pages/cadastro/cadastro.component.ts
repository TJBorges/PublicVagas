import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/basic/empresa';
import { CadastroGuardService } from './cadastro-guard.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private empresa: Empresa = new Empresa();
  constructor(private cadastroGuardService: CadastroGuardService) { }

  ngOnInit() {
  }

  salvarEmpresa(){      
    this.cadastroGuardService.salvarEmpresa(this.empresa)    
  }
}
