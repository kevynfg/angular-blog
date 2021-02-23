import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsCollection!: AngularFirestoreCollection<Post>;
  posts$!: Observable<Post[]>;
  newIndex!: Observable<any>;
  index!: Observable<Post[]>;
  indexCollection!: AngularFirestoreCollection<any>;

  // createPost = this.store.collection('Post').valueChanges({ idField: 'id' });
  constructor(
    private store: AngularFirestore,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  getPosts() {
    // return [
    //   {
    //     id: 1,
    //     title: 'Hey',
    //     description: 'Fala memo jou',
    //     date: new Date(),
    //   },
    // ];
    // this.postsCollection = this.store.collection('Posts');
    // this.newIndex = this.postsCollection
    //   .snapshotChanges()
    //   .pipe(
    //     map((item) => item.map((item) => (this.newIndex = item.payload.doc.id)))
    //   );
    return (this.posts$ = this.postsCollection.valueChanges({ idField: 'id' }));
  }

  addPost(form: any) {
    return this.store.collection('Posts').add(form);
  }

  randomImage(date: Date) {
    return `https://picsum.photos/200/300/?random&t=${date}`;
  }

  getId(): Observable<any> {
    this.postsCollection = this.store.collection('Posts');
    // return this.postsCollection.snapshotChanges().pipe(
    //   map((actions) =>
    //     actions.map((a) => {
    //       return (this.newIndex = a.payload.doc.id);
    //     })
    //   )
    // );

    // this.indexCollection = this.store.collection('Posts');
    // return this.indexCollection
    //   .snapshotChanges()
    //   .pipe(map((item) => item.map((item) => item.payload.doc.id)));

    return (this.newIndex = this.postsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    ));
  }

  getById(id: any): Observable<Post[]> {
    return (this.index = this.postsCollection.valueChanges('Posts/' + id));
  }
}
