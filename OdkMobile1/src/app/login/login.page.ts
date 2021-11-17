import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: String;
  nom: String;
  prenom: String;

  private user:any;

  myDate: String = new Date().toISOString();

  constructor(private s: AuthService, private route: Router) {
  }
  
  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.nom = this.s.getLogin();
    this.nom = this.s.getNom();
    this.prenom = this.s.getPrenom();

    if(this.user==null){
      this.route.navigateByUrl('/home')
    }
  }

  remove(user) {
    return this.user = localStorage.removeItem('userData');
  }

  deco() {
    this.remove(this.user);
    this.route.navigateByUrl('/home');
  }

  

}
