var bold = document.getElementById("bold"),
italic = document.getElementById("italic"),
underline = document.getElementById("underline"),
fontcolor = document.getElementById("color");

// getting selected text
underline.addEventListener("click", ()=>{
    document.execCommand('underline')
})
bold.addEventListener("click", ()=>{
    document.execCommand('bold')
})
italic.addEventListener("click", ()=>{
    document.execCommand('italic')
})
fontcolor.addEventListener("change", ()=>{
    document.execCommand("forecolor",false, fontcolor.value)
})

// ---------------------------- font size --------------------------
var up=document.getElementById("up"), 
number=document.getElementById("number"), 
down=document.getElementById("down");
var counter = 17;
number.innerHTML = counter;
document.querySelector("div[contenteditable=\"true\"]").style.fontSize = counter+"px";

up.addEventListener("click", ()=>{
    counter+=1;
    number.innerHTML = counter;
    document.querySelector("div[contenteditable=\"true\"]").style.fontSize = counter+"px";
    document.execCommand("fontSize", counter)
})

down.addEventListener("click", ()=>{
    counter-=1;
    number.innerHTML = counter;
    document.querySelector("div[contenteditable=\"true\"]").style.fontSize = counter+"px";
    document.execCommand("fontSize", counter)
})