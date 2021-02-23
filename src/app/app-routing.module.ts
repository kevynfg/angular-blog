import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogBaseComponent } from './blog-base/blog-base.component';
import { PostCardsComponent } from './blog-base/post-cards/post-cards.component';
import { PostContainerComponent } from './blog-base/post-container/post-container.component';

const routes: Routes = [
  {
    path: '',
    component: BlogBaseComponent,
  },
  {
    path: 'posts',
    component: PostContainerComponent,
    children: [
      { path: ':post', pathMatch: 'full', component: PostCardsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
