import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Models/Post';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public Posts: Post[] = [];
  public HasDataLoaded = false;
  public ConnectivityError = false;
  constructor(private postService: PostsService) {
    this.Posts = this.postService.getAllPosts();
  }

  ngOnInit() {
    if (this.Posts.length === 0) {
      this.postService.initializeData().subscribe(
        posts => { this.Posts = posts; },
        error => { console.log(error); this.ConnectivityError = true; this.HasDataLoaded = true },
        () => { this.HasDataLoaded = true; });
    } else {
      this.HasDataLoaded = true;
    }
  }
  HideElement(element: HTMLElement) {
    element.style.display = 'none';
  }
}
