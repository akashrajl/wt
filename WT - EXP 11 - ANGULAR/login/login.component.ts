import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login Successful');
    } else {
      alert('Invalid credentials');
    }
  }
}
