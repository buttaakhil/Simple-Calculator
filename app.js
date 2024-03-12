let btns=document.querySelectorAll("button");
let inp=document.querySelector("input");

for(let i=0;i<btns.length;i++){
  btns[i].addEventListener("click",()=>{
    try{
      if(btns[i].innerText=="CE"){
        inp.value="";
      }
      else if(btns[i].innerText=="C"){
        inp.value=(inp.value.slice(0,inp.value.length-1));
      }
      else if(btns[i].innerText=="="){
        inp.value=eval(inp.value);
      }
      else{
        inp.value+=btns[i].innerText;
      }
    }
    catch{
      inp.value="INVALID INPUT";
    }
  })
}