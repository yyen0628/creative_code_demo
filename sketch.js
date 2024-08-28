function setup() {
    createCanvas(1000, 600);
    background(0);
}

function draw() {
    
}

function mouseMoved() {
    ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
    let r = random(100, 255);
    let g = random(0, 150);
    let b = random(50, 200);
    ellipse(mouseX, mouseY, 20, 20);
    fill(r, g, b);
    console.log(r);
}