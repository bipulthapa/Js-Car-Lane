var canvas = document.getElementById("canvas");

const WIDTH = 280;
const HEIGHT = 700;
const DIVIDER_WIDTH = 5;
const TRAIL_WIDTH = 25;
const TRAIL_GAP = 35;
const BOX_POINTS = 10;
const DEFAULT_PLAYER_CARLANE = 2;

// loading image.
const IMG_PLAYER = new Image();
IMG_PLAYER.src = './images/player.png';

const IMG_ENEMY = new Image();
IMG_ENEMY.src = './images/enemy.png';

var gameSpeed = 2;
var timeHold = 2000;

canvas.width = WIDTH;
canvas.height = HEIGHT;

var ctx = canvas.getContext("2d");  
var enemyArray = [];
var gameScore = 0;
var highScore = 0;

setInterval(function(){
    let obstacles = new Car(false);
    enemyArray.push(obstacles);
},timeHold);

ctx.beginPath();
var player = new Car(true);
ctx.fillStyle= "white";
player.drawCar();
// player.changeLane();
ctx.fill();
ctx.closePath();

    function draw(){
    var animation = requestAnimationFrame(draw);

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(WIDTH/3,0,DIVIDER_WIDTH,HEIGHT);
    // ctx.strokeStyle = "white";
    // ctx.setLineDash([DIVIDER_WIDTH,DIVIDER_GAP]);
    // ctx.lineWidth = 2;
    // ctx.moveTo(WIDTH/3,0);
    // ctx.lineTo(WIDTH/3,HEIGHT);
    // ctx.moveTo(WIDTH/3 * 2,0);
    // ctx.lineTo(WIDTH/3 * 2,HEIGHT);
    // ctx.lineDashOffset -= 2;
    ctx.fillRect(WIDTH*2/3,0,DIVIDER_WIDTH,HEIGHT);
    // ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.setLineDash([TRAIL_WIDTH,TRAIL_GAP]);
    ctx.lineWidth = 2;
    ctx.moveTo(WIDTH/6,0);
    ctx.lineTo(WIDTH/6,HEIGHT);
    ctx.moveTo(WIDTH/6 * 3,0);
    ctx.lineTo(WIDTH/6 * 3,HEIGHT);
    ctx.moveTo(WIDTH/6 * 5,0);
    ctx.lineTo(WIDTH/6 * 5,HEIGHT);
    ctx.lineDashOffset -= 2;
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    player.drawCar();
    ctx.closePath();


    window.onkeydown = (e) => {
        // console.log(player)
        if (e.keyCode == 37){
            // console.log(player);
            // console.log(player.carLane)
            if(player.carLane<=3 && player.carLane>1){
                player.carLane -= 1;
                player.drawCar();
            }
        }else if(e.keyCode == 39){
            if(player.carLane>=1 && player.carLane<3){
                // console.log("Right key pressed")
                player.carLane++;
                // console.log(player.carLane);
                player.drawCar();
            }
        }
    }
    // console.log(enemyArray.length)
    enemyArray.forEach(function(value,index){
        // console.log("Im here")
        ctx.beginPath();
        ctx.fillStyle = "red";
        value.drawCar();
        value.increaseYValue();
        ctx.fill();
        ctx.closePath();
        // value.y += 2;
    });


    enemyArray.forEach(function(value,index){
        // console.log(value,parent);
        if (value.y > (HEIGHT-PLAYER_BOTTOM_MARGIN)){
            enemyArray.splice(index,1);
            gameScore += BOX_POINTS;
        }
        if((value.carLane == player.carLane) && ((value.y+value.height) >= (HEIGHT-player.height-PLAYER_BOTTOM_MARGIN))){
            arr = enemyArray.splice(index,1);
            // console.log(arr);
            document.getElementById('wrapper').style.display = "block";  
            document.getElementById('canvas').style.display = "none";
            document.getElementById('title').innerText = "Game Over";
            document.getElementById('start').innerHTML = "Try Again";
            document.getElementById('start').getAttribute("onclick");


            // alert("Game Over");
            
            gameScore = 0;
            // ctx.fillText("Crashed")
            window.cancelAnimationFrame(animation);

            // draw();
        }
    })

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "20px Comic Sans MS"
    ctx.fillText("Game Score: "+gameScore,10,30);
    ctx.font = "16px Comic Sans MS";
    ctx.fillText("Highest Score: "+highScore,10,50);
    ctx.fill();
    ctx.closePath();

    //highest score
    if (gameScore > highScore){
        highScore = gameScore;
    }
}

// draw();

function startGame(){
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("canvas").style.display = "block";
    // setTimeout(function(){
    //     draw();
    // },5000);
    enemyArray = [];
    player.carLane = DEFAULT_PLAYER_CARLANE;
    draw();
}

// function retry(){
//     enemyArray = [];
//     draw();
// }

// ctx.moveTo(0,0);


