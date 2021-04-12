'use strict';


let firstImageElement = document.getElementById('firstImage');
let secondImageElement = document.getElementById('secondImage');
let thirdImageElement = document.getElementById('thirdImage');

let MaxAtt = 10;
let attCotnter = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

function Products(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shownTimes = 0;

    Products.allImages.push(this);

}

Products.allImages = [];


new Products('bag', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/bag.jpg?raw=true');
new Products('banana', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/banana.jpg?raw=true');
new Products('bathroom', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/bathroom.jpg?raw=true');
new Products('boots', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/boots.jpg?raw=true');
new Products('breakfast', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/breakfast.jpg?raw=true');
new Products('bublegum', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/bubblegum.jpg?raw=true');
new Products('chair', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/chair.jpg?raw=true');
new Products('cthulhu', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/cthulhu.jpg?raw=true');
new Products('dog-duck', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/dog-duck.jpg?raw=true');
new Products('dragon', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/dragon.jpg?raw=true');
new Products('pen', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/pen.jpg?raw=true');
new Products('pet-sweep', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/pet-sweep.jpg?raw=true');
new Products('scissors', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/scissors.jpg?raw=true');
new Products('shark', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/shark.jpg?raw=true');
new Products('sweep', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/sweep.png?raw=true');
new Products('tauntaun', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/tauntaun.jpg?raw=true');
new Products('unicorn', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/unicorn.jpg?raw=true');
new Products('usb.gif', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/usb.gif?raw=true');
new Products('water-can', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/water-can.jpg?raw=true');
new Products('wine-glass', 'https://github.com/LTUC/amman-201d20/blob/main/class-11/lab/assets/wine-glass.jpg?raw=true');

// console.log(Products.allImages);

function generatRandomIndex() {

    return Math.floor(Math.random() * Products.allImages.length);

}
// console.log(generatRandomIndex);

function renderImages() {

    firstImageIndex = generatRandomIndex();
    secondImageIndex = generatRandomIndex();
    thirdImageIndex = generatRandomIndex();


    while (firstImageElement === secondImageElement || firstImageElement === thirdImageElement || secondImageElement === thirdImageElement) {
        firstImageIndex = generatRandomIndex();
        secondImageIndex = generatRandomIndex();
        thirdImageIndex = generatRandomIndex();

    }

    firstImageElement.src = Products.allImages[firstImageIndex].source;;
    secondImageElement.src = Products.allImages[secondImageIndex].source;
    thirdImageElement.src = Products.allImages[thirdImageIndex].source;

}


renderImages();

let imagesContainer = document.getElementById('imagesContainer');
imagesContainer.addEventListener('click', userClick);

function userClick(event) {

    attCotnter++;
    console.log(attCotnter);

    if (attCotnter <= MaxAtt) {

        if (event.target.id === 'firstImage') {
            Products.allImages[firstImageIndex].votes++;
            Products.allImages[firstImageIndex].shownTimes++;
            console.log('from first if', Products.allImages[firstImageIndex].votes);

        } else if (event.target.id === 'secondtImage') {
            Products.allImages[secondtImageIndex].votes++;
            Products.allImages[secondtImageIndex].shownTimes++;

        } else {
            Products.allImages[thirdImageIndex].votes++;
            Products.allImages[thirdImageIndex].shownTimes++;
        }
        renderImages();

    } else {


        imagesContainer.removeEventListener('click', userClick);
    }
    renderImages();



}




let viewResults = document.getElementById('viewResults');
viewResults.addEventListener('click', ResultBtn);

function ResultBtn() {

    let list = document.getElementById('votesList');
    let result;
    for (let i = 0; i < Products.allImages.length; i++) {
        result = document.createElement('li');
        list.appendChild(result);

        result.textContent = `${Products.allImages[i].name} has ${Products.allImages[i].votes} votes and was seen  ${Products.allImages[i].shownTimes} times`

    }
}
