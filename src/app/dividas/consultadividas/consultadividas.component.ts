import { Component, OnInit } from '@angular/core';
import { Divida } from '../../models/divida';
import { Parcela } from '../../models/parcela';
import { DividasService } from './dividas.service';

@Component({
  selector: 'app-consultadividas',
  templateUrl: './consultadividas.component.html',
  styleUrls: ['./consultadividas.component.css']
})
export class ConsultadividasComponent implements OnInit {

  qtdMaximaParcelas = 3;
  dtVencimento = new Date('2020-03-1');
  dataAtual = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().toLocaleDateString("pt-BR", { day: "2-digit" });
  public parcelas: Parcela[];
  public dividas: Divida[];
  // valor juros
  // valor final
  // valor final de cada parcela com sua data de vencimento
  // telefone de orientação para ligar e negociar com um colaborador.
  constructor(private dividasService: DividasService) {
  }

  carregarParcelas() {
    this.dividasService.getAll().subscribe(
      (dividas: Divida[]) => { this.dividas = dividas; console.log(this.dividas); },
      (erro: any) => { console.error(erro) }
    );
  };

  ngOnInit() {
    this.carregarParcelas();
  }
}
