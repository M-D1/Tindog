// Here a class for the DOGS
class Dogs {
 constructor(data){
  Object.assign(this,data);
 }
 getDogHtml(){
  return`
  <div>
    <img class="${this.name}" src="${this.avatar}">
    <p class="name">${this.name}</p>
    <p class="bio">${this.bio}</p>
  </div>
  `
 }

}


export default Dogs

