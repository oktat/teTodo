import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './shared/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [authGuard]  },
  { path: 'todo', component: TodoComponent, canActivate: [authGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard] }
];
