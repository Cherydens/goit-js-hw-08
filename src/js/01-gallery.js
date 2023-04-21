import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('ul.gallery');
const galerryMarkup = createGalerryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galerryMarkup);

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalerryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
        `;
    })
    .join('');
}
