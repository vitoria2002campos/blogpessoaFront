import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
    //Para o funcionar entrar o meu servidor precisa receber como parametro um objeto do tipo  UserLogin que é a model, o metodo vai retornar desse http o metodo post e o caminho que é localhost.
    //Observable = para o angular identificar o userlogin e dar um post nele
  }

  cadastrar(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar' , user)
  }
}
