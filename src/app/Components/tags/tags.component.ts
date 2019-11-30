import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
public allTags:string[];
  constructor(private postService:PostsService) {
    this.allTags=postService.getAllTags();
    console.log(this.allTags);
    
   }

  ngOnInit() {
  }

}
