import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Cartao } from 'src/app/models/cartao';
import { Chamado } from 'src/app/models/chamados';
import { Cliente } from 'src/app/models/cliente';
import { CartaoService } from 'src/app/services/cartao.service';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
    this.findAllCliente();
    this.findAllCartao();
  }

  create(): void {
    this.chamadoService.create(this.chamado).subscribe(resposta => {
      //this.toastService.success('Chamado criado com sucesso', 'Novo chamado');
      console.log('Chamado criado com sucesso');
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

}
