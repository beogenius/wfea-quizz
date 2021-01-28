import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizDashboardComponent } from './layout/quiz-dashboard/quiz-dashboard.component';
import { QuizFormComponent } from './layout/quiz-form/quiz-form.component';
import { QuizTableComponent } from './layout/quiz-table/quiz-table.component';

const routes: Routes = [
  { path: 'dashboard', component: QuizDashboardComponent },
  { path: 'form', component: QuizFormComponent },
  { path: 'table', component: QuizTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
