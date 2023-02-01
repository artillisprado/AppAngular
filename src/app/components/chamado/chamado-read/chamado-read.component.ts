import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from 'src/app/models/chamados';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

  chamado: Chamado = {
    status:      '',
    titulo:      '',
    observacoes: '',
    cartao:     '',
    cliente:     '',
    nomeCliente: '',
    nomeCartao: ''
  }

  constructor(
    private chamadoService: ChamadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    }, ex => {
      console.log(ex.error.error);
    })
  }

  retornaStatus(status: any): string {
    if(status == '0'){
      return "Ativo"
    } else if (status == '1') {
      return "Inativo"
    } else {
      return ""
    }
  }
}
