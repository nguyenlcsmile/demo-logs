import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorLogsComponent } from './components/error-logs/error-logs.component';
import { FunctionalsComponent } from './components/functionals/functionals.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error-logs', component: ErrorLogsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'functionals', component: FunctionalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
