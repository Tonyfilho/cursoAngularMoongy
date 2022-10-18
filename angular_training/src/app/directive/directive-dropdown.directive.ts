import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /** 1º Buscar o array de class do Css usando @HostBinding, Class.open faz com que uma DropDown abra no Html */
  @HostBinding("class.open") isOpen = false;


  /** 2º Cria um @HostListener para ficar ouvindo o DOM, NESTE CASO o que queremos é CLICK mudar avariavel */
  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }


  /**
   Exemplos
@Directive*
({selector: 'button[counting]'})
class CountClicks {
numberOfClicks = 0;

*@HostListener*
('click', ['$event.target'])
onClick(btn) {
console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
}
}

*@Component*
({
selector: 'app',
template: '<button counting>Increment</button>',
})

************************************************outro Ex:*******************************
class App {}
The following example registers another DOM event handler that listens for key-press events.

import { HostListener, Component } from "@angular/core";

*@Component*
({
selector: 'app',
template: `<h1>Hello, you have pressed keys {{counter}} number of times!</h1> Press any key to
increment the counter.
<button (click)="resetCounter()">Reset Counter</button>`
})
class AppComponent {
counter = 0;

*@HostListener*
('window:keydown', ['$event'])
handleKeyDown(event: KeyboardEvent) {
this.counter++;
}
resetCounter() {
this.counter = 0;
}
}
   */

}
