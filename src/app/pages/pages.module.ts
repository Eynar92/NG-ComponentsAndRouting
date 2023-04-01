import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { ErrorEnLaPaginaComponent } from './error-en-la-pagina/error-en-la-pagina.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    ErrorEnLaPaginaComponent
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
