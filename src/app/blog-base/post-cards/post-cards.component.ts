import { Observable, Subscription } from 'rxjs';
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
  @Input() result$: Post[];
  subscription: Subscription;

  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onEdit(id: string) {
    this.router.navigate(['post', id]);
  }
}
