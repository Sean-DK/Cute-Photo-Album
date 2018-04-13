import { ImageService } from '../shared/image.service';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
    title = 'Recent Photos';
    @Input() filterBy?: string = 'all';
    visibleImages: any[] = [];
    constructor (private ImageService: ImageService) {
        this.visibleImages = this.ImageService.getImages();
    }

    ngOnChanges() {
        this.visibleImages = this.ImageService.getImages();
    }
}