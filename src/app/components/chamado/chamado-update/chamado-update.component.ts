import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from 'src/app/models/cartao';
import { Chamado } from 'src/app/models/chamados';
import { Cliente } from 'src/app/models/cliente';
import { CartaoService } from 'src/app/services/cartao.service';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

  Cliente: Cliente[] = []
  Cartao: Cartao[] = []

  chamado: Chamado = {
    status:      '',
    titulo:      '',
    observacoes: '',
    cartao:     '',
    cliente:     '',
    nomeCliente: '',
    nomeCartao: ''
  }

  status:     FormControl = new FormControl(null, [Validators.required]);
  titulo:     FormControl = new FormControl(null, [Validators.required]);
  observacoes:FormControl = new FormControl(null, [Validators.required]);
  cartao:     FormControl = new FormControl(null, [Validators.required]);
  cliente:    FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private cartaoService: CartaoService,
    //private toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findAllCliente();
    this.findAllCartao();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    }, ex => {
      console.log(ex.error.error);
    })
  }

  update(): void {
    this.chamadoService.create(this.chamado).subscribe(resposta => {
      //this.toastService.success('Chamado criado com sucesso', 'Novo chamado');
      console.log('Chamado Atualizado com sucesso');
      this.router.navigate(['chamado']);
    }, ex => {
      console.log(ex.error.error);
      //this.toastService.error(ex.error.error);
    })
  }

  findAllCliente(): void {
    this.clienteService.findAll().subscribe(resposta => {
      this.Cliente = resposta;
    })
  }

  findAllCartao(): void {
    this.cartaoService.findAll().subscribe(resposta => {
      this.Cartao = resposta;
    })
  }

  validaCampos(): boolean {
    return this.status.valid && this.titulo.valid && this.observacoes && this.cartao.valid && this.cliente.valid
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
