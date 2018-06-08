var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
var i;
for ( i=0;i<15;i++){
  ctx.beginPath()
  ctx.moveTo(40*i,0);
  ctx.lineTo(40*i,600);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,40*i);
  ctx.lineTo(600,40*i);
  ctx.stroke();
  
}

ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(200, 200, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 400, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(400, 200, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(400, 400, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

function swing(event){
    var x = event.offsetX;
    var y = event.offsetY;
    var x0= Math.floor((event.offsetX)/40)*40;
    var y0=Math.floor((event.offsetY)/40)*40;
    var location=(x,y);
    //coordinent of ball - coord of pen =
    //var force = 
    var movex=0;
    var movey=0;
    var move=.003;
    var counter= 0
     var disRed= Math.sqrt(Math.pow(.1*(200-x),2)+Math.pow(.1*(200-y),2));
      var disYellow= Math.sqrt(Math.pow(.1*(400-x,2))+Math.pow(.1*(200-y),2));
      var disBlue= Math.sqrt(Math.pow(.1*(200-x),2)+Math.pow(.1*(400-y),2));
      var disGreen= Math.sqrt(Math.pow(.1*(400-x),2)+Math.pow(.1*(400-y),2));
      var disCenter = Math.sqrt(Math.pow(300-x,2)+Math.pow(300-y,2));
      var forcex= .01 //9.8*Math.sqrt(Math.abs(Math.pow(Math.cos(disCenter*2*Math.PI/300),2)-Math.pow(Math.cos(Math.abs(300-y)*2*Math.PI/300),2)));
      console.log(forcex);
    while((-1<disRed<1 || -5<forcex<5) && (disBlue >1 || -5<forcex<5) && (disGreen>1 || -5<forcex<5) && (disYellow > 1 || -5<forcex<5) && counter<10000){
      if (x==200){
        if (movex >0){
          x=200.001
        }
        else {if (movex <0){
          x=199.99
        }}
      }
      if (y==200){
        if (movey>0){
        y=200.01
        }
        else {if (movey<0){
          y=199.9
        }}
      }
      if (x==400){
        if (movex>0){
        x=400.01
        }
        else {if (movex<0){
          x=399.9
        }}
      }
      if (y==400){
        if (movey>0){
        y=400.01
        }
        else {if (movey<0){
          y=399.9
        }}
      }
      var disRed= Math.sqrt(.3*Math.pow(200-x,2)+.3*Math.pow(200-y,2));
      var disYellow= Math.sqrt(.3*Math.pow(400-x,2)+.3*Math.pow(200-y,2));
      var disBlue= Math.sqrt(.3*Math.pow(200-x,2)+.3*Math.pow(400-y,2));
      var disGreen= Math.sqrt(.3*Math.pow(400-x,2)+.3*Math.pow(400-y,2));
      var disCenter = Math.sqrt(.3*Math.pow(300-x,2)+.3*Math.pow(300-y,2));

      forcex= .005*(300-x)/Math.pow(Math.pow(disCenter,2)+16,.5) + (200-x)/(Math.pow(disRed,3))+(400-x)/(Math.pow(disYellow,3))+(200-x)/(Math.pow(disBlue,3))+(400-x)/(Math.pow(disGreen,3));
      

      
      counter++;
      forcey= .005*(300-y)/Math.pow(Math.pow(disCenter,2)+16,.5)+(200-y)/(Math.pow(disRed,3))+(200-y)/(Math.pow(disYellow,3))+(400-y)/(Math.pow(disBlue,3)) +(400-y)/(Math.pow(disGreen,3));
      if (forcex>10){
        forcex=10;
      }
      if (forcey>10){
        forcey=10;
      }
      console.log(String(disRed)+ "movey" );
      movex+= forcex;
      movey+= forcey;
      if (movex>3){
        movex=0
      }
      if (movex<-3){
        movex=0
      }
      if (movey>3){
        movey=3
      }
      if (movey<-3){
        movey=0
      }
      move=Math.sqrt(Math.pow(movex,2)+Math.pow(movey,2));
//      ctx.beginPath;
      ctx.beginPath();
      ctx.moveTo(x,y);
      //console.log(String(x)+ "xi" );
      //console.log(String(y)+ "yi" );
      x+=movex;
      y+=movey;      
      ctx.lineTo(x,y);
      ctx.stroke();
      if (Math.abs(forcex+movex)>50||Math.abs(forcey+movex)>50){

      counter+=200}
      if (Math.abs(Math.abs(200-x)-Math.abs(movex)<3)||Math.abs((Math.abs(400-x)-Math.abs(movex))<3)||Math.abs((Math.abs(400-y)-Math.abs(movey))<3)||Math.abs((Math.abs(200-y)-Math.abs(movey))<3)){
        if (disRed<3){
          counter+=10000;
          x=200;
          y=200;
        }
        if (disYellow<3){
          counter+=10000
          x=400;
          y=200;
        }
        if (disBlue<3){
          counter+=10000
          x=200;
          y=400;
        }
        if (disGreen<3){
          counter+=10000
          x=400;
          y=400;
        }
      }


    }
ctx.beginPath();
if (x==200&&y==200){
  ctx.fillStyle = "red";
}
if (x==400&&y==200){
  ctx.fillStyle = "yellow";
}
if (x==200&&y==400){
  ctx.fillStyle = "blue";
}
if (x==400&&y==400){
  ctx.fillStyle = "green";
}
ctx.fillRect(x0,y0,40,40);
ctx.fill();
ctx.stroke();
      


}
