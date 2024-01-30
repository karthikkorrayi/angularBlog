import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../services/authentication/login.service';
import { Router } from '@angular/router';
import { users } from '../model/users';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('userForm')userForm: NgForm;

  constructor(private serv: LoginService, private router: Router){}

  private authServ: AuthService = inject(AuthService);
  onSubmit(u: users){
    if((u.username === this.serv.name) && (u.password === this.serv.password)){
      alert("loggedin successfully..");
      this.router.navigate(['posts']);
      this.authServ.login();
    }
    else{
      alert("Entered field doesn't match, Try Again!!!");
    }
  }
  


}
