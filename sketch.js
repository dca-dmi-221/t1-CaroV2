let fondo;
let akirasong;
let s60311;
let behind;
let chessy;
let devilmanUta;
let judgement;
let mikisong;
let night;
let smells;
let possession;

function setup() {
  fondo = loadImage('images/fondo.png');
  createCanvas(1350, 600);

  akirasong = loadImage('images/Akirasong.png');
  s60311 = loadImage('images/60311.png');
  behind = loadImage('images/behind.png');
  chessy = loadImage('images/Chessy.png');
  devilmanUta = loadImage('images/Devilman No Uta.png');
  judgement = loadImage('images/judgement.png');
  mikisong = loadImage('images/Mikisong.png');
  night = loadImage('images/night.png');
  smells = loadImage('images/smells.png');
  possession = loadImage('images/possession.png');
}

function draw() {
  background(fondo);

  image(akirasong, 191.47, 187.58);
  image(s60311, 191.47, 468.35);
  image(behind, 191.47, 374.76);
  image(chessy, 469.6, 187.58);
  image(devilmanUta, 191.47, 93.99);
  image(judgement, 469.6, 374.76);
  image(mikisong, 469.6, 93.99);
  image(night, 191.47, 281.17);
  image(smells, 469.6, 468.35);
  image(possession, 469.6, 281.17);
}
