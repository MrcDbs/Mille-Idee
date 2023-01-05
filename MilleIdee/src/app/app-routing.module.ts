import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AppComponent } from './app.component';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ListaMarcaProdottiComponent } from './lista-marca-prodotti/lista-marca-prodotti.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ModalsCardComponent } from './modals-card/modals-card.component';
import { NewProdottiComponent } from './new-prodotti/new-prodotti.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ActionsGuardService } from './services/actions-guard.service';
import { AreaPersonaleGuard } from './services/area-personaleGuard.service';

const routes: Routes = [
  { path: 'app-home', component: AppComponent },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'new-prodotti', component: NewProdottiComponent },
  { path: 'gallery', component: PhotoGalleryComponent },
  { path: 'lista-p/:product', component: ListaMarcaProdottiComponent },
  { path: 'modal-card', component: ModalsCardComponent },
  { path: 'log-in', component: LogInFormComponent },
  { path: 'area_p/:username', component: AreaPersonaleComponent, canActivate: [AreaPersonaleGuard], canDeactivate: [ActionsGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
