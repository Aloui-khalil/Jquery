
var text=document.getElementById("texto")
function boldFunction(){
   if (text.style.fontWeight=="bold") {
    text.style.fontWeight="normal"
   }
   else{
    text.style.fontWeight="bold"
   }
}

function ItalicFunction(){
    if(text.style.fontStyle=="italic"){ 
   text.style.fontStyle="normal"}
   else{
    text.style.fontStyle="italic"
   }
}

function UnderlineFunction(){
  if(text.style.textDecoration=="underline"){
   text.style.textDecoration="none"}
 else{
    text.style.textDecoration="underline"
 }
}
 
function changeSize(){
    text.style.fontSize=document.getElementById("size").value
}
function changeFont(){
    text.style.fontFamily=document.getElementById("font").value
}


