import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILana } from '../model/lana';
import { IProdotti } from '../model/prodotti';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'app-lista-marca-prodotti',
  templateUrl: './lista-marca-prodotti.component.html',
  styleUrls: ['./lista-marca-prodotti.component.css']
})
export class ListaMarcaProdottiComponent implements OnInit {

  constructor(private route: ActivatedRoute, private prodottiService: ProdottiService) { }

  productValue?: string | null;
  listaProdotti?: ILana[];
  ngOnInit(): void {
    this.getListaProdotti();

  }
  getListaProdotti() {
    this.productValue = this.route.snapshot.paramMap.get('product');
    this.listaProdotti = this.prodottiService.lanaLista;
  }
  // getListaProdotti() {
  //   this.productValue = this.route.snapshot.paramMap.get('product');
  //   if (this.productValue === 'Lana') {
  //     console.log('1');
  //     this.prodottiService.getLanaLista()
  //       .subscribe({
  //         next: (response) => {
  //           this.listaProdotti = response;
  //           console.log('LISTA ', this.listaProdotti);
  //         },
  //         error: (error) => {
  //           console.error('ERROR !!! - ' + error.status);
  //         }
  //       });

  //   }
  //   //console.log('product VALUE ', this.productValue);
  // }
}
