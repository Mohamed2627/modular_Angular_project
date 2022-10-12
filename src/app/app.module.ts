import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomrComponent } from './component/homr/homr.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SharedModule } from './component/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomrComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
