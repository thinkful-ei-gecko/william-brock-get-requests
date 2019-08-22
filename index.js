'use strict';

function getDogImage(number) {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    // .then(responseJson => {
    //   console.log(responseJson)
    // })
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(error));
}


function displayResults(responseJson) {
  // $('img').replaceWith(`<img src="${responseJson.message}" class="dog-picture">`);
  $('.results').append(`<img src="${responseJson.message}" class="dog-picture">`);
}

function displayXTimes(number) {
  for (let i = 0; i <= number; i++) {
    getDogImage();
  }
}

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




function handleSubmitButton() {
  $('.dog-submit').on('submit', function(event) {
    event.preventDefault();
    console.log('hello world');
    const userInput = $('#select-number').val(); //convert the string to number parseInt()
    //function that takes in a number parameter and spits out X amount of generateImageHtml...ARGUMENT will be const userInput...
    // renderHtml( , userInput)
    // console.log(userInput);
    displayXTimes(userInput);
    getDogImage(userInput);
  });
}


function main() {
  handleSubmitButton();
}


$(main);