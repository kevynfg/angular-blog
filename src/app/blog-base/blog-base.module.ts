import { PostComponent } from './../post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogBaseComponent } from './blog-base.component';
import { PostCardsComponent } from './post-cards/post-cards.component';
import { BlogRoutingModule } from './blog-routing.module';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostsService } from './posts-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, ReactiveFormsModule],
  declarations: [
    BlogBaseComponent,
    PostCardsComponent,
    PostContainerComponent,
    PostComponent,
  ],
  providers: [PostsService],
})
export class BlogBaseModule {}
