let button1=document.getElementById("button1");
let mode=document.getElementById("mode");
let main=document.getElementById("main");
let is_light=true;
function btn1(){
  if(is_light==true){
mode.textContent="This is Dark Mode";
mode.style.color="white";
button1.textContent="Light";
main.style.backgroundColor="black";
is_light=false;

  }
  else{
    mode.textContent="This is Light Mode";
    mode.style.color="black";
    button1.textContent="dark";
    main.style.backgroundColor="white"
    is_light=true;
  }
}