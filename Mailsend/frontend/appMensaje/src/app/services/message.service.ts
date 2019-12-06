import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http: HttpClient) { }

  sendMessage(body) {
    return this._http.post('https://cuponeslimoncellobe.azurewebsites.net/formulario', body);
  }
}
//https://cuponeslimoncellobe.azurewebsites.net
//http://localhost:3000/formulario