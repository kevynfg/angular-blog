import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../posts-service.service';
import { tap, map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
})
export class PostContainerComponent implements OnInit {
  form!: FormGroup;
  post!: Observable<Post[]>;
  idTest$!: any;

  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.post = this.postService
    //   .getPosts()
    //   .subscribe((item: any[]) => console.log(item));
    // console.log(this.post);

    // this.postService.getId().subscribe(
    //   (item) => item.map((value: any) => value),
    //   (error) => console.error(error)
    // );
    let itemArray: any[] = [];
    this.idTest$ = this.postService
      .getId()
      .pipe(
        map((item) =>
          item.map((item: any) => {
            itemArray.push(item);
          })
        )
      )
      .subscribe((success) => console.log('Operação concluida'));

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
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues = {
        ...this.form.value,
        img: new Date().getTime(),
        date: new Date(),
      };
      console.log('form enviado');
      this.postService
        .addPost(formValues)
        .then((success) =>
          console.log('Dados enviados para o banco com sucesso!')
        )
        .catch((error) => console.error(error));
    }
  }
}
