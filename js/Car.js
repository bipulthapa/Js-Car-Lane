const PLAYER_BOTTOM_MARGIN = 10;

const img = new Image();
img.src = '../images/carRed.png';
      


class Car{
    constructor(player){
        this.y = 0;
        this.height = 80;
        this.width = 70;
        this.speed = gameSpeed;
        this.carLane;
        this.isPlayer = player;

        if (!this.isPlayer){
            this.carLane = getRandomLane(1,4);
            this.y = -this.height;
        }else{
            this.carLane = DEFAULT_PLAYER_CARLANE;
            this.y = HEIGHT - this.height - PLAYER_BOTTOM_MARGIN;
        }
    }

    drawCar = () => {
        ctx.fillRect(getLaneX(this.carLane),this.y,this.width,this.height);
        // ctx.drawImage(img.src,getLaneX(this.carLane),this.y,this.width,this.height)
        // img.addEventListener('load', function() {
        // ctx.drawImage(img.src,getLaneX(this.carLane),this.y,this.width,this.height)
        // }, false); 
    }

    increaseYValue = () => {
        this.y += this.speed;
    }

    increaseSpeed = () => {
        this.speed += 0.5;
    }
}