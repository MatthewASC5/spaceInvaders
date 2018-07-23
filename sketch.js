let shipx=250;
let bullets = [];
// x, y, direction
let enemies = [
    [150, 100, 1],
    [250, 100, 1],
    [350, 100, 1],
    [450, 100, 1],
];



function setup(){
createCanvas(600,600);
background(55);
}

function draw(){
    background(150);
    drawGame();
    nextStep();
}

function mousePressed(){
    const bulletslocation= [shipx+25, 500];
    bullets.push(bulletslocation);
}

function drawGame(){
    for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
        fill('#ffffff');
        rect(x, y, 5, 10);
        noFill();
    }
    for(let j=0; j<enemies.length; j++){
        let a = enemies[j][0];
        let b = enemies[j][1];
        let aSpeed = 2;
        fill('#ffffff');
       
        ellipse(a, b, 15, 15);
        noFill();

    }
    fill(45,0,0);
    rect(shipx,500,50,100);
    noFill();
}

function nextStep(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 1;
    }
    for(let j=0; j<enemies.length; j++){
        if(enemies[j][0] <= 25){
            enemies[j][2] = 1;
        }
        if(enemies[j][0] >= 575){
            enemies[j][2] = -1;
        }
        enemies[j][0] += enemies[j][2] * 1;
    }
    deleteCollisions();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW && shipx > 0){
    shipx -= 10;
    }else{
        shipx -= 0;
    }
    if(keyCode === RIGHT_ARROW && shipx+50 < 600){
        shipx += 10;
    }else{
        shipx += 0;
    }
}

function deleteCollisions(){
    for(let i = enemies.length-1; i>=0; i--){
        for(let j = 0; j<bullets.length; j++){
            let xx = Math.pow(enemies[i][0] - bullets[j][0], 2);
            let yy = Math.pow(enemies[i][1] - bullets[j][1], 2);
            let distance = Math.sqrt(xx + yy);
            if(distance <= 25){
                enemies.splice(i,1);
                break;
            }
        }
    }
}