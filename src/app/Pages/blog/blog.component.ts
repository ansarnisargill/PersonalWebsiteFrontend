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

  constructor(private postService: PostsService) {
    this.Posts = this.postService.getAllPosts();
  }

  ngOnInit() {
  }

}
