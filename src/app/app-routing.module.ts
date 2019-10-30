import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CVComponent } from './Pages/cv/cv.component';


const routes: Routes = [{ path: '',      component: HomeComponent }, { path: 'home', component: HomeComponent },
{ path: 'cv',      component: CVComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
