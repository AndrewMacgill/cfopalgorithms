import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './components/home/home.component';
import { OllAlgsComponent } from './components/oll-algs/oll-algs.component';
import { OllAlgDetailsComponent } from './components/oll-alg-details/oll-alg-details.component';
import { PllAlgsComponent } from './components/pll-algs/pll-algs.component';
import { PllAlgDetailsComponent } from './components/pll-alg-details/pll-alg-details.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'ollAlgs', component: OllAlgsComponent },
      { path: 'pllAlgs', component: PllAlgsComponent },
      { path: 'ollAlgs/:name', component: OllAlgDetailsComponent },
      { path: 'pllAlgs/:name', component: PllAlgDetailsComponent }
    ])
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    OllAlgsComponent,
    OllAlgDetailsComponent,
    PllAlgsComponent,
    PllAlgDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
