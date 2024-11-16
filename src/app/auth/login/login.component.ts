import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  onSubmit() {
    console.log('User logged in');
    // Додати логіку авторизації (запит до сервера)
  }
}
