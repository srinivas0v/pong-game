function initialize(){
       paddle = document.getElementById('paddle');    
  var ball = document.getElementById("ball"); 
  var court = document.getElementById("court");
  var rect = court.getBoundingClientRect();
   msg = document.getElementById('messages');
   strike = document.getElementById('strikes');
   max = document.getElementById('score');
   m = 0;
   s = 0;
  dt = 1;
  vx = 1;
  vy = 1;
  x = ball.offsetLeft;
  y = ball.offsetTop;
  width = rect.width;
  height = rect.height;
  left = rect.left;
  tnn = court.offsetTop;
  right = rect.right;
  bottom = rect.bottom;
  wi = right - left;
ht = bottom - tnn;

}

function startGame(){  
  msg.innerHTML = '';
    paddle.onmousemove = movePaddle;
  var id = setInterval(frame, 5);
  
  function frame() {
       x = x+vx*dt;
       y = y+vy*dt;
       var tmp = parseInt(paddle.style.top, 10);
             a = tmp - 96;
              b = a + 120;
        var l = parseInt(paddle.style.left,10)+ 4;
          //bouncing logic
  	if( x<left)  {
            vx = -vx;
        }
        else if(x>= l && y>a && y<b){
            
             vx = -vx;
           s = s+1;
           strike.innerHTML = s;
        }
         else if(x>=l){
             x =8;
             y =200;
             if(s>m){
                 m = s;
                 max.innerHTML = m;
             }
             s = 0;
             strike.innerHTML = s;
             msg.innerHTML = 'You Lost';
             clearInterval(id);
            }
        
        
        if( y>405){
            vy = -vy;
        }
        else if(y<-85){
            vy = -vy;
        }
        
       ball.style.top = y + 'px'; 
        ball.style.left = x + 'px';
    
    
   }
}
    
    

function setSpeed(a){
    dt = a;
    
}

function resetGame(){
    s = 0;
    m = 0;
    x =8;
    y =350; 
        //Math.random() * (max - min) + min;
    
    strike.innerHTML = s;
    max.innerHTML = m;
    
    
}


function movePaddle(e){
       
   var y = (e.clientY - (court.offsetTop - document.documentElement.scrollTop));
   if(y > (court.offsetHeight - paddle.offsetHeight)){
      y = (court.offsetHeight - paddle.offsetHeight);
   }
	else if (y <0)
	{
		y = 0;
	}
	paddle.style.top = y + 'px';  
    
}



