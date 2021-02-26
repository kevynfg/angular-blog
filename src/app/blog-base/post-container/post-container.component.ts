import { HttpClient } from '@angular/common/http';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { PostsService } from '../posts-service.service';
import { tap, map, switchMap, take, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
})
export class PostContainerComponent implements OnInit {
  form!: FormGroup;
  post = new Subject<any>();
  data$!: any[];
  result$: Observable<Post[]>;
  readonly URL_FIREBASE =
    'https://ng-angular-blog-default-rtdb.firebaseio.com/Posts.json';

  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      img: [null],
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(150),
        ],
      ],
      description: [null, [Validators.required]],
      date: [null],
    });

    this.getPosts();
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues = {
        ...this.form.value,
        img: new Date().getTime(),
        date: new Date(),
      };
      console.log('form enviado');
      this.postService.addPost(formValues);
    }
  }

  getPosts() {
    // this.result$ = this.postService.getPosts().pipe(
    //   tap((response: Post[]) => {
    //     return { ...response };
    //   }),
    //   catchError((error) => {
    //     console.error('Deu ruim');
    //     return EMPTY;
    //   })
    // );
    this.result$ = this.postService.getJson().pipe(tap(console.log));
  }
}
