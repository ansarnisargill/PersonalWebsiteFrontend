import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Posts: Post[] = [];
  constructor() {
    let post = new Post();
    post.id = '234';
    post.publishedAt = new Date();
    post.title = 'this is test';
    this.Posts.push(post);

  }

  ngOnInit() {
  }

}
