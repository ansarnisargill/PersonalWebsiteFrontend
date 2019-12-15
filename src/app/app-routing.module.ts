import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CVComponent } from './Pages/cv/cv.component';
import { PostComponent } from './Components/post/post.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './Pages/blog/blog.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CVComponent },
  { path: 'post/:postId', component: PostComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
