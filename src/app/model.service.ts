import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

// para que esse service funcione é necessário declarar ele no providers da sua classe raiz, que no caso desse projeto é em app.modules.ts
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  // variavel responsavel por armazenar a url base para a API
  private categoriaUrl = `${environment.apiUrl}`;

  // construtor da cclasse, responsavel também pela injeção de depências quando com o modificador: 'private' ou 'public'
  // HttpClient classe responsável pela comunicação entre a aplicação angular e a API. O retorno dessa classe a API é sempre um observable
  constructor(private http: HttpClient) { }

  // Método responsável por listar
  List() {
    // fazendo um get na url "users" para pegar todos
    return this.http.get(`${this.categoriaUrl}users/`);
  }

  Get() {
    // get na url "users", mas definindo um id para pegar um usuario em especifico
    return this.http.get(`${this.categoriaUrl}users/2`);
  }

  Create() {
    // fazendo um post para criar um usuario, no caso é dividido entre a url e o body da requisição, onde no body vai os dados a serem enviados para a API
    return this.http.post(`${this.categoriaUrl}users`, {
      'nome': 'teste',
      'job': 'leader'
    });
  }

  Update() {
    // fazendo um put para atualizar, as informações do usuario novamente vão no body
    return this.http.put(`${this.categoriaUrl}users`, {
      'nome': 'teste',
      'job': 'leader'
    });
  }

  Patch() {
    // fazendo um patch para atualizar, as informações do usuario novamente vão no body
    return this.http.patch(`${this.categoriaUrl}users`, {
      'nome': 'teste',
      'job': 'leader'
    });
  }

  Delete(id: string) {
    // fazendo um delete, na parte do obserse, serve para conseguir a resposta completa da requisição e não somente uma parte
    return this.http.delete(`${this.categoriaUrl}users/${id}`, {observe: 'response'});
  }

  Register() {
    // novamente mais um post
    return this.http.post(`${this.categoriaUrl}register`, {
      'email': 'sydney@fife',
      'password': 'pistol'
    });
  }

  RegisterErro() {
    // novamente mais um post
    return this.http.post(`${this.categoriaUrl}register`, {
      'email': 'sydney@fife'
    });
  }

  Login(val: User) {
    // novamente mais um post
    return this.http.post(`${this.categoriaUrl}login`, JSON.stringify(val));
  }

  Delayed() {
    // um get mas com o tempo de resposta com delay de alguns segundddos
    return this.http.get(`${this.categoriaUrl}users?delay=3`);
  }
}
