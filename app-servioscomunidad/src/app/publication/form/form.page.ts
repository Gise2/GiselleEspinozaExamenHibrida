import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.page.html',
  styleUrls: ['./publication-form.page.scss'],
})
export class PublicationFormPage {
  postForm: FormGroup;
  photo: string | undefined;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  async savePost() {
    if (this.postForm.valid) {
      const newPost = {
        id: Date.now(),
        title: this.postForm.value.title,
        description: this.postForm.value.description,
        date: new Date().toISOString(),
        photo: this.photo,
      };

      const posts = await this.dataService.getPosts();
      posts.push(newPost);
      await this.dataService.savePosts(posts);
    }
  }

  async capturePhoto() {
    const { Camera, CameraResultType } = await import('@capacitor/camera');
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
    });
    this.photo = image.dataUrl;
  }
}
