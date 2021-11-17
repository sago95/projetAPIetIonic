import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  private user:any;

  constructor(private http: HttpClient, private route:Router) {
    this.apprenantApiUrl = 'http://localhost:8080/apprenants';
    this.readAPI(this.apprenantApiUrl)
      .subscribe((data) => {
        this.listes = data;
        console.log(data);
      });
      this.user = JSON.parse(localStorage.getItem('userData'));
      if(this.user==null){
        this.route.navigateByUrl('/home')
      }
   }

   readAPI(URL: string){
    return this.http.get(URL);
  }
}
