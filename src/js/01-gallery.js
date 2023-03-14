import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems.map((picture) => `
<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}"/>
</a>`).join('');

const gallery = new SimpleLightbox('.gallery a');

gallery.defaultOptions.captionsData = 'alt';
gallery.defaultOptions.captionDelay = 250;

gallery.on('show.simplelightbox', function () {});
