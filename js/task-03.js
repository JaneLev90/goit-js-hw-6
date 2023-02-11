const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImageItem = ({url, alt}) => {
  const listEl = document.createElement('li');
listEl.classList.add('gallery__item');

const imageEl = document.createElement('img');
imageEl.classList.add('gallery__img');
imageEl.src = url;
imageEl.alt = alt;

listEl.append(imageEl);
return listEl;
}

const items = images.map(makeImageItem);
//console.log (items);

const itemsContainer = document.querySelector('.gallery');
itemsContainer.append(...items);
//itemsContainer.insertAdjacentHTML("beforeend", items);


// const gallery = images
//    .map((item) => `<li class="gallery__item">${item}
//    <img class = "gallery__img" src = ${images.url} 
//     alt = ${images.alt}></li>`)
//    .join("");

//  console.log (gallery);
  
// const listGallery = document.querySelector('.gallery');
// listGallery.insertAdjacentHTML("beforeend", gallery);