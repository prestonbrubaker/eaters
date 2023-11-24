var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
var isFullscreen = false;

var pCXW = 1000;      // count of pixels across the world
var pCYW = 800;       // count of pixels across the world
var itC = 0;
const tickS = 50;
var pixS = 10;
var pixS_OG = pixS;
const minW = 0;
const minH = 0;
var maxW = c.width;   
var maxH = c.height;

var maxW_OG = maxW;
var maxH_OG = maxH;
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
    pixS = maxH / maxH_OG * pixS_OG;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
document.addEventListener('fullscreenchange', function() {
    isFullscreen = !!document.fullscreenElement;
    resizeCanvas();
});

// Fullscreen Button Action
document.getElementById("fullscreen").addEventListener("click", function() {
    var fullscreenButton = document.getElementById("fullscreen");
    if (fullscreenButton) {
        fullscreenButton.addEventListener("click", function() {
        var canvas = document.getElementById("canvas1");
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) { /* Firefox */
            canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) { /* IE/Edge */
            canvas.msRequestFullscreen();
        }
        });
    };
});

var pA = new Array(pCY);

var cloneA = new Array(pCY);


function initialize(){
    for (var y = 0; y < pCY ; y++){
        temp_x = new Array(pCX);
        for (var x = 0; x < pCX; x++){
            temp_x[x] = Math.random();
        }
        pA[y] = temp_x;
        cloneA[y] = temp_x;
    }
}

function tick() {
    // Clear and fill background
    ctx.clearRect(minW, minH, maxW, maxH);
    ctx.fillStyle = bgHue;
    ctx.fillRect(minW, minH, maxW, maxH);
  
    // Draw screen
    ctx.fillStyle = "#666666";
    for( var y = 0; y < pCY; y++){
        for (var x = 0; x < pCX; x++){
            ctx.fillStyle = "hsl(" + pA[y][x] * 360 + ", 100%, 50%)"; // Blue color
            ctx.fillRect(x * pixS, y * pixS, pixS, pixS)
        }
    }


    // Write troubleshooting info
    ctx.fillStyle = "#000000";
    ctx.fillText("X-Value of Player: " + 0, 10, 10);

    itC++;
}

// Initialize

initialize();



setInterval(tick, tickS);
