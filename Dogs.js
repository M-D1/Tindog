// Here a class for the DOGS
class Dogs {
 constructor(data){
  Object.assign(this,data);
 }
 getDogHtml(){
  const {name, avatar, bio} = this
  return`
  <div>
    <img class="${name}" src="${avatar}">
    <p class="name">${name}</p>
    <p class="bio">${bio}</p>
  </div>
  `
 }

}


export default Dogs

