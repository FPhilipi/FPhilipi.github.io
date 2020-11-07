window.onload = function() {

let textInPut = document.querySelector("#text-input");
textInPut.addEventListener("keyup", function(){
    let textOutPut = document.querySelector("#meme-text");
    textOutPut.innerHTML = textInPut.value;    
})
    
let imageInPut = document.querySelector("#meme-insert");

imageInPut.addEventListener("change", function(event) {
    
    document.getElementById("meme-image").src = URL.createObjectURL(event.target.files[0]);
    // let imageOutPut = document.getElementById("meme-image");
    // imageOutPut.src = URL.createObjectURL(event.target.files[0]);
})

const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const memeImageContainer = document.getElementById('meme-image-container');

function fire() {
  memeImageContainer.style.border = 'dashed 3px red';
}
buttonFire.addEventListener('click', fire);

function water() {
  memeImageContainer.style.border = 'double 5px blue';
}
buttonWater.addEventListener('click', water);

function earth() {
  memeImageContainer.style.border = 'groove 6px green';
}
buttonEarth.addEventListener('click', earth);

function getElementImage() {
  const elementImage = document.getElementById('meme-image');
  return elementImage;
}

const elementPresetsContainer = document.getElementById('meme-1');

elementPresetsContainer.addEventListener('click', function (event) {
  const presetImage = event.target;
  const image = getElementImage();
  image.src = presetImage.src;
});

}