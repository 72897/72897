let c=document.getElementById("c"),x=c.getContext("2d");
let px=10,py=10,ax=15,ay=15,dx=1,dy=0,trail=[],len=5;
setInterval(()=>{
 px+=dx;py+=dy;
 if(px<0)px=19;if(px>19)px=0;if(py<0)py=19;if(py>19)py=0;
 x.fillStyle="#111";x.fillRect(0,0,400,400);
 x.fillStyle="#0f0";
 for(let t of trail)x.fillRect(t.x*20,t.y*20,18,18);
 trail.push({x:px,y:py});
 while(trail.length>len)trail.shift();
 if(ax==px&&ay==py){len++;ax=Math.floor(Math.random()*20);ay=Math.floor(Math.random()*20);}
 x.fillStyle="#0ff";x.fillRect(ax*20,ay*20,18,18);
},100);
document.addEventListener("keydown",e=>{
 if(e.key=="ArrowUp")dy=-1,dx=0;
 if(e.key=="ArrowDown")dy=1,dx=0;
 if(e.key=="ArrowLeft")dx=-1,dy=0;
 if(e.key=="ArrowRight")dx=1,dy=0;
});