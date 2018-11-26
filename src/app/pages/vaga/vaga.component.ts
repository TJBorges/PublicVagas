import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  public vaga_teste = {
    titulo: "Vaga para Desenvolvedor",
    cargo: "Desenvolvedor JR",
    tp_contratacao: "CLT",
    vl_salario: "1.200,00",
    nr_qtd_vaga: "21",
    experiencia: "Sem Experiência",
    beneficios: "Vale alimentação, Vale Transporte, Plano de Saúde",
    observacao: "Atenção!",
    segunda_etapa: "trazer os documento ao endereço..."
  }


  constructor() { }

  ngOnInit() {
  }

}
