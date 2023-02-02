import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartao } from 'src/app/models/cartao';
import { CartaoService } from 'src/app/services/cartao.service';

@Component({
  selector: 'app-cartoes-create',
  templateUrl: './cartoes-create.component.html',
  styleUrls: ['./cartoes-create.component.css']
})
export class CartoesCreateComponent implements OnInit {

  cartao: Cartao = {
    id: '',
    nome: '',
    cartao: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  ncartao: FormControl = new FormControl(null, Validators.required);
  perfis: FormControl = new FormControl(null, Validators.email);

  constructor(
    private service: CartaoService,
    private router:  Router,
  ) { }

  ngOnInit(): void {
  }



  create(): void{
    this.service.create(this.cartao).subscribe(() => {
      console.log("Cadastrado com Sucesso", "Cadastro");
      this.router.navigate(['cartoes'])
    }, ex => {
      console.log(ex);
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          console.log(element.message);
        });
      } else {
        console.log(ex.error.message);
      }
    })
  }

  addPerfil(perfil: any): void {
    if(this.cartao.perfis.includes(perfil)) {
      this.cartao.perfis.splice(this.cartao.perfis.indexOf(perfil), 1);
    } else {
      this.cartao.perfis.push(perfil);
    }
  }

  validaCampos(): boolean {
    return this.nome.valid && this.ncartao.valid && 
    this.perfis.valid
  }
}
