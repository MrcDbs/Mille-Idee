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
  isLoading = false;
  showFGrammi = false;
  showFComp = false;
  grammi: number = 0;
  composizione: string = '';
  listaFlauto?: any[];

  ngOnInit(): void {
    this.getListaProdotti();
    this.listaFlauto = this.prodottiService.listaFlauto;

  }
  getListaProdotti() {
    this.productValue = this.route.snapshot.paramMap.get('product');
    this.listaProdotti = this.prodottiService.lanaLista;
  }

  cercaByGrammi() {
    console.log('GRAMMI ', this.grammi);

    this.prodottiService.findByGrammi(this.grammi)
      .subscribe({
        next: (response) => {
          this.listaProdotti = response;
          console.log('LISTA ', this.listaProdotti);
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('ERROR !!! - ' + error.status);
        }
      });

  }

  openListaClicked() {

  }
  // getListaProdotti() {
  //   this.isLoading = true;
  //   this.productValue = this.route.snapshot.paramMap.get('product');
  //   if (this.productValue === 'Lana') {
  //     console.log('1');
  //     this.prodottiService.getLanaLista()
  //       .subscribe({
  //         next: (response) => {
  //           this.listaProdotti = response;
  //           console.log('LISTA ', this.listaProdotti);
  //           this.isLoading = false;
  //           this.showFGrammi = false;
  //           this.showFComp = false;
  //         },
  //         error: (error) => {
  //           this.isLoading = false;
  //           console.error('ERROR !!! - ' + error.status);
  //         }
  //       });
  //   }
  //   //console.log('product VALUE ', this.productValue);
  // }

  showForm(param: any) {
    if (param === 'g') {
      this.showFGrammi = true;
      this.showFComp = false;

    } else if (param === 'c') {
      this.showFGrammi = false;
      this.showFComp = true;
    }

  }

  cercaByComposizione() {
    this.prodottiService.findByComposizione(this.composizione)
      .subscribe({
        next: (response) => {
          this.listaProdotti = response;
          console.log('LISTA ', this.listaProdotti);
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('ERROR !!! - ' + error.status);
        }
      });

  }
}
