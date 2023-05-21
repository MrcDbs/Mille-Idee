import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MilleIdee';


  mostra: boolean = true;

  onActivate(event: any, act: boolean) {
    // window.scroll(0,0);
    console.log('activated ', event);

    act ?
      window.scroll({
        top: 0,
        left: 1,
        behavior: 'smooth'
      }) : window.scroll({
        top: 0,
        left: 1,
        behavior: 'smooth'
      });
    this.mostra = !act;
  }



}
