import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    OffcanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
