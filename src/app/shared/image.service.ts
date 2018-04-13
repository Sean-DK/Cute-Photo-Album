import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id);
    }
}

const IMAGES = [
    { 'id': 1, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_01.png' },
    { 'id': 2, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_02.png' },
    { 'id': 3, 'category': 'camping', 'caption': 'View from a camp', 'url': 'assets/img/camp_01.png' },
    { 'id': 4, 'category': 'camping', 'caption': 'View from a camp', 'url': 'assets/img/camp_02.png' },
    { 'id': 5, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_01.png' },
    { 'id': 6, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_02.png' }
];
