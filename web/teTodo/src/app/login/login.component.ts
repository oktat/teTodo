import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { EmitterService } from '../shared/emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm !: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private emitterService: EmitterService,
    private rotuer: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data.auth);
        localStorage.setItem('token', data.auth.token);
        this.loginForm.reset();
        this.emitterService.setLogedIn(true);
        this.rotuer.navigate(['/todo']);
      }
    });
  }
}
