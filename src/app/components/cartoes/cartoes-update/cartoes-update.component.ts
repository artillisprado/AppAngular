import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from 'src/app/models/cartao';
import { CartaoService } from 'src/app/services/cartao.service';

@Component({
  selector: 'app-cartoes-update',
  templateUrl: './cartoes-update.component.html',
  styleUrls: ['./cartoes-update.component.css']
})
export class CartoesUpdateComponent implements OnInit {

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

  update(): void{
    this.service.update(this.cartao).subscribe(() => {
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

  addPerfil(perfil: any): void {
    if(this.cartao.perfis.includes(perfil)) {
      this.cartao.perfis.splice(this.cartao.perfis.indexOf(perfil), 1);
    } else {
      this.cartao.perfis.push(perfil);
    }
  }

  validaCampos(): boolean {
    return this.nome.valid && this.ncartao.valid && 
    this.perfis.valid && this.senha.valid
  }
}
