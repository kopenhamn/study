import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CryptoService } from './crypto-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
