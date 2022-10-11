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


// getting the the names of the dogs from the data.js file
// dog[0] = Teddy
//dog[1] = Bella
//dog[2] = Rex
const newDog = [dogs[0],dogs[1],dogs[2]];

function getNewDog(){
 const newDogData = newDog.shift()
 
 // here I am  checking if there is dogs left in the array. if that is true a new instance of Dogs is created and if there is no more dogs an emoty array is returned
 return newDogData ? new Dogs(newDogData) : [];
}

let newDogs = getNewDog()

//this function render the dogs on the screen

function render(){ 
 document.getElementById('dog')
 .innerHTML = newDogs.getDogHtml()
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
        la.style.opacity =
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