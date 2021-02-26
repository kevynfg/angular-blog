import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../blog-base/post';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../blog-base/posts-service.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  form: FormGroup;
  @Input() posts!: Observable<Post[]>;
  paramsID: any;
  novoPost: any;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramsID = this.route.snapshot.params.id;

    this.form = this.formBuilder.group({
      title: [null],
      description: [null],
    });
  }

  updateForm(post: any) {
    this.form.patchValue({
      title: post.title,
      description: post.description,
    });
  }
}
