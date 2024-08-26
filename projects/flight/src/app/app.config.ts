import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { APP_ROUTES } from './app.routes';
import { provideRouterFeature } from './shared/logic-router-state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideRouterFeature()
  ]
};
