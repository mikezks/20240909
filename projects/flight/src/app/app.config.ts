import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { APP_ROUTES } from './app.routes';
import { provideRouterFeature } from './shared/logic-router-state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES,
      // withDebugTracing(),
      // withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideRouterFeature()
  ]
};
