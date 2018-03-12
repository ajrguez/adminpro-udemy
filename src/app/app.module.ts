
// Importamos Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos los módulos generados por nosotros para modularizar el programa
import { PagesModule } from './pages/pages.module';

// Impoprtamos Rutas
import { APP_ROUTES } from './app.routes';

// Importamos Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Importamos Servicios
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
