
import { Component, QueryList, ViewChild, ViewChildren ,ViewEncapsulation} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <section style="text-align:center" class="wrapper">
      <h1>
       Child - ng-content
      </h1>
      <hr>
      <app-child name='Joao' #child1></app-child>
      <app-child name='Maria' #child2></app-child>
      <app-child name='Manuel' #child3></app-child>

      <button (click)="firstChild.dizerOla()">chamar o Joao</button>
      <button (click)="olaATodos()">chamar todos</button>

      <app-projection>
        <p id="um">Texto para dentro da Projection component (UM)</p>
        <p id="dois">Texto para dentro da Projection component (DOIS)</p>
      </app-projection>
    </section>
  `,
  styles: [`
  .wrapper{background: tomato}
  `],
  encapsulation: ViewEncapsulation.None,/* default */
})
export class AppComponent {

  @ViewChild('child1') firstChild!: ChildComponent;

  @ViewChildren(ChildComponent) allChildren!: QueryList<ChildComponent>;


  olaATodos(){
    this.allChildren.map( child => child.dizerOla() );
  }


}
