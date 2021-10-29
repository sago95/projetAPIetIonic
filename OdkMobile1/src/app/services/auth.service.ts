import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host:String = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  public verification(login, password) {
    return this.http.get(this.host+"/login/"+login+"&"+password)
  }

  public setNom(nom){
    localStorage.setItem('nom', nom)
  }

  public setPrenom(prenom){
    localStorage.setItem('prenom', prenom)
  }

  public getNom(){
    return localStorage.getItem('nom')
  }

  public getPrenom(){
    return localStorage.getItem('prenom')
  }

  public setLogin(login){
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }

}
