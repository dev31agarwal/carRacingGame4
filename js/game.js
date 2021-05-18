class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value", 
        function(data){
            gameState=data.val();
        })
    }

    updateState(x){
        database.ref('/').update({
            gameState:x,
        })
    }

    start(){
        player= new Player();
        player.getCount();
        form=new Form();
        form.display();
        car0= createSprite(200, 400);
        car0.addImage(carImage1);
        car1= createSprite(400, 400);
        car1.addImage(carImage2);
        car2= createSprite(600, 400);
        car2.addImage(carImage3);
        car3= createSprite(800, 400);
        car3.addImage(carImage4);
        cars=[car0,car1,car2,car3]
    }

    play(){
        form.greeting1.hide();
        form.greeting2.hide();
        player.getPlayerInfo();
        background("white");
        image(trackImage, 0, -displayHeight*4, width, displayHeight*5);

        
        if(allPlayers!==undefined){
            var index=0;
            var x= 0;
            var y =0;
            if(keyIsDown(UP_ARROW)){
                player.distance=player.distance+10;
                player.update();
            }
            var yPos=height/2
            for(var plr in allPlayers){
            index= index+1;
            x= x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
                if(plr==="player"+player.index){
                    fill("red");
                    ellipse(x, y, 60, 60);
                
                }

                else{
                    fill("black");
                }
                text(allPlayers[plr].name, width/2, yPos=yPos+20);
            }
        }

        drawSprites();
    }
}