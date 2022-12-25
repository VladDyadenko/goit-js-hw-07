import { galleryItems } from './gallery-items.js';

// Change code below this line

// Розмітка галереї в єлементі div.gallery

const  listImag = document.querySelector(".gallery");

const addImagesToList = galleryItems
.map(({preview, description}) => `<a class="gallery__link"
 href="large-image.jpg">
<img
  class="gallery__image"
  src="${preview}"
  data-source="large-image.jpg"
  alt="${description}"
/>
</a>`)
.join("");

listImag.insertAdjacentHTML('beforeend', addImagesToList)

// делегування слухача на div 
listImag.addEventListener("click", addOridginalImagToClick)

// відкриття фото з оригінальним розміром з відкриванням модального вікна

function addOridginalImagToClick (e) {
 
 
    e.preventDefault();
     
    
    const currentImagOnClick = galleryItems.find(itam => 
    itam.preview === e.target["src"]);
    
    const src = currentImagOnClick.original;
    const alt = currentImagOnClick.description;
   
    const instance = basicLightbox.create(`
    <img
    class="gallery__image"
    src= ${src}
    data-source="large-image.jpg"
    alt= ${alt} 
    />`)
    
    instance.show()
 
}

// закриття модального вікна кнопкою Escape

document.addEventListener("keydown", closeModalOnClickEsc)

function closeModalOnClickEsc (e) {
        
    const divForModal = document.querySelector(".basicLightbox");
            
    if(e.code === "Escape") {
        divForModal.remove();
                    
    }
}






