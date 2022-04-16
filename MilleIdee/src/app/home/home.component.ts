import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mostra?: boolean;
  constructor() { }

  ngOnInit(): void {
    this.mostra = true;
  }
  ngOnDestroy() {
    //this.mostra = false;
  }
  nascondiFoto(value: boolean) {
    this.mostra = value;
  }

}
