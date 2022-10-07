import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnInit {
  red!: string;
  /**Esta forma não é melhor  conceito de mudar o DOM, não é muito indicado pela comunidade Angular, mas funciona. */
  /**O ElementoRef é o mesmo usado com o ViewChild e ViewContent */
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
   this.red = this.elementRef.nativeElement.style.backgroundColor="red";
    // this.elementRef.nativeElement.style.background = 'linear-gradient(68.15deg, #2e2e30 16.62%, #040013 85.61%)';
  }

}
