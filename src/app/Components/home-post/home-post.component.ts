import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/Models/Post';
@Component({
  selector: 'home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.css']
})
export class HomePostComponent implements OnInit {

  @Input() Post: Post;
  constructor() {
   }

  ngOnInit() {
  }

}
