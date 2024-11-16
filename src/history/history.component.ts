import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  histories = [
    { date: '2024-10-15', details: 'Лікування зубів у Д-ра Іванова' },
    { date: '2024-09-20', details: 'Чистка зубів у Д-ра Петрова' }
  ];
}
