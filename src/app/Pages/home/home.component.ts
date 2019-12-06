import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Models/Post';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Posts: Post[] = [];
  constructor(private postService: PostsService) {
    this.Posts = this.postService.getAllPosts();
  }

  ngOnInit() {
  }

}
