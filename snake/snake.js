/*var snake = document.getElementById('move');
var food =  document.getElementById('foodId');
var score = document.getElementById('scoreId');
var refreshIntervalId;*/

var foodx=50,foody=50,x=10,y=10;
var rid,lid,uid,did;
var snake_parts=new Array();
snake.style.position = "relative";
snake_parts.push({"x":1,"y":3});
food.style.left=foodx+'px';
food.style.top=foody+'px';
//snake_parts.push({"x":1,"y":2});
//snake_parts.push({"x":1,"y":1});
posx=0;
posy=0;
function createFood()
{
   foodx= Math.floor(Math.random() * (350)) + 1;
   foody= Math.floor(Math.random() * (350)) + 1;
   food.style.left=foodx+'px';
food.style.top=foody+'px';
}

function paint()
{
    
    
     posx = snake_parts[0].x;
     posy = snake_parts[0].y;

       for (var i = 0; i < snake_parts.length; i++) {
        var node = document.createElement("div");
      node.setAttribute("class","dot");
      node.setAttribute("id","dot"+i);
    
        node.setAttribute("style",'left:'+snake_parts[i].y*10+'px;top:'+snake_parts[i].x*10+'px;');	
        document.getElementById("snake").appendChild(node);   
}
      
}

function right() {
    clearInterval(lid);
    clearInterval(uid);
    clearInterval(did);
    //document.getElementById('left').disabled=true;
    //alert("hello");
    var elem = document.getElementById("snake");   
    //var pos = 0;
     rid = setInterval(frame, 20);
    function frame() {
      if (posx == 350) {
        clearInterval(rid);
      } else {
        posx++; 
        //elem.style.top = pos + 'px'; 
        elem.style.left = posx + 'px'; 
        
        if(Math.abs(foodx-posx)<10&&Math.abs(foody-posy<10))
        {
            createFood();
            console.log("right");
      }
    }
    //document.getElementById('left').disabled=false;
  }
}
  function up() {
    clearInterval(rid);
    clearInterval(lid);
    clearInterval(did);
    //document.getElementById('down').disabled=true;
    var elem = document.getElementById("snake");   
    //var pos = 0;
    uid = setInterval(frame, 20);
    function frame() {
      if (posy == 10) {
        clearInterval(uid);
      } else {
        posy--; 
        //elem.style.top = pos + 'px'; 
        elem.style.top = posy + 'px'; 
        if(Math.abs(foodx-posx)<10&&Math.abs(foody-posy<10))
        {
        createFood();
        console.log("up");
        }
      }
    }
   // document.getElementById('down').disabled=false;
  }
  function down() {
    clearInterval(rid);
    clearInterval(uid);
    clearInterval(lid);
   // document.getElementById('up').disabled=true;
    var elem = document.getElementById("snake");   
    //var pos = 0;
   did = setInterval(frame, 20);
    function frame() {
      if (posy == 350) {
        clearInterval(did);
      } else {
        posy++; 
        //elem.style.top = pos + 'px'; 
        elem.style.top = posy + 'px'; 
        if(Math.abs(foodx-posx)<10&&Math.abs(foody-posy<10))
        {
        createFood();
        console.log("down");
        }

      }
    }
    //document.getElementById('up').disabled=false;
  }
  function left() {
    clearInterval(rid);
    clearInterval(uid);
    clearInterval(did);
   // document.getElementById('right').disabled=true;
    var elem = document.getElementById("snake");   
    //var pos = 0;
     lid = setInterval(frame, 20);
    function frame() {
      if (posx == 10) {
        clearInterval(lid);
      } else {
        posx--; 
        //elem.style.top = pos + 'px'; 
        elem.style.left = posx + 'px'; 
        if(Math.abs(foodx-posx)<10&&Math.abs(foody-posy<10))
        {
        createFood();
        console.log("left");
        }
      }
    }
   // document.getElementById('right').disabled=false;
  }

   /* //Lets paint the food
    paint_cell(food.x, food.y, "red");
    //Lets paint the score
    var score_text = "Score: " + score;
 var level_text = "Level: " + level;
    ctx.fillText(score_text, 5, h-5);
 ctx.fillText(level_text, 60, h-5);*/


//Lets first create a generic function to paint cells





