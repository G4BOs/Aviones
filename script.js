//==========Coordenadas de Aviones=========

//PLAYER
var player={
    left:650,
    top:590,
}

//ENEMIES
var enemies=[
{left:360,top:30},
{left:460,top:20},
{left:560,top:80},
{left:660,top:40},
{left:760,top:50}
]

//===================Misiles===================
var misiles=[];


//==============Dibujar Naves====================

//PLAYER
function drawPlayer(){
    content="<div class='player' style='left:"+player.left+"px ;top:"+player.top+"px'></div>"
    document.getElementById('players').innerHTML=content
}
drawPlayer()

//ENEMIES
function drawEnemies(){
    content="";
    for(let i=0;i<enemies.length;i++){
        content+="<div class='enemy' style='left:"+enemies[i].left+"px ;top:"+enemies[i].top+"px'></div>"; }
    document.getElementById('enemies').innerHTML=content
}

//=============Dibujar Misiles==================

function drawMissiles(){
    content="";
    for(let i=0;i<misiles.length;i++){
        content+="<div class='misil' style='left:"+misiles[i].left+"px;top:"+misiles[i].top+"px'></div>"
    }
    document.getElementById('misiles').innerHTML=content
}


//==============Mover a los Enemigos==============

function moveEnemies(){
    for(let i=0;i<enemies.length;i++){
        if(enemies[i].top<590){enemies[i].top=enemies[i].top+5;
        }
    }
}
//==============Mover Misiles====================

function moveMissiles(){
    for(let i=0;i<misiles.length;i++){
        misiles[i].top=misiles[i].top-10;
    }
    drawMissiles()
}

//==============Mover al Player===================
document.onkeydown=function(e){
    //Izquierda
    if(e.keyCode==37&&player.left>0){player.left-=10}

    //Derecha
    if(e.keyCode==39&&player.left<1200){player.left+=10}
    
    //Arriba
    if(e.keyCode==38&&player.top>400){
        player.top-=10
    }

    //Abajo
    if(e.keyCode==40&&player.top<590){
        player.top+=10
    }

    //Disparar Misil
    if(e.keyCode==32){
        misiles.push({left: player.left+25, top: player.top })
    }
    drawMissiles()
    drawPlayer()
}

//===========Game Loop================================
function gameLoop(){
    moveEnemies();
    drawEnemies();
    moveMissiles();
    setTimeout(gameLoop,30)
}
gameLoop()