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
  posts!: Observable<Post[]>;
  newIndex!: number;

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
    this.postsCollection = this.store.collection('Posts');
    console.log(
      this.postsCollection
        .snapshotChanges()
        .subscribe((item) =>
          item.map((item) => (this.newIndex = item.payload.newIndex))
        )
    );
    return (this.posts = this.postsCollection.valueChanges());
  }

  addPost(form: any) {
    return this.store.collection('Posts').add(form);
  }

  randomImage(date: Date) {
    return `https://picsum.photos/200/300/?random&t=${date}`;
  }
}
