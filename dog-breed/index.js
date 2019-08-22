'use strict';


function getDogBreed(userInput) {
  fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
      console.log(responseJson);
    })
    .catch(error => alert('Server Error Cant access'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  if (responseJson.code === 404) {
    alert('This is not a dog breed');
  } else {
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`);
  }
  //display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const userInput = $('#search-breed').val();
    getDogBreed(userInput);
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});



//console.log(responseJson);
// If breed exists, we get an object(responseJson) that looks like this:
// {message: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1259.jpg" status: "success"__proto__: Object"}

// If breed does NOT exist, we get an object(responseJson) that looks like this:
// {status: "error", message: "Breed not found (master breed does not exist)", code: 404}