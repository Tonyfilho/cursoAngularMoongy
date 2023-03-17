import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
    /**
     * 1º pegar o card
     * 2º pegar o 1º Evento do card,e tranformar em um oBservable usando FromEvent(), neste caso o mouseDown, quando clicamos e não soltamos
     * 3º Pegar o evento do DOM MouseUp
     * 4º Pegar o evento do DOM MouseMove
     * 5º cria um var q receberá o fluxo chamamos de dragAndDrop.
     * 6º pegar o evendo do click do mouseDOWN passar para a Var DragAndDrop ate que o proximo evento aconteça, neste caso o MouseUP.
     * 7º switchMap, é um operador de paralelismos, ou controle de Fluxo, Ele faz com q cada vez q exista um novo fluxo,
     * ele permite então o fluxo anterior seja desescrito e inscrito no novo, ou seja quando apertamos o mouse é um evento quando largamos o botão será o novo evento.
     *
     *
     */
    card: any= document.querySelector('.card');
    constructor() {
   const mouseDown$ = fromEvent(this.card,'mousedown');
   const mouseUp$ = fromEvent(document,'mouseUp');
   const mouseMove$ = fromEvent(this.card,'mousemove');

   const dragAndDrop$ = mouseDown$.pipe()

  }

  ngOnInit(): void {
  }

}
