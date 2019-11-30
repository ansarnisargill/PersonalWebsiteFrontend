import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
import { Post } from 'src/Models/Article';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: Post;
  constructor(private route: ActivatedRoute, private postService: PostsService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.post = this.postService.getPostById(params.get('postId'));
    });
  }

}
