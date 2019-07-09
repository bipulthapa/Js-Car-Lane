const PLAYER_BOTTOM_MARGIN = 10;

      


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
        // ctx.fillRect(getLaneX(this.carLane),this.y,this.width,this.height);
        if(this.isPlayer) {
            ctx.drawImage(IMG_PLAYER, getLaneX(this.carLane),this.y);
        }else {
            ctx.drawImage(IMG_ENEMY, getLaneX(this.carLane),this.y);
        }
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