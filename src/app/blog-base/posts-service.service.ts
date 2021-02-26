import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, pluck, switchMap, tap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts$: Observable<any>;
  postChanged$ = new Subject<any>();
  constructor(
    private firebase: AngularFireDatabase,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  getPosts() {
    // return this.http
    //   .get('https://ng-angular-blog-default-rtdb.firebaseio.com/Posts.json')
    //   .pipe(
    //     map((res) => {
    //       Object.assign(postsArray, res);
    //     }),
    //     tap((res) => console.log(res))
    //   );
    return this.http
      .get<any[]>(
        'https://ng-angular-blog-default-rtdb.firebaseio.com/Posts.json'
      )
      .pipe(tap(console.log));

    // .subscribe((res: any) => Object.assign(postsArray, res));
  }

  addPost(form: any) {
    return this.http
      .post(
        'https://ng-angular-blog-default-rtdb.firebaseio.com/Posts.json',
        form
      )
      .subscribe((response) => console.log('Post added', response));
  }

  randomImage(date: Date) {
    return `https://picsum.photos/200/300/?random&t=${date}`;
  }

  postsLength() {
    return this.http
      .get<AngularFireObject<any>>(
        'https://ng-angular-blog-default-rtdb.firebaseio.com/Posts.json'
      )
      .subscribe((count: any) =>
        console.log('Posts count', Object.values(count))
      );
  }

  getJson() {
    return this.http
      .get<Post[]>('../../assets/data/data-test.json')
      .pipe(map((res) => res));
  }
}
