class Game{
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new Form();
            form.display();
        }
        person1 = createSprite(100,200);
        person2 = createSprite(300,200);
        person3 = createSprite(500,200);
        person4 = createSprite(700,200);
        persons = [person1, person2, person3, person4];
    }

    play(){
        form.hide();
        textSize(30)
        text("Game Start",120,100)
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
           // var display_position = 130
            var index = 0, x = 0, y = 0;
            for(var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance
                persons[index-1].x = x;
                persons[index-1].y = y;
                if(index === player.index){
                persons[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2
                camera.position.y = persons[index-1].y
                //else 
                //fill("black")
               // display_position += 20
                //textSize(15);
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
            }
        }
    }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50
            player.update();
        }
        drawSprites();
    }
} 