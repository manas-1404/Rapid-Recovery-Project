var pic_s;

function preload(){
  pic_s=loadImage("Stacking game Info.jpeg");
}

function setup() {
  createCanvas(960,720);
  background(52, 161, 235);
  
  //c
  home = createButton('back');
  home.position(960);
  home.position(910, 6);
  home.mousePressed(gotolink_act1); 

}

function draw() {
  background(255,0,0);
  image(pic_s,0,0);
}

function gotolink_act1(){
  window.open("https://editor.p5js.org/kgong12/full/vx6mXN2r3");
}
