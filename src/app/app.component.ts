import { Component, OnInit } from '@angular/core';
import { PostsService } from './Services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Ansar Nisar';
  isLoaderHidden = true;
  isError = false;

  constructor(private postService: PostsService, private router: Router) {


  }
  ngOnInit() {
    this.postService.initializeData()
      .subscribe(
        posts => {
          this.postService.allPosts = posts;
        },
        error => {
          this.isError = true;
        },
        ()=>{
          this.isLoaderHidden = false;
          this.router.navigate(['/home']);
        });
  }
}
