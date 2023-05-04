import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markupItems = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markupItems);

// візуалізація елементів
function createGalleryMarkup(items) { 
    return items.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
}).join('');
}
gallery.style = 'list-style: none';

// використання бібліотеки SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250,
});
