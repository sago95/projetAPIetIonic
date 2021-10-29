import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage {

  listes:any;
  apprenantApiUrl = '';
  apprenantData = {
    nom: '',
    prenom: '',
    age: '',
    telephone: '',
    email: '',
    login: '',
    genre: '',
    apprenantStatus: '',
  };

  constructor(private http: HttpClient) {
    this.apprenantApiUrl = 'http://localhost:8080/apprenants';
    this.readAPI(this.apprenantApiUrl)
      .subscribe((data) => {
        this.listes = data;
        console.log(data);
      });
   }

   readAPI(URL: string){
    return this.http.get(URL);
  }
}
