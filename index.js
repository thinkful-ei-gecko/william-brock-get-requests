'use strict';

function getDogImage(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
      console.log(responseJson);
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  // $('img').replaceWith(`<img src="${responseJson.message}" class="dog-picture">`);
  $('.results').empty();

  responseJson.message.forEach(img => $('.results').append(`<img src="${img}" class="dog-picture">`));
}



function handleSubmitButton() {
  $('.dog-submit').on('submit', function(event) {
    event.preventDefault();
    console.log('hello world');
    const userInput = $('#select-number').val(); 
    getDogImage(userInput);
  });
}


function main() {
  handleSubmitButton();
}


$(main);




//Why did't this work?
// for (let i = 0; i < number; i++) {
//   ('.results').append(`<img src="${img}" class="dog-picture">`);
// }

//IGNORE:

// function displayXTimes(number) {
//   for (let i = 0; i <= number; i++) {
//     getDogImage();
//   }
// }

// function generateImageHtml(responseJson) {
//   return `
//     <div> <br/> 
//         <img src="${responseJson.message}" class="results-img">
//     </div>`;
// }

// function takes in a number parameter and spits out X amount of generateImageHtml
// function renderHtml(responseJson, number) {
//   $('.results').html(generateImageHtml(responseJson));
// }

// function renderHtmlXAmount(responseJson, number) {
//   for (let i = 1; i <= number; i++) {
//     renderHtml(responseJson);
//   }