import { Observable } from 'rxjs';
import { PostsService } from './../posts-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss'],
})
export class PostCardsComponent implements OnInit {
  @Input() posts!: Observable<Post[]>;
  @Input() newIndex!: number;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.newIndex);
    this.newIndex = this.postService.newIndex;
  }
}
