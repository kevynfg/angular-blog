import { Observable } from 'rxjs';
import { PostsService } from './../posts-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss'],
})
export class PostCardsComponent implements OnInit {
  @Input() posts!: Observable<Post[]>;
  @Input() newIndex!: string | any;

  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.newIndex);
    this.newIndex = this.postService.newIndex;
  }

  onEdit(id: string) {
    this.router.navigate(['post', id]);
  }
}
