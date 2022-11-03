import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveBasic]'
})
export class DirectiveBasic implements OnInit {

  constructor(private elementRef: ElementRef) {/**Esta forma não é melhor  conceito de mudar o DOM, não é muito indicado pela comunidade Angular, mas funciona.
    O ElementoRef é o mesmo usado com o ViewChild e ViewContent */
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "red";
  }

}
