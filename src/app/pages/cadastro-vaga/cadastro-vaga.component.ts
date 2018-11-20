import { Component, OnInit } from '@angular/core';
import { VagaService } from 'src/app/providers/vaga/vaga.service';
import { Vaga } from 'src/app/basic/vaga';
import { CargoService } from 'src/app/providers/cargo/cargo.service';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.css']
})
export class CadastroVagaComponent implements OnInit {

  private vaga: Vaga;
  private cargos: any;
  constructor(private vagaService: VagaService,
    private cargoService: CargoService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value.titulo);
  }

  cadastrar() {
    this.vagaService.cadastraVaga()
  }

  listarCargos() {
    console.log(this.cargoService.listarCargos());
    this.cargoService.listarCargos().subscribe(data => {
      const response = (data as any);
      const objeto = JSON.parse(response._body);
      this.cargos = objeto.sucess;
    });
  }
}
