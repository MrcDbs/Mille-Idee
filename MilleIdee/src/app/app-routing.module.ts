import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AppComponent } from './app.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

const routes: Routes = [
  { path: 'app-home', component: AppComponent },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'contatti', component: ContattiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
