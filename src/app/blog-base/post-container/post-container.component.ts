import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../posts-service.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
})
export class PostContainerComponent implements OnInit {
  form!: FormGroup;
  post!: Observable<Post[]>;

  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // this.post = this.postService
    //   .getPosts()
    //   .subscribe((item: any[]) => console.log(item));
    // console.log(this.post);

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
