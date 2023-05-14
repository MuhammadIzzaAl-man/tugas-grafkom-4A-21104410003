function setup() {
    createCanvas(200, 200);
  }
   
  function draw() {
    background(220);
    fill(255, 255, 0, 50);
   
    // Ukuran Garis
    strokeWeight(8);
   
    // Garis Hijau
    stroke(0, 255, 0);
    circle(100, 100, 50);
   
    // Garis Merah
    stroke(255, 0, 0);
    rect(0, 0, 100, 50);
   
    noFill();
   
    // Garis Biru
    stroke(0, 0, 255);
    ellipse(50, 70, 30, 30);
   
    // Tanpa Garis
    noStroke();
    fill(255, 255, 0);
    circle(20, 180, 50);
  }