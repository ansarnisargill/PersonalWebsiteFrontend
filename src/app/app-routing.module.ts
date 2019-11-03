import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CVComponent } from './Pages/cv/cv.component';
import { PostComponent } from './Components/post/post.component';


const routes: Routes = [
  { path: '',      component: HomeComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'cv',      component: CVComponent },
  { path: 'post',      component: PostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
