import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  posts: any[] = [];

  constructor(private modalCtrl: ModalController, private dataService: DataService) {}

  async ngOnInit() {
    this.posts = await this.dataService.getPosts();
  }

  async confirmDelete(post: any) {
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      componentProps: { postTitle: post.title },
    });

    modal.onDidDismiss().then(async (result) => {
      if (result.data) {
        this.deletePost(post.id);
      }
    });

    await modal.present();
  }

  async deletePost(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId);
    await this.dataService.savePosts(this.posts);
  }
}
