import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  onSubmit() {
    console.log('User registered');
    // Додати логіку реєстрації (запит до сервера)
  }
}