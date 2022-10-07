import { Directive, OnInit, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveBetter]'
})
export class DirectiveBetterDirective implements OnInit {
  @Input("colorChange") colorChange!:string;
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }
/**Com o Renderer2 já traz varios metodos de redenrizar o DOM de forma mais segura, ao invez de passar o ElementRef direto, passaremos o RENDERE2 no lugar
 * mas aqui injetaremos o ElementoRef conforme o Exemplo Abaixo. Pois é ele que vai renderizar atravez do Rendered.
 */
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef, "backgroundColor", "blue"); /**backgroundColor */
  }

}
