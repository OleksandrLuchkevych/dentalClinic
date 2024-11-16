import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {
  appointments = [
    { date: '2024-11-18', doctor: 'Д-р Іванов' },
    { date: '2024-11-19', doctor: 'Д-р Петров' }
  ];
}
