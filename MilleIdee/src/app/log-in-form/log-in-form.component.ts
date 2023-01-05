import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from '../model/Utente';
import { LogInService } from '../services/log-in.service';
import { Token } from '../model/tokenResp';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {


  correct?: boolean;
  //pattern: string = '/^[A-Z]';
  form: FormGroup;
  tokens: Token[] = [];
  errorMessage?: string;
  token?: Token;

  constructor(public fb: FormBuilder, private router: Router, private logInService: LogInService) {
    this.form = fb.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  logIn(user: Utente): void {
    this.logInService.login(user).subscribe({
      next: (response) => {
        //this.token = response;
        //this.correct = this.token.token == undefined ? true : false;
        if (response.token != undefined || response.token != null) {
          this.logInService.authenticated = this.logInService.isAuthenticated(response.token);
          localStorage.setItem('token', response.token);
          this.router.navigate(['area_p', response.username]);
        }
      }, error: (err) => {
        if (err.status == 403)
          this.errorMessage = 'Wrong Username or Password';
        if (err.status == 0)
          this.errorMessage = 'Server error';
        this.correct = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
