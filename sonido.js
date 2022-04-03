/*function preload() {
    babyplease = loadSound("assets/Baby_Please.mp3");
    tusbesos = loadSound("assets/Tus_besos.mp3");
    sognare = loadSound("assets/Sognare.mp3");
}*/

let s04;

function setup() {
    push();
    pop();
    s04.playMode("restart");
}

function preload() {
  s04 = loadSound("Devilman crybaby OST/04. Devilman No Uta.mp3");
}

function mouseClicked() {
    if ((mouseX >= 191.47) && (mouseX <= 459.99) && (mouseY >= 93.99) && (mouseY <= 178.37)) {
        s04.play();
        console.log("clic perra" + s04)
    }
  }