var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3= createSprite5(500,580,200,30);
    block3.shapeColor = "Red";

    block4= createSprite(700,580,200,30);
    block4.shapeColor = "green";

  
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY=1;
    ball.velocityX=1;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        velocityX=0;
        velocityY=0;

        if(block2.isTouching(ball)){
            music.stop();

        }
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "Red";
        velocityX=0;
        velocityY=0;

        if(block3.isTouching(ball)){
            music.stop();

        ball.bounceOff(Red);
        }
    }


    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        velocityX=0;
        velocityY=0;

        if(block4.isTouching(ball)){
            music.stop();
        }
    }


    drawSprites();
}