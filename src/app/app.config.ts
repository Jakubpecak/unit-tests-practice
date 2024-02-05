import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

export const appConfig = [
  importProvidersFrom(
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ),
];
