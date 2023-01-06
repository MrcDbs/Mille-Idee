import { Component, Input, OnInit } from '@angular/core';
// import { MdbModalService } from 'mdb-angular-ui-kit';

@Component({
  selector: 'app-lista-dettaglio',
  templateUrl: './lista-dettaglio.component.html',
  styleUrls: ['./lista-dettaglio.component.css']
})
export class ListaDettaglioComponent implements OnInit {

  @Input() listaProdotti?: any[];
  marca?: string = 'Flauto';
  //private modalService: MdbModalService
  constructor() { }

  ngOnInit(): void {

  }

}
