import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  posts?: Post[] = []; 

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7161/api/post')
      .subscribe({
        next: (data: Postp[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      })
  }
}
