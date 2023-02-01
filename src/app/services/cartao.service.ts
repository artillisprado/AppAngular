import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cartao } from '../models/cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  constructor(private httpClient: HttpClient) { 
  }

  findById(id: any): Observable<Cartao> {
    return this.httpClient.get<Cartao>(`${API_CONFIG.baseUrl}cartao/${id}`);
  }

  findAll(): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(`${API_CONFIG.baseUrl}cartao`);
  }

  create(cartao: Cartao): Observable<Cartao> {
    return this.httpClient.post<Cartao>(`${API_CONFIG.baseUrl}cartao`, cartao)
  }

  update(cartao: Cartao): Observable<Cartao> {
    return this.httpClient.put<Cartao>(`${API_CONFIG.baseUrl}cartao/${cartao.id}`, cartao);
  }

  delete(id: any): Observable<Cartao> {
    return this.httpClient.delete<Cartao>(`${API_CONFIG.baseUrl}cartao/${id}`);
  }
  // delete(id: any) Obser {
  //   return this.httpClient.delete<Cartao>(`${API_CONFIG.baseUrl}cartao/${id}`);
  // }
}
