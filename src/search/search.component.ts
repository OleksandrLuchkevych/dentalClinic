import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    results: string[] = [];
  onSearch(event: any) {
    const query = event.target.value;
    this.results = this.getSearchResults(query);
  }

  getSearchResults(query: string): string[] {
    // Мокові дані, можна інтегрувати API
    return ['Результат 1', 'Результат 2', 'Результат 3'].filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }
}
