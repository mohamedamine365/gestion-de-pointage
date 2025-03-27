import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';  // Importation correcte

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    NgChartsModule,  // Ajout de NgChartsModule dans les providers
  ]
};

