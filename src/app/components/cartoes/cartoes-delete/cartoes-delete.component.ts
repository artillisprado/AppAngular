import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from 'src/app/models/cartao';
import { CartaoService } from 'src/app/services/cartao.service';

@Component({
  selector: 'app-cartoes-delete',
  templateUrl: './cartoes-delete.component.html',
  styleUrls: ['./cartoes-delete.component.css']
})
export class CartoesDeleteComponent implements OnInit {

  cartao: Cartao = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: CartaoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cartao.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById() {
    this.service.findById(this.cartao.id).subscribe(resposta => {
      resposta.perfis = []
      this.cartao = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.cartao.id).subscribe(() => {
      console.log("Atualizado com Sucesso", "Cadastro");
      this.router.navigate(['cartao']);
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
}
