import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ILana } from '../model/lana';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {


  lanaLista?: ILana[] = [
    {
      id: 2,
      composizione: "Pura lana",
      grammi: 3,
      marca: "Banjo",
      prezzo: 7.0,
      image: "exp_banjo_lana.jpg"
    },
    {
      id: 3,
      composizione: "80% Lana",
      grammi: 5,
      marca: "Chanel",
      prezzo: 5.5,
      image: "exp_chanel_lana.jpg"
    },
    {
      id: 1,
      composizione: "Pura lana",
      grammi: 5,
      marca: "Adriafil",
      prezzo: 6.0,
      image: "exp_adriafil_lana.jpg"
    },
    {
      id: 7,
      composizione: "Pura Lana",
      grammi: 7,
      marca: "Flauto",
      prezzo: 10.5,
      image: "exp_flauto_lana.jpg"
    },
    {
      id: 4,
      composizione: "90% Lana",
      grammi: 4,
      marca: "Ocarina",
      prezzo: 8.0,
      image: "exp_ocarina_lana.jpg"
    },
    {
      id: 8,
      composizione: "50% Lana, 50% Acrilico",
      grammi: 8,
      marca: "Gaucho",
      prezzo: 12.0,
      image: "exp_gaucho_lana.jpg"
    },
    {
      id: 9,
      composizione: "100% Lana",
      grammi: 5,
      marca: "Silke",
      prezzo: 8.0,
      image: "exp_silke_lana.jpg"
    }
  ];
  intimoLista?: any[];
  filatiLista?: any[];
  merceria?: [];
  tessutiLista?: any[];


  private BASE_URL = 'http://localhost:8080/lanaController';

  private getListaURL = this.BASE_URL + '/getAllLana';
  constructor(private httpClient: HttpClient) { }

  getLanaLista(): Observable<ILana[]> {
    return this.httpClient.get<ILana[]>(this.getListaURL)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }
}
