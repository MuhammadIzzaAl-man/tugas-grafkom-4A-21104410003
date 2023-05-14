function setup() {
    createCanvas(800, 420);
  }
   
  function draw() {
    background('#ffffff');
   
    strokeWeight(1);
   
    // Objek Coklat
    fill('#845542');
    square(10,10,230);
   
    // Objek Ungu
    fill(58, 18, 94);
    triangle(260,10,260,240,490,125);
    fill(58,18,94,100);
    circle(375,125,230);
   
    // Objek Pelangi
    noStroke();
      // Merah
      fill('#d41a13');
      rect(10,260,480,20);
      // Jingga
      fill('#eb6222');
      rect(10,280,480,20);
      // Kuning
      fill('#fff000');
      rect(10,300,480,20);
      // Hijau
      fill('#0ea21f');
      rect(10,320,480,20);
      // Biru
      fill('#0f1cff');
      rect(10,340,480,20);
      // Nila
      fill('#490083');
      rect(10,360,480,20);
      // Ungu
      fill('#9400d3');
      rect(10,380,480,20);
   
    // Objek Abu Abu
    strokeWeight(4);
    stroke('#000000');
    fill('#aaaaaa');
    ellipse(650,210,280,400);
  }