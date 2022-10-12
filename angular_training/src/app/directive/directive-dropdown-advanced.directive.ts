import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveDropdownAdvanced]'
})
export class DirectiveDropdownAdvancedDirective {
 /**If you want that a dropdown can also be closed by a click anywhere outside
  * (which also means that a click on one dropdown closes any other one, btw.)
  * , replace the code of dropdown.directive.ts by this one (placing the
  *  listener not on the dropdown, but on the document): */
  constructor(private elRef: ElementRef) { }
  /** 1º Buscando com o @HostiBinding o Array de class do css no template  */
  @HostBinding("class.open") isOpen = false;

  /** 2ª Escutando o EVENTO do CLICK do mouse , pelo Document:click */
  @HostListener('document:click',['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? ! this.isOpen : false;

  }


}
