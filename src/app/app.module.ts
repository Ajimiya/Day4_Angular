import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtformsComponent,
    ContactsComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
