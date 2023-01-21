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
  basePhotoUrl = 'https://storage.googleapis.com/mille-idee-pics/';
  productValue?: string | null;
  listaProdotti?: ILana[];
  isLoading = false;
  showFGrammi = false;
  showFComp = false;
  grammi: number = 0;
  composizione: string = '';
  listaFlauto?: any[];
  ricerca = 'Ricerca per: Marca';
  defaultClass1 = 'selected1';
  defaultClass2 = 'item1';
  defaultClass3 = 'item1';


  ngOnInit(): void {
    this.getListaProdotti();
    this.listaFlauto = this.prodottiService.listaFlauto;

  }
  getListaProdotti() {
    this.productValue = this.route.snapshot.paramMap.get('product');
    this.listaProdotti = this.prodottiService.lanaLista;
    this.showFGrammi = false;
    this.showFComp = false;
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
  showSearch(param: string) {

    if (param === 'Marca') {
      this.ricerca = 'Ricerca per: ' + param;
      this.defaultClass1 = 'selected1';
      this.defaultClass2 = 'item1';
      this.defaultClass3 = 'item1';
    } else if (param === 'Grammi') {
      this.ricerca = 'Ricerca per: ' + param;
      this.defaultClass1 = 'item1';
      this.defaultClass2 = 'selected1';
      this.defaultClass3 = 'item1';
    } else if (param === 'Filtri') {
      this.ricerca = param;
      this.defaultClass1 = 'item1';
      this.defaultClass2 = 'item1';
      this.defaultClass3 = 'selected1';
    }
  }
  // showForm(param: any) {
  //   if (param === 'g') {
  //     this.showFGrammi = true;
  //     this.showFComp = false;

  //   } else if (param === 'c') {
  //     this.showFGrammi = false;
  //     this.showFComp = true;
  //   }

  // }

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
