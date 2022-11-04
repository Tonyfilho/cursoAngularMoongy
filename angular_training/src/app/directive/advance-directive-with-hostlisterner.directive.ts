import { Directive, ElementRef, HostListener, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appAdvanceDirectiveWithHostlisterner]'
})
export class AdvanceDirectiveWithHostlisternerDirective implements OnInit {
/** 1º Adcionaremos a Anotação @Hostlistener , pemite usar metodos que temos no teclado ou no mouse */

varColor: string = 'write';
constructor(private elRel:ElementRef, private renderer2: Renderer2) {
}
ngOnInit(): void {

}

/** 2º No HostListener temos que passar o EVENTO do mouse como string, neste caso uma string  */
/** 3º dentro do paramentro do mouse temos q tipar como :Event */
/** 4º um metodo para quando clicar e outro para quando soltar o click */


/** Quando passar o mouse sobre a lista, mudaremos a cor da mesma */
@HostListener('mouseenter') mouseOver(evendData: Event) {
  this.varColor = "yellow";
  this.renderer2.setStyle(this.elRel.nativeElement, "background-color", this.varColor,);

}
@HostListener('mouseleave') mouseleave(evendData: Event) {
  this.varColor = "";
  this.renderer2.setStyle(this.elRel.nativeElement, "background-color", this.varColor,);

}

}
