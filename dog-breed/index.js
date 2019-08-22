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
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
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

function doesAThing() {
  const userInput = $('#search-breed').val();
  if (responseJson.code === 404) {
    alert('This is not a dog breed');      
  } else { 
    getDogBreed(userInput);
  }
}




$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});