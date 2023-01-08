import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FooterComponent } from './footer/footer.component';
import { ModalsCardComponent } from './modals-card/modals-card.component';
import { AboutComponent } from './about/about.component';
import { OrariComponent } from './orari/orari.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { NewProdottiComponent } from './new-prodotti/new-prodotti.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ListaMarcaProdottiComponent } from './lista-marca-prodotti/lista-marca-prodotti.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaDettaglioComponent } from './lista-dettaglio/lista-dettaglio.component';
import { ModaFotoDettaglioComponent } from './moda-foto-dettaglio/moda-foto-dettaglio.component';
import { FiltriRicercaComponent } from './filtri-ricerca/filtri-ricerca.component';
// import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdottiComponent,
    ContattiComponent,
    FooterComponent,
    ModalsCardComponent,
    AboutComponent,
    OrariComponent,
    OffcanvasComponent,
    NewProdottiComponent,
    PhotoGalleryComponent,
    ListaMarcaProdottiComponent,
    AreaPersonaleComponent,
    LogInFormComponent,
    ListaDettaglioComponent,
    ModaFotoDettaglioComponent,
    FiltriRicercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      // HTTP_INTERCEPTOR (aggiunge l'Authorization header con Bearer token JWT)
      config: {
        tokenGetter,
        allowedDomains: ['http://localhost:91/user/'],
        disallowedRoutes: ['http://localhost:8080/signIn']
      },
    }),
    // FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
