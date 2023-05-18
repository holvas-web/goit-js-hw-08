import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');
gallery.style =  'list-style: none';
const imagesMarkup = createImageMarkups(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageMarkups(images) {
  return images.map(({ preview, original, description }) => {
      return `
<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </li>
`;
  }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { 
  captionDelay: 250, 
  captionsData: 'alt' 
});