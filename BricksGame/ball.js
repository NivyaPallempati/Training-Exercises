var bradius=20,dx=5,dy=-5,ballx=50,bally=50,mouseX=5,mouseY=5,lpad=300,lpady=5,id,todraw=1,j=0;
var pad=document.getElementById('mpad');
var score=0;
var brick=document.getElementsByClassName("bricks");
var brick2=document.getElementsByClassName("layer2");
//scoreid=document.getElementById("points");
//to draw and color bricks
if(todraw===1)
 {
  for(var i=0;i<brick.length;i++)
    {
        brick[i].style.left=i*100+'px';
        brick[i].style.top=0+'px';
        if(i%2==0)
        brick[i].style.backgroundColor="red";
    }
    for(var i=0;i<brick2.length;i++)
    {
        j++;
        brick2[i].style.left=j*100+'px';
        brick2[i].style.top=35+'px';
        if(i%2==0)
        brick2[i].style.backgroundColor="red";
        todraw=0;
    }}
/*var Brick = function(){
    this.size = {
      height: 30,
      width: 100
    };
    this.color={aqua};
    this.position = {
        x: 0,
        y: 0
      };
    };
   */ 
 
function draw()
{
      id=setInterval(drawball,50);
}
function drawball()
{
    ball.style.left=ballx+'px';
    ball.style.top=bally+'px';
    if((ballx+dx)  > (490-bradius) ||((ballx + dx) < bradius)) {
        dx = -dx;
    }
    if(bally + dy < 60)
     for(var x=0;x<brick2.length;x++)
        {
         if(((parseInt(brick2[x].style.left)-ballx))<30)
         { 
             if(brick2[x].style.display!="none")
             score++;
             document.getElementById('points').innerText=score;
             brick2[x].style.display="none"; 
         }
     } 
    //ball to get bounced when touches bricks
    if(bally + dy < 30) {
        for(var k=0;k<brick.length;k++)
       {
        console.log(parseInt(brick[k].style.left)-ballx);
        if(((parseInt(brick[k].style.left)-ballx))<30)
        { 
            if(brick[k].style.display!="none")
            score++;
            document.getElementById('points').innerText="Score:"+score;
        brick[k].style.display="none"; 
        console.log("score"+score+"k"+k);
        }
    }
        dy = -dy;
    }
    //ball to get bounced when touches paddle
    else if((bally+dy)>(460-bradius))
    {
        if(((ballx+'px')>lpad) && ((ballx+'px')<((parseInt(lpad)+100)+'px'))){
           dy=-dy;
        }
        else
        {
            alert("game over");
            clearInterval(id);
        }
    }
    ballx+=dx;
    bally+=dy;
    ball.style.left=ballx+'px';
    ball.style.top=bally+'px';
//to move the paddle along with mouse
}
function movePad(e)
{
   mouseX=e.clientX;
   mouseY=e.clientY;
   if(mouseX<450&&mouseX>50)
   {
       pad.style.left=mouseX-50+'px';
       lpad=pad.style.left;
   }
}

