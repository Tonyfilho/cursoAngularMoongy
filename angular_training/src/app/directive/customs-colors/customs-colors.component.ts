import { Component, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customs-colors',
  templateUrl: './customs-colors.component.html',
  styleUrls: ['./customs-colors.component.css']
})
export class CustomsColorsComponent implements OnInit {
/**Customizaremos a cor  do backGround */
// @Input("defaultColors") defaultColors: string = "";
@Input("customsColors") customsColors: string = "Blue";

 /** 1º Adcionaremos a Anotação @Hostlistener , permite usar metodos que temos no teclado ou no mouse */
 /** 2º Adcionaremos a Anotação @Hostbinding , permite manipular o DOM sem o Renderer2 */
 /** 3º com @Hostbinding criaremos a Propriedade de cor. Obs: Poderia ser qualquer uma  */
 /** 4ª Dentro do @Hostdbing temos que passar Qual a propriedade do ELEMENTO queremos fazer o BINDING, neste caso style.backgroundColor
  * Obs: Usar o camelCase, pois oDOM não reconhece "-" background-color.
  */
  @HostBinding("style.backgroundColor")  localBackGroundColor: string = "";

  constructor(private elRel:ElementRef) {
 }
 ngOnInit(): void {

 }

 /** 5' Sem precisa do mais  renderer2: Renderer2, podemos setar os valores do STYLE sem ele  */



 /** Quando passar o mouse sobre a lista, mudaremos a cor da mesma */
 @HostListener('mouseenter') mouseOver(evendData: Event) {
   this.localBackGroundColor = this.customsColors === "Blue" ? "Blue": this.customsColors;

 }
 @HostListener('mouseleave') mouseleave(evendData: Event) {
   this.localBackGroundColor = "";

 }
}
