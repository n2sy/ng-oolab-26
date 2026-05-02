import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { addTokenInterceptor } from './add-token-interceptor';
import { myroutes } from './app.routing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(myroutes),
    provideHttpClient(withInterceptors([addTokenInterceptor])),
  ],
};
