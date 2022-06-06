import { ForecastComponent } from './forecast/forecast.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books/books.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  {
    path: 'books/:id',
    component: BookComponent,
  },
  {
    path: 'forecasting',
    component: ForecastComponent,
  },
  /*************************************************Carregando LAZYLOAD ROUTE*/
  { path: 'about', loadChildren: () => import('./about/about.module').then(module => module.AboutModule)},
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
