import { Injectable } from '@angular/core';
import { Post } from 'src/Models/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public allPosts: Post[] = [];
  public url = 'https://puzzling-silence.glitch.me';
  constructor(private http: HttpClient) {
  }
  initializeData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  getAllPosts(): Post[] {
    return this.allPosts;
  }
  getTopPosts(): Post[] {
    return this.allPosts;
  }
  getAllTags(): string[] {
    const allTags = this.allPosts.map((value) => {
      return value.tag;
    });
    return allTags;
  }
  getPostById(id: string): Post {
    return this.allPosts.find(value => value.id === id);
  }
  getPostFromAPI(id: string): Observable<Post> {
    return this.http.get<Post>(this.url);
  }
  updatePostIntoListOfPosts(post: Post) {
    let postToUpdate = this.allPosts.find(x => x.id == post.id);
    if (postToUpdate) {
      postToUpdate.content = post.content;

    }
    else {
      this.allPosts.push(post);
    }
  }
}
