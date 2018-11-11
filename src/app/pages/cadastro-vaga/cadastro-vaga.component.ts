import { Component, OnInit } from '@angular/core';
import { VagaService } from 'src/app/providers/vaga/vaga.service';
import { Vaga } from 'src/app/basic/vaga';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.css']
})
export class CadastroVagaComponent implements OnInit {

  private vaga: Vaga;
  constructor(private vagaService: VagaService) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value.titulo);
  }

  cadastrar() {

    this.vagaService.cadastraVaga()
  }

}
