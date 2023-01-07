import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MilleIdee';


  mostra: boolean = true;

  onActivate(event: any) {
    // window.scroll(0,0);
    console.log('activated ', event);

    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }


}
