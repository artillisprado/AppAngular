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

  findAll(): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(`${API_CONFIG.baseUrl}cartao`);
  }
}
