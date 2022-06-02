import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Observables - Intro
      </h1>
      <hr>
  `,
  styles: []
})
export class AppComponent {

  constructor(){

    console.log('------------ of() ----------');

   /*  of(1, 2, "joao", ['Ola', 'Hello'], {key: 'um'})
      .subscribe(
        val => console.log(val)
      ) */
    of(1, 2, "joao", ['Ola', 'Hello'], {key: 'um'})
      .subscribe(
       // RXJS 6+ / 7
       {
         next: val => console.log(val),
         error: err => console.log('Ocorreu um Erro'),
         complete: () => console.log('Fim da Stream de dados')
       }
      );

      console.log('------------ from(Array) ----------');
       let nomes = ['Joao', 'Manuel', 'Antonio', 'Maria'];

       let nomes$ = from(nomes);

       nomes$.subscribe({
        next: val => console.log(val),
        error: err => console.log('Ocorreu um Erro'),
        complete: () => console.log('Fim da Stream de dados')
      });

      console.log('------------ operators ----------');
      let cervejas = [
        {nome: 'Sagres', pais: 'Portugal', preco: 1.50},
        {nome: 'Brahma', pais: 'Brasil', preco: 3.50},
        {nome: 'Guiness', pais: 'Irlanda', preco: 4.50},
        {nome: 'Heineken', pais: 'Paises Baixos', preco: 3.70},
        {nome: 'Trappe', pais: 'Belga', preco: 4.70},
      ];


      let cervejas$ = from(cervejas);

      cervejas$.pipe(
        filter(cerveja => cerveja.preco > 3.5),
        map( cerveja => `Cerveja: ${cerveja.nome} - €${cerveja.preco}`)
      ).subscribe({
        next: cerveja => console.log(cerveja),
        error: err => console.log(err),
        complete: () => console.log("Acabou o Chopinho, vamos mudar para vinho")
      });

  }


}
