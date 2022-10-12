import Dogs from "./Dogs.js";
import dogs from "./data.js";
// imporitng files to index.js

// taking the like and nope buttons
const like = document.getElementById('like');
const nope = document.getElementById('nope');


// this code takes the likes/nope badges
// so I can control their displays(when to appear and when to disappear)
const picLike = document.getElementById('pic-like');
const picNope = document.getElementById('pic-nope');

//taking the end message div
const endMessage = document.getElementById('ending-message');


const newDog = ['Teddy','Bella','Rex'];

function getNewDog(){
 const newDogData = dogs.shift()
 
 
 // here I am  checking if there is dogs left in the array. if that is true a new instance of Dogs is created and if there is no more dogs an emoty array is returned
 return newDogData ? new Dogs(newDogData) : [];
}



let newDogs = getNewDog()
//this function render the dogs on the screen

// this function will render when there is no more dogs in the array
function ending(){
  return ` 
   <div>
      <p class="ending-text">You have reached the end Congratulations</p>
      <img class="ending-img" src="images/happy emoji.jpg">
      <p class="ending-text2">
        Refresh the site again if you want
        change your opnion about the dogs
      </p>

    </div>`
}

function render(){ 

  
  if(newDogs.length === 0){
    like.style.display = 'none'
    nope.style.display = 'none'
    document.getElementById('dog')
    .remove()
    newDogs.push(  endMessage.innerHTML = ending())
  }else{
     document.getElementById('dog')
 .innerHTML = newDogs.getDogHtml()
  }

 
}

render()



let isWaiting = false

function activataLike(){
  if(!isWaiting){
    picLike.style.display = 'block'
    newDogs.hasBeenLiked = true
    isWaiting = true
  
    setTimeout(()=>{
      if(newDog.length > 0){
        newDogs = getNewDog()
        render()
        picLike.style.display = 'none'
        isWaiting = false

    
      }
    },2000)
   
   
  }
}

like.addEventListener('click',activataLike);


function activataNope(){
  if(!isWaiting){
    picNope.style.display = 'block'
    newDogs.hasBeenSwiped = true
    isWaiting = true

   setTimeout(()=>{
    if(newDog.length > 0){
    newDogs = getNewDog()
    render()
    picNope.style.display = 'none'
    isWaiting = false
    
   } 

   },2000)
  }
  
}
nope.addEventListener('click',activataNope);