const counter = document.querySelector('#counter');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const likeBtn = document.querySelector('#heart');
const likedList = document.querySelector('.likes');
const pauseResumeBtn = document.querySelector('#pause');
const submitBtn = document.querySelector('#submit');
const commentForm = document.querySelector('#comment-form');
const commentList = document.querySelector('#list');


let counterValue = 0;
let likedNumbers = {

};


function incrementCounter() {
  counter.textContent = counterValue + 1;
  counterValue = parseInt(counter.textContent);
}

let updateEverySec = setInterval(function () {
    incrementCounter();
  }, 1000);


function updateLikedList(likedNumbers) {
  likedList.innerHTML = ('');
  for (let key in likedNumbers) {
    let newListItem = document.createElement('li');
    newListItem.textContent = `The number ${key} was liked ${likedNumbers[key]} times.`;
    likedList.append(newListItem);
  }
}

minusBtn.addEventListener('click', () => {
  counter.textContent = counterValue - 1;
  counterValue = parseInt(counter.textContent);
});

plusBtn.addEventListener('click', () => {
  incrementCounter();
});

likeBtn.addEventListener('click', () => {

  if (!likedNumbers[counterValue]) {
    likedNumbers[counterValue] = 1;
  } else {
    likedNumbers[counterValue] = likedNumbers[counterValue] + 1;
  }
  updateLikedList(likedNumbers);

});

pauseResumeBtn.addEventListener('click', (e) => {


  if (e.target.textContent === ' pause ') {
    clearInterval(updateEverySec);
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    likeBtn.disabled = true;
    submitBtn.disabled = true;

    pauseResumeBtn.textContent = ' Resume ';
  } else {
    e.target.textContent = ' pause ';
    updateEverySec = setInterval(function () {
      incrementCounter();
    }, 1000);
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    likeBtn.disabled = false;
    submitBtn.disabled = false;
  }
});

commentForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  let input = document.querySelector('#comment-input');
  let inputValue = input.value;
  let newComment = document.createElement('p');
  newComment.textContent = inputValue;
  list.append(newComment);
  input.value = '';
})





