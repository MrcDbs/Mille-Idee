import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ILana } from '../model/lana';
//import { lista_flauto } from '../model/flauto';
import data from '../data-access/db.json';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  marcaLanaLista?: ILana[] = data.marcaListaLana;
  // lanaLista?: ILana[] = [
  //   {
  //     id: 2,
  //     composizione: "Pura lana",
  //     grammi: 3,
  //     marca: "Adriafil",
  //     prezzo: 7.0,
  //     image: "assets/img/expImg/adriafil_2.1.jpg"
  //     // image: "https://storage.googleapis.com/mille-idee-pics/marca_adriafil.png"
  //   },
  //   {
  //     id: 3,
  //     composizione: "80% Lana",
  //     grammi: 5,
  //     marca: "Lana Gatto",
  //     prezzo: 5.5,
  //     image: "assets/img/expImg/lanaGatto_2.png"
  //     // image: "https://storage.googleapis.com/mille-idee-pics/marca_lanagatto_1.jpeg"
  //   },
  //   {
  //     id: 1,
  //     composizione: "Pura lana",
  //     grammi: 5,
  //     marca: "Silke",
  //     prezzo: 6.0,
  //     image: 'assets/img/expImg/marca_silke.jpeg'
  //     // image: "https://storage.googleapis.com/mille-idee-pics/marca_silke.jpeg"
  //   },
  //   {
  //     id: 7,
  //     composizione: "Pura Lana",
  //     grammi: 7,
  //     marca: "Ispe",
  //     prezzo: 10.5,
  //     image: "https://storage.googleapis.com/mille-idee-pics/marca_ispe.jpeg"
  //   },
  //   {
  //     id: 4,
  //     composizione: "90% Lana",
  //     grammi: 4,
  //     marca: "Bertagna Filati",
  //     prezzo: 8.0,
  //     image: "assets/img/expImg/bertagna_filati_2.jpg"
  //     // image: "https://storage.googleapis.com/mille-idee-pics/marca_bertagna.jpg"
  //   }
  //   , {
  //     id: 5,
  //     composizione: "50% Lana, 50% Acrilico",
  //     grammi: 8,
  //     marca: "Adrianwool",
  //     prezzo: 12.0,
  //     image: "assets/img/expImg/adrian_2.1.jpg"
  //   },
  //   // {
  //   //   id: 9,
  //   //   composizione: "100% Lana",
  //   //   grammi: 5,
  //   //   marca: "Silke",
  //   //   prezzo: 8.0,
  //   //   image: "exp_silke_lana.jpg"
  //   // }
  // ];

  listaGrammi = [
    {
      id: 1,
      quantitaGrammi: 50
    },
    {
      id: 2,
      quantitaGrammi: 100
    },
    {
      id: 3,
      quantitaGrammi: 150
    },
    {
      id: 4,
      quantitaGrammi: 200
    },
    {
      id: 5,
      quantitaGrammi: 250
    },
  ]
  intimoLista?: any[];
  filatiLista?: any[];
  merceria?: [];
  tessutiLista?: any[];
  listaFlauto?: any[];



  private BASE_URL = 'http://localhost:8080';

  private getListaURL = this.BASE_URL + '/lanaController/getAllLana';
  private getByGrammiURL = this.BASE_URL + '/lanaController/getByGrammi/';
  private getByComposizioneURL = this.BASE_URL + '/lanaController/getByComposizione/';

  private getGrammiURL = this.BASE_URL + '/grammiController/getAllGrammi';

  constructor(private httpClient: HttpClient) {
    this.listaFlauto = data.listaFlauto;
  }

  getLanaLista(): Observable<ILana[]> {
    return this.httpClient.get<ILana[]>(this.getListaURL)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }

  findByGrammi(grammi: number): Observable<ILana[]> {
    return this.httpClient.get<ILana[]>(this.getByGrammiURL + grammi)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }
  findByComposizione(comp: string): Observable<ILana[]> {
    return this.httpClient.get<ILana[]>(this.getByComposizioneURL + comp)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }

  getListaFlauto() {
    return this.listaFlauto;
  }

  getListaGrammi(): Observable<any> {
    return this.httpClient.get<any>(this.getGrammiURL)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }
}
