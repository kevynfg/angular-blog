import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogBaseComponent } from './blog-base.component';
import { PostCardsComponent } from './post-cards/post-cards.component';
import { PostContainerComponent } from './post-container/post-container.component';

const routes: Routes = [
  { path: '', component: BlogBaseComponent },
  {
    path: 'posts',
    component: PostContainerComponent,
    children: [{ path: ':post', component: PostCardsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
