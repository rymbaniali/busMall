'use strict';


let firstImageElement = document.getElementById('firstImage');
let secondImageElement = document.getElementById('secondImage');
let thirdImageElement = document.getElementById('thirdImage');

let MaxAtt = 10;
let attCotnter = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

let imagesArr = [];
let votesArr = [];
let shownTimesArr = [];

function Products(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shownTimes = 0;

    Products.allImages.push(this);
    imagesArr.push(this.name);

}


Products.allImages = [];


new Products('bag', 'images/bag.jpg');
new Products('banana', 'images/banana.jpg');
new Products('bathroom', 'images/bathroom.jpg');
new Products('boots', 'images/boots.jpg');
new Products('breakfast', 'images/breakfast.jpg');
new Products('bublegum', 'mages/bubblegum.jpg');
new Products('chair', 'images/chair.jpg');
new Products('cthulhu', 'images/cthulhu.jpg');
new Products('dog-duck', ' images/dog-duck.jpg');
new Products('dragon', 'images/dragon.jpg');
new Products('pen', 'images/pen.jpg');
new Products('pet-sweep', 'images/pet-sweep.jpg');
new Products('scissors', 'images/scissors.jpg');
new Products('shark', 'images/shark.jpg');
new Products('sweep', 'images/sweep.png');
new Products('tauntaun', 'images/tauntaun.jpg');
new Products('unicorn', 'images/unicorn.jpg');
new Products('usb.gif', 'images/usb.gif');
new Products('water-can', 'images/water-can.jpg');
new Products('wine-glass', 'images/wine-glass.jpg');

console.log(Products.allImages);




function generatRandomIndex() {

    return Math.floor(Math.random() * Products.allImages.length);

}


function renderImages() {

    firstImageIndex = generatRandomIndex();
    secondImageIndex = generatRandomIndex();
    thirdImageIndex = generatRandomIndex();





    let rowArr = [firstImageIndex, secondImageIndex, thirdImageIndex];


    while ((rowArr.includes(firstImageIndex) || rowArr.includes(secondImageIndex) || rowArr.includes(thirdImageIndex)) || (firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex)) {
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



    console.log(rowArr);


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

        } else if (event.target.id === 'thirdImage') {
            Products.allImages[thirdImageIndex].votes++;
        }
        renderImages();

    } else {
        let viewResults = document.getElementById('viewResults');
        viewResults.addEventListener('click', ResultBtn);
        viewResults.hidden = false;

        for (let i = 0; i < Products.allImages.length; i++) {
            votesArr.push(Products.allImages[i].votes);
            shownTimesArr.push(Products.allImages[i].shownTimes);

        }
        chart();

        imagesContainer.removeEventListener('click', userClick);
    }
    renderImages();



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


// chart.js
function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: imagesArr,

            datasets: [
                {
                    label: 'Products votes',
                    data: votesArr,
                    backgroundColor: [
                        'rgb(251, 93, 76)',
                    ],

                    borderWidth: 1
                },

                {
                    label: 'Products shown',
                    data: shownTimesArr,
                    backgroundColor: [
                        'black',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {}
    });

}