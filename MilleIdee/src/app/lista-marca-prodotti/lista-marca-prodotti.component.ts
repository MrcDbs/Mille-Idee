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
  listaGrammi?: {
    id: number,
    quantitaGrammi: number
  }[];
  isLoading = false;
  showGrammi = false;
  showMarca = true;
  grammi: number = 0;
  composizione: string = '';
  listaFlauto?: any[];
  ricerca = 'Ricerca per: Marca';
  defaultClass1 = 'selected1';
  defaultClass2 = 'item1';
  defaultClass3 = 'item1';


  ngOnInit(): void {
    // this.getListaProdotti('Marca');
    this.getListaProdotti('Marca');
    this.listaFlauto = this.prodottiService.listaFlauto;

  }
  getListaProdotti(param: string) {
    this.productValue = this.route.snapshot.paramMap.get('product');
    if (param === 'Marca') {
      this.listaProdotti = this.prodottiService.marcaLanaLista;
      this.showMarca = true;
      this.showGrammi = !this.showMarca;
    } else {
      this.listaGrammi = this.prodottiService.listaGrammi;
      this.showMarca = false;
      this.showGrammi = !this.showMarca;
    }


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

  addPicURL(lista: ILana[]) {
    lista.forEach(p => {
      p.image = this.basePhotoUrl + p.image
    })
  }
  // getListaProdotti(param: string) {
  //   this.isLoading = true;
  //   this.productValue = this.route.snapshot.paramMap.get('product');

  //   if (this.productValue === 'Lana') {
  //     if (param === 'Marca') {
  //       console.log('1');
  //       this.prodottiService.getLanaLista()
  //         .subscribe({
  //           next: (response) => {
  //             this.listaProdotti = response;
  //             this.addPicURL(this.listaProdotti);
  //             console.log('LISTA ', this.listaProdotti);
  //             this.isLoading = false;

  //             this.showMarca = param === 'Marca' ? true : false;
  //             this.showGrammi = !this.showMarca;
  //           },
  //           error: (error) => {
  //             this.isLoading = false;
  //             console.error('ERROR !!! - ' + error.status);
  //           }
  //         });
  //     } else {
  //       this.prodottiService.getListaGrammi()
  //         .subscribe({
  //           next: (response) => {
  //             this.listaGrammi = response;
  //             console.log('LISTA ', this.listaProdotti);
  //             this.isLoading = false;

  //             this.showMarca = param === 'Marca' ? true : false;
  //             this.showGrammi = !this.showMarca;
  //           },
  //           error: (error) => {
  //             this.isLoading = false;
  //             console.error('ERROR !!! - ' + error.status);
  //           }
  //         });
  //     }
  //   }
  //   //console.log('product VALUE ', this.productValue);
  // }
  showSearch(param: string) {

    if (param === 'Marca') {
      this.ricerca = 'Ricerca per: ' + param;
      this.defaultClass1 = 'selected1';
      this.defaultClass2 = 'item1';
      this.defaultClass3 = 'item1';

      this.getListaProdotti(param);
    } else if (param === 'Grammi') {
      this.ricerca = 'Ricerca per: ' + param;
      this.defaultClass1 = 'item1';
      this.defaultClass2 = 'selected1';
      this.defaultClass3 = 'item1';

      this.getListaProdotti(param);
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
