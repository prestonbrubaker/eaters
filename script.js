var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
var isFullscreen = false;

var pCXW = 1000;      // count of pixels across the world
var pCYW = 800;       // count of pixels across the world
var itC = 0;
const tickS = 50;
const pixS = 10;
const minW = 0;
const minH = 0;
var maxW = c.width;   
var maxH = c.height;   
const bgHue = "#777777";
var pCX = Math.floor(maxW / pixS);  // count of pixels across the screen
var pCY = Math.floor(maxH / pixS);  // count of pixels across the screen

function resizeCanvas() {
    if (isFullscreen) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    } else {
        c.width = window.innerWidth * 0.8;
        c.height = window.innerHeight * 0.8;
    }
    updateWorld();
}

function updateWorld() {
    maxW = c.width;
    maxH = c.height;
    pCX = Math.floor(maxW / pixS);
    pCY = Math.floor(maxH / pixS);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
document.addEventListener('fullscreenchange', function() {
    isFullscreen = !!document.fullscreenElement;
    resizeCanvas();
});



var pA = new Array(pCY);

var cloneA = new Array(pCY);


function tick() {
    // Clear and fill background
    ctx.clearRect(minW, minH, maxW, maxH);
    ctx.fillStyle = bgHue;
    ctx.fillRect(minW, minH, maxW, maxH);
  
    // Draw screen
    ctx.fillStyle = elHues[pA[y_index][x_index]];
    ctx.fillRect((x - offXP % 1) * pixS, (y - offYP % 1) * pixS, pixS, pixS);


    // Write troubleshooting info
    ctx.fillStyle = "#000000";
    ctx.fillText("X-Value of Player: " + x_coord, 10, 10);

    itC++;
}




setInterval(tick, tickS);
