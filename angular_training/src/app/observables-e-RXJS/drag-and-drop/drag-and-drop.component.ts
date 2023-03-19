import { Component, OnInit, AfterViewInit, QueryList } from '@angular/core';
import { Observable, switchMap, takeUntil, map, fromEvent, delay } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit, AfterViewInit {
  /**
   * 1º pegar o card
   * 2º pegar o 1º Evento do card,e tranformar em um oBservable usando FromEvent(), neste caso o mouseDown, quando clicamos e não soltamos
   * 3º Pegar o evento do DOM MouseUp
   * 4º Pegar o evento do DOM MouseMove
   * 5º cria um var q receberá o fluxo chamamos de dragAndDrop.
   * 6º pegar o evendo do click do mouseDOWN passar para a Var DragAndDrop Quando precionamos o mouse e movimentamos pegaremos estas coordenadas.
   * 7º O fluxo é. quando precionamos o mouse e movimentamos ele, pegaremos cada evento do movimento, visto que são coordenadas diferentes ate que o proximo evento aconteça,nesta caso MOUSEUP$.
   * 8º O proximo evento será o MouseUP quando soltamos. Mas  estes eventos tem que vir do  DOM e não do CARD.
   * 9º switchMap, é um operador de paralelismos, ou controle de Fluxo, Ele faz com q cada vez q exista um novo fluxo ou seja um stream,
   * ele permite então o fluxo anterior seja desescrito e inscrito no novo, ou seja quando apertamos o mouse é um evento quando largamos o botão será o novo evento.
   * 10º Apos um SwitchMap, poderemos pegar o evento do mouseMove$.
   * 11º TakeUntil é o operador e pega o EVENTO ATEQUE, ou seja quando soltar o mouse este operador entra na jogada, ou seja ateQue emita um NOVO fluxo ou Stream fico Ouvindo o MouseMove$
   * 12º Usaremos o 1º MAP q é um operador de TRANSFORMAÇÃO, iqual ao Map do array, pegaremos os valores INICIAIS do Eixo X , Y e extrair uns valores. Pegar o Evento do MouseDown e retornar para SwithMap somente
   * um Objeto ja transformado com os valores q precisamos X,Y e pegar os valores do CARD que é o nosso TARGET.
   * 13º o Target é o CARD, temos que pegar a posição inicial dele.
   * 14º O 2º MAP dentro do SwitchMap é para pegar os valores finais vindo do MOUSEMOVE e fazer um transformação final, pegamos o clientX e Y q vem do mouse move,  subtrair so valor mouseDown q é o click inicial
   * 15º lembrando que os valores de eventoMouseDown estão guardado na variavel,
   * 16º Agora é so mudar as posições do CARD usando estas coordenadas.
   *
   */
  constructor() {

  }
  ngAfterViewInit(): void {
    const card: any = document.querySelector('.card');
    const mouseDown$: Observable<any | Event> = fromEvent(card, 'mousedown');
    const mouseUp$: Observable<any | Event> = fromEvent(document, 'mouseup');
    const mouseMove$: Observable<any | Event> = fromEvent(document, 'mousemove');

    const dragAndDrop$ = mouseDown$.pipe(
      map(eventoMouseDown => ({
        x: eventoMouseDown.clientX,
        y: eventoMouseDown.clientY,
        target: {
          x: eventoMouseDown.target.offsetLeft,
          y: eventoMouseDown.target.offsetTop
        }

      })),
      switchMap(eventoMouseDown => mouseMove$.pipe(
        map(eventoMouseMove => ({
          x: eventoMouseMove.clientX - eventoMouseDown.x + eventoMouseDown.target.x,//pegamos o clientX e Y q vem do mouse move,  subtrair so valor mouseDown q é o click inicial, e guardar a posição final para q o elemento não retorne para posição inicial.
          y: eventoMouseMove.clientY - eventoMouseDown.y + eventoMouseDown.target.y,//pegamos o clientX e Y q vem do mouse move,  subtrair so valor mouseDown q é o click inicial, e guardar a posição final para q o elemento não retorne para posição inicial.
        })),
        takeUntil(mouseUp$)

      ))

    )//end pipe
    dragAndDrop$.pipe(
      delay(300) //aplicando um delay, usando o Operador DELAY()
    ).subscribe(dataStyleCard => {
      console.log("mouseMove$: ", dataStyleCard),
      card.style.top = `${dataStyleCard.y}px`;// aplicando drag and drop no STYLE do Y, na var CARD.
      card.style.left = `${dataStyleCard.x}px`;// aplicando drag and drop no STYLE do X,  na var CARD.

    });
  }

  ngOnInit(): void {
  }

}
