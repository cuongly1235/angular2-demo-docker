import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/components/app/app.component';
import { appRouterProviders } from './app/components/app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS
]);
