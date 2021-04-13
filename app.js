'use strict';


let firstImageElement = document.getElementById('firstImage');
let secondImageElement = document.getElementById('secondImage');
let thirdImageElement = document.getElementById('thirdImage');

let MaxAtt = 25;
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


new Products('bag', 'assets/bag.jpg');
new Products('banana', 'assets/banana.jpg');
new Products('bathroom', 'assets/bathroom.jpg');
new Products('boots', 'assets/boots.jpg');
new Products('breakfast', 'assets/breakfast.jpg');
new Products('bublegum', 'assets/bubblegum.jpg');
new Products('chair', 'assets/chair.jpg');
new Products('cthulhu', 'assets/cthulhu.jpg');
new Products('dog-duck', 'assets/dog-duck.jpg');
new Products('dragon', 'assets/dragon.jpg');
new Products('pen', 'assets/pen.jpg');
new Products('pet-sweep', 'assets/pet-sweep.jpg');
new Products('scissors', 'assets/scissors.jpg');
new Products('shark', 'assets/shark.jpg');
new Products('sweep', 'assets/sweep.png');
new Products('tauntaun', 'assets/tauntaun.jpg');
new Products('unicorn', 'assets/unicorn.jpg');
new Products('usb.gif', 'assets/usb.gif');
new Products('water-can', 'assets/water-can.jpg');
new Products('wine-glass', 'assets/wine-glass.jpg');

console.log(Products.allImages);




function generatRandomIndex() {

    return Math.floor(Math.random() * Products.allImages.length);

}


function renderImages() {

    firstImageIndex = generatRandomIndex();
    secondImageIndex = generatRandomIndex();
    thirdImageIndex = generatRandomIndex();


    while (firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex) {
        firstImageIndex = generatRandomIndex();
        secondImageIndex = generatRandomIndex();
        thirdImageIndex = generatRandomIndex();

    }

    firstImageElement.src = Products.allImages[firstImageIndex].source;
    Products.allImages[firstImageIndex].shownTimes++;


    secondImageElement.src = Products.allImages[secondImageIndex].source;
    Products.allImages[secondImageIndex].shownTimes++;


    thirdImageElement.src = Products.allImages[thirdImageIndex].source;
    Products.allImages[thirdImageIndex].shownTimes++;

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
           

        } else if (event.target.id === 'secondImage') {
            Products.allImages[secondImageIndex].votes++;

        } else if (event.target.id === 'thirdImage'){
            Products.allImages[thirdImageIndex].votes++;
        }
        renderImages();

    } else { 
        let viewResults = document.getElementById('viewResults');
        viewResults.addEventListener('click', ResultBtn);
        viewResults.hidden=false;

        imagesContainer.removeEventListener('click', userClick);
    }
   



}






function ResultBtn() {

    let list = document.getElementById('votesList');

    let result;

    for (let i = 0; i < Products.allImages.length; i++) {
        result = document.createElement('li');
        list.appendChild(result);

        result.textContent = `${Products.allImages[i].name} has ${Products.allImages[i].votes} votes and was seen  ${Products.allImages[i].shownTimes} times`

    }
    viewResults.removeEventListener('click', ResultBtn);
}

