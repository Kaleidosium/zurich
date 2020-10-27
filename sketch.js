const colors = [
  [222, 61, 131],
  [228, 189, 11],
  [0, 184, 184],
  [229, 231, 222],
  [61, 189, 93],
];
const tw = 200;
const th = 200;

function setup() {
  createCanvas(600, 600);
  noLoop();
  background(getFillColor());
}

function draw() {
  noStroke();
  for (let x = 0; x < width; x += tw) {
    for (let y = 0; y < height; y += th) {
      const randomTile = random(0, 1);
      const randomDraw = random(0, 1);
      if (randomTile > 0.5) {
        drawTriangles(x, y, randomDraw);
      } else if (randomTile <= 0.5) {
        drawCircles(x, y, tw, th, randomDraw);
      }
    }
  }
}

function drawCircles(x, y, w, h, side) {
  if (side < 0.25) {
    fill(getFillColor());
    arc(x + tw / 2, y + th / 2, w, h, HALF_PI - TWO_PI, HALF_PI - PI);
  } else if (side > 0.25 && side < 0.5) {
    fill(getFillColor());
    arc(x + tw / 2, y + th / 2, w, h, PI + HALF_PI, TWO_PI + HALF_PI);
  } else if (side > 0.5 && side < 0.75) {
    fill(getFillColor());
    arc(x + tw, y + th / 2, w, h, HALF_PI - TWO_PI, HALF_PI - PI);
  } else if (side > 0.75 && side <= 1) {
    fill(getFillColor());
    arc(x + tw, y + th / 2, w, h, PI - HALF_PI, TWO_PI - HALF_PI);
  }
}

function drawTriangles(x, y, direction) {
  // Direction > .5 draws line ul to lr
  // Direction < .5 draws line lr to ur

  // Define triangle points
  let ulx = x;
  let uly = y;
  let llx = x;
  let lly = y + th;
  let urx = x + tw;
  let ury = y;
  let lrx = x + tw;
  let lry = y + th;

  // Draw triangles by direction
  if (direction > 0.5) {
    fill(getFillColor());
    triangle(ulx, uly, llx, lly, urx, ury);
    fill(getFillColor());
    triangle(llx, lly, urx, ury, lrx, lry);
  } else if (direction <= 0.5) {
    fill(getFillColor());
    triangle(ulx, uly, llx, lly, lrx, lry);
    fill(getFillColor());
    triangle(ulx, uly, urx, ury, lrx, lry);
  }
}

function getFillColor() {
  const col = colors[parseInt(random(colors.length))];

  stroke(col);
  return col;
}
