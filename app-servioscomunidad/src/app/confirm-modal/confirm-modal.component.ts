import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-confirm-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Confirmación</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>¿Deseas eliminar la publicación: "{{ postTitle }}"?</p>
      <ion-button expand="full" color="danger" (click)="onConfirm()">Sí</ion-button>
      <ion-button expand="full" (click)="onCancel()">No</ion-button>
    </ion-content>
  `,
  imports: [IonicModule],
})
export class ConfirmModalComponent {
  @Input() postTitle!: string; // Recibe el título de la publicación
  @Output() confirm = new EventEmitter<void>(); // Emite evento al confirmar
  @Output() cancel = new EventEmitter<void>(); // Emite evento al cancelar

  onConfirm() {
    this.confirm.emit(); // Notifica que se confirmó
  }

  onCancel() {
    this.cancel.emit(); // Notifica que se canceló
  }
}
