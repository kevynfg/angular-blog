import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../posts-service.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolverGuard implements Resolve<Post> {
  constructor(private service: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    if (route.params && route.params['id']) {
      // return this.service.getById(route.params['id']);
    }
    return of({
      id: null,
      title: null,
      description: null,
      date: null,
    });
  }
}
