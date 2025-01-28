import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private key = 'posts';

  async getPosts(): Promise<any[]> {
    const { value } = await Preferences.get({ key: this.key });

    // Si no hay publicaciones guardadas, inicializa con datos predeterminados
    if (!value) {
      const defaultPosts = [
        {
          title: 'Mascota perdida',
          description: 'Perrito salchicha perdido en la esquina de Manuel Montt con Los Olivos.',
          date: '2024-01-18',
          photo: 'assets/default-dog.jpg',
        },
        {
          title: 'Cédula encontrada',
          description: 'Cédula encontrada en calle Simón Bolívar frente a almacén Doña Pepita.',
          date: '2024-01-09',
          photo: 'assets/cedula.jpg',
        },
      ];
      await this.savePosts(defaultPosts);
      return defaultPosts;
    }

    return JSON.parse(value);
  }

  async savePosts(posts: any[]): Promise<void> {
    await Preferences.set({ key: this.key, value: JSON.stringify(posts) });
  }
}
