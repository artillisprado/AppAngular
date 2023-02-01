import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { 
  }

  findById(id: any): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${API_CONFIG.baseUrl}cliente/${id}`);
  }

  findAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${API_CONFIG.baseUrl}cliente`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${API_CONFIG.baseUrl}cliente`, cliente)
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${API_CONFIG.baseUrl}cliente/${cliente.id}`, cliente);
  }

  delete(id: any): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${API_CONFIG.baseUrl}cliente/${id}`);
  }
  // delete(id: any) Obser {
  //   return this.httpClient.delete<Cliente>(`${API_CONFIG.baseUrl}cliente/${id}`);
  // }
}
