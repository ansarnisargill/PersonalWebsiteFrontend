import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
import { Post } from 'src/Models/Post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: Post;
  public postId:string;
  constructor(private route: ActivatedRoute, private postService: PostsService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId=params.get('postId');
      this.post = this.postService.getPostById(this.postId);
      if(this.post===null){
        this.postService.getPostFromAPI(this.postId).subscribe(post=>{ 
          this.post==post;
          this.postService
        })
      }
    });
  }

}
