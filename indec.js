const bodyEl=document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
const x=event.offsetX;
const y=event.offsetY;
const spanEl=document.createElement("span");
bodyEl.append(spanEl);
spanEl.style.left=x+"px";
spanEl.style.top=y+"px";
const size=Math.floor(Math.random()*60);
spanEl.style.width=size+"px";
spanEl.style.height=size+"px";
spanEl.style.backgroundColor="#"+randomColor();


setTimeout(()=>{

  spanEl.remove();
},4000);

})


function randomColor(){
    const colorS="0123456789abcdef";
    const colorlength=6;

    let color=""
 for (let index = 0; index < colorlength ; index++) {
    
    let randomNumber= Math.floor(Math.random(colorS)*colorS.length);
    color+=colorS.substring(randomNumber,randomNumber+1);
    
} 


return color;
}