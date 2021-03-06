import { MyProfileComponent } from './login/my-profile/my-profile/my-profile.component';
import { ForecastComponent } from './forecast/forecast.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books/books.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';



/**São importações Auth do angularFire, é uma forma mais fácil de proteger
 * rotas quando usamos o firebase, Criando PIPES locais
 */
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo }  from '@angular/fire/auth-guard'
/**Usuario não Autorizado ou não logado Redireciona para Login*/
const redirectToLogin = () => redirectUnauthorizedTo(['/login']);
/**Usuario Autorizado ou  logado, Redireciona para Paginas */
const redirectToHome = () => redirectLoggedInTo(['/home']);



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /**Nos Outros LINKS, caso receba um FALSE por falta de autorização, o FireBase Authorization,
   *  a pagina será redirecinada para login*/
  { path: 'home', component: HomeComponent, ...canActivate(redirectToLogin)},
  { path: 'books', component: BooksComponent ,...canActivate(redirectToLogin) },
  {
    path: 'books/:id',
    component: BookComponent,...canActivate(redirectToLogin)
  },
  {
    path: 'forecasting',
    component: ForecastComponent,...canActivate(redirectToLogin)
  },
  /**Nos Link LOGIN e LOGIN/SIGN-UP, caso receba um TRUE do FireBase Authorization, a pagina será redirecinada para home*/
  {
    path: 'login',
    component: LoginComponent, ...canActivate(redirectToHome)
  },
  {
    path: 'login/sign-up',
    component: SignUpComponent, ...canActivate(redirectToHome)
  },
  // {
  //   path: 'myPerfil',
  //   component: MyProfileComponent, ...canActivate(redirectToHome)
  // },
  {
    path: 'myProfile',
    component: MyProfileComponent
  },
  /*************************************************Carregando LAZYLOAD ROUTE*/
  { path: 'forms', loadChildren: () => import('./forms/forms-local.module').then(module => module.FormsLocalModule), ...canActivate(redirectToLogin)},
  { path: 'about', loadChildren: () => import('./about/about.module').then(module => module.AboutModule)},
  {
    path: '**',
    component: NotFoundComponent ,...canActivate(redirectToLogin)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
