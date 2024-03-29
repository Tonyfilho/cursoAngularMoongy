import { MyProfileComponent } from './login/my-profile/my-profile/my-profile.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './_about/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';



/**São importações Auth do angularFire, é uma forma mais fácil de proteger
 * rotas quando usamos o firebase, Criando PIPES locais
 */
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

/**Usuario não Autorizado ou não logado Redireciona para Login*/
const redirectToLogin = () => redirectUnauthorizedTo(['/login']);
/**Usuario Autorizado ou  logado, Redireciona para Paginas */
const redirectToHome = () => redirectLoggedInTo(['/home']);



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /**Nos Outros LINKS, caso receba um FALSE por falta de autorização, o FireBase Authorization,
   *  a pagina será redirecinada para login*/
  { path: 'home', component: HomeComponent, ...canActivate(redirectToLogin) },

  /**Nos Link LOGIN e LOGIN/SIGN-UP, caso receba um TRUE do FireBase Authorization, a pagina será redirecinada para home*/
  {
    path: 'login',
    component: LoginComponent, ...canActivate(redirectToHome)
  },
  {
    path: 'login/sign-up',
    component: SignUpComponent, ...canActivate(redirectToHome)
  },

  {
    path: 'myProfile',
    component: MyProfileComponent
  },
  {
    path: 'apis', loadChildren: () => import('./apis/apis.module').then(module => module.ApisModule), ...canActivate(redirectToLogin)

  },
  /*************************************************Carregando LAZYLOAD ROUTE*/


  { path: 'angular', loadChildren: () => import('./angular/angular-local.module').then(module => module.AngularLocalModule), ...redirectToLogin },
  


  { path: 'rxjs-observables', loadChildren: () => import('./observables-e-RXJS/main-observables.module').then(module => module.ObservablesModule), ...redirectToLogin },
  { path: 'about', loadChildren: () => import('./_about/about.module').then(module => module.AboutModule) },
  {
    path: '**', component: NotFoundComponent, ...redirectToLogin, data: { message: "Page not found Message from App-Routing" }
  },

];
/**NOTE:
 * RouterModule.forRoot(routes, {useHash: true}), usando ,{useHash: true}
 * ele o angular vai por a RASH #/rota em nossa rotas, com isto informamos
 * ao servidor de aplicação que: Tudo que for informado depois da RASH #/
 * são as nossas rotas, com isto evitamos o 404 como erro  */

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules ,useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
