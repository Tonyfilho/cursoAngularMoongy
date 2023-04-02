import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Observable, map, takeUntil, switchMap, delay, merge, filter, fromEvent, tap, skip } from 'rxjs';

@Component({
  selector: 'app-contat-streams',
  templateUrl: './contat-streams.component.html',
  styleUrls: ['../drag-and-drop/drag-and-drop.component.css']
})
export class ContatStreamsComponent implements OnInit, AfterContentInit {
  bodyParent!: any;
  constructor() {
    this.bodyParent = document.querySelector('.parent');
   }

  ngOnInit(): void {
    /**
     * 1º para concatenar streams usaremos o operador MERGE() que é um operador de criação, que UNE 2 Streams e cria uma nova.
     * 2º Dentro do Merge(), posso passar quantos paramentros for necessario, desde que sejão OBSEVABLES.
     * 3º dentro do keyUp() temos que FILTAR quando apertamos a tecla de espaço, por isto isaremos ele para filtrar. Toda
     * vez q retornar um TRUE ele continua e passa os emitir valores para proximo, se for false ele pára.
     * 4º dentro do Evento do filter(), temos o Objeto Which que é o codigo da tecla, como queremos a tecla de ESPAÇO, o Which dela é 32
     * 5º Tap() criamores um efeito colateral, usando o Tap, ele retorna o proprio valor, ou seja a tecla que queremos, ele retorna a mesma entrada, que vem do filter()
     * sem alterar a Stream, muito usado para fazer DEBUG em Observables.
     * 6º  document.body.insertBefore(card.cloneNode(true), card ), Pego o DOM uso insertBefore e adciono um novo antes dele.
     * 7º Skip() é fazer com estes evento KeyUp$ Não chegem no subscribe. Ou seja ele Ignora o numero de emissões que ele recebe como paramentro.
     *  Caso não passe valores, ele ignora TODAS as emissões.
    *
    *
    */

  }

  ngAfterContentInit(): void {

    // console.log(this.divParent);
    const card: any = document.querySelector('.card');
    const mouseDown$: Observable<any | Event> = fromEvent(card, 'mousedown');
    const mouseUp$: Observable<any | Event> = fromEvent(document, 'mouseup');
    const mouseMove$: Observable<any | Event> = fromEvent(document, 'mousemove');
    const keyUp$: Observable<any | Event> = fromEvent(document, 'keyup'); // Com esta variavel, quando apertarmos qualquer  tecla, será criando um stream

    const dragAndDrop$ = mouseDown$.pipe(
      map(eventoMouseDown => ({
        x: eventoMouseDown.clientX,
        y: eventoMouseDown.clientY,
        target: {
          x: eventoMouseDown.target.offsetLeft,
          y: eventoMouseDown.target.offsetTop
        }

      })),
      switchMap(eventoMouseDown => merge( // com o Merge podemos pegar 2 streams, neste caso o do mouseMove$ e mouseUp$ e junta-las
        mouseMove$.pipe(
          map(eventoMouseMove => ({
            x: eventoMouseMove.clientX - eventoMouseDown.x + eventoMouseDown.target.x,//pegamos o clientX e Y q vem do mouse move,  subtrair so valor mouseDown q é o click inicial, e guardar a posição final para q o elemento não retorne para posição inicial.
            y: eventoMouseMove.clientY - eventoMouseDown.y + eventoMouseDown.target.y,//pegamos o clientX e Y q vem do mouse move,  subtrair so valor mouseDown q é o click inicial, e guardar a posição final para q o elemento não retorne para posição inicial.
          })),
          takeUntil(mouseUp$)),
        keyUp$.pipe(
          filter(key => key.which === 32),
          tap(keySpace => {

            // this.divParent.parentNode.insertBefore(card.cloneNode(true), card);
            // this.divParent.parentNode.insertBefore(card.cloneNode(true), card);


          // document.parentNode?.insertBefore(card.cloneNode(true), card);
            //  document.body.insertAdjacentElement(card.cloneNode(true), card);
          //  document.body.insertAdjacentElement('afterend', card);
            console.log("card", document.body.getElementsByTagName('app-root').namedItem('body'));
          }),
          skip(10)
        )
      )
      )
    );

    dragAndDrop$.pipe(
      // delay(300) //aplicando um delay, usando o Operador DELAY()
    ).subscribe(dataStyleCard => {
      // console.log("mouseMove$: ", dataStyleCard),
      card.style.top = `${dataStyleCard.y}px`;// aplicando drag and drop no STYLE do Y, na var CARD.
      card.style.left = `${dataStyleCard.x}px`;// aplicando drag and drop no STYLE do X,  na var CARD.

    });
  }
}
