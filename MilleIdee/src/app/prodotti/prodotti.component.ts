import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  mostraLista?: boolean = false;
  @Output()
  nascondiFoto: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    //this.mostraLista = true;
    this.nascondi();
  }

  private nascondi(): void {
    this.nascondiFoto?.emit(false);
  }

}
