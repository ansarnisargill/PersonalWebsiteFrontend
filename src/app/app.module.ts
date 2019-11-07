import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TagsComponent } from './Components/tags/tags.component';
import { HomeComponent } from './Pages/home/home.component';
import { HomePostComponent } from './Components/home-post/home-post.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { PopularPostsComponent } from './Components/popular-posts/popular-posts.component';
import { CVComponent } from './Pages/cv/cv.component';
import { PostComponent } from './Components/post/post.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TagsComponent,
    HomeComponent,
    HomePostComponent,
    AboutMeComponent,
    PopularPostsComponent,
    CVComponent,
    PostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
