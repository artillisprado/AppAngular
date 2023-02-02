import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cartao } from 'src/app/models/cartao';
import { CartaoService } from 'src/app/services/cartao.service';

@Component({
  selector: 'app-cartoes-list',
  templateUrl: './cartoes-list.component.html',
  styleUrls: ['./cartoes-list.component.css']
})
export class CartoesListComponent implements OnInit {
  
  ELEMENT_DATA: Cartao[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'cartao', 'perfis', 'acoes'];
  dataSource = new MatTableDataSource<Cartao>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: CartaoService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }


  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Cartao>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
