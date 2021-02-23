import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { BlogBaseComponent } from './blog-base.component';
import { PostResolverGuard } from './guards/post-resolver.guard';
import { PostCardsComponent } from './post-cards/post-cards.component';
import { PostContainerComponent } from './post-container/post-container.component';

const routes: Routes = [
  { path: '', component: BlogBaseComponent },
  {
    path: 'posts',
    component: PostContainerComponent,
    // resolve: {
    //   post: PostResolverGuard,
    // },
  },
  {
    path: 'post/:id',
    pathMatch: 'full',
    component: PostComponent,
    // children: [
    //   {
    //     path: '',
    //     component: PostCardsComponent,
    //   },
    // ],
  },
];

// const routes: Routes = [
//   { path: '', component: BlogBaseComponent },
//   {
//     path: 'posts',
//     component: PostContainerComponent,
//     children: [
//       {
//         path: 'post/:id',
//         component: PostCardsComponent,
//         resolve: {
//           post: PostResolverGuard,
//         },
//       },
//     ],
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
