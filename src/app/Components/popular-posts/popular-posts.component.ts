import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';
import { Post } from 'src/Models/Article';

@Component({
  selector: 'popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.css']
})
export class PopularPostsComponent implements OnInit {
  public TopPosts: Post[] = [];
  constructor(private postService: PostsService) {
    this.TopPosts = this.postService.getTopPosts()
  }
  ngOnInit() {
  }

}
