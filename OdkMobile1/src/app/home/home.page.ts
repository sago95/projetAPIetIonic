import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nom: String;
  prenom: String;
  login: String;

  constructor(private s: AuthService, private route: Router){}

  logForm(form){
    this.s.verification(form.login, form.password)
      .subscribe(
        (data:any)=> {
          
          if (data!=null){
            localStorage.setItem('userData', JSON.stringify(data));
            this.route.navigateByUrl('/login');
          }
        }
      );
  }
}


