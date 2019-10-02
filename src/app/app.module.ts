import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TagsComponent } from './Components/tags/tags.component';
import { HomeComponent } from './Pages/home/home.component';
import { HomePostComponent } from './Components/home-post/home-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TagsComponent,
    HomeComponent,
    HomePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
