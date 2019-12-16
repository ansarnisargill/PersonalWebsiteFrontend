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
  constructor(private postService: PostsService, private router: Router) {


  }
  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
