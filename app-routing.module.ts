import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './src/app/auth/login/login.component';
import { RegisterComponent } from './src/app/auth/register/register.component';
import { AppointmentsListComponent } from './src/appointments/list/appointments-list.component';
import { HistoryComponent } from './src/history/history.component';
import { SearchComponent } from './src/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointments', component: AppointmentsListComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
