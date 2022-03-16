// html element (ui)
const dropbox = document.getElementById("dropbox"),
input = document.getElementById("inputFile"),
fileName = document.getElementById("fileName"),
fileEx = document.getElementById("fileEx"),
fileSave = document.getElementById("fileSave");
// saved format
var file, reader, type, titlename, typefile;
// file naming
type =".txt";
titlename = "untitled" + type;
fileEx.addEventListener("change", ()=>{
    type = fileEx.value;
    if(fileName.value == ''){
        titlename = "untitled" + type;
    } else {
        titlename = fileName.value + type;
    }
})
fileName.addEventListener("change", ()=>{
    titlename = fileName.value + type;
})
document.querySelectorAll("input[name=\"choose\"]").forEach(el=>{
    el.addEventListener("change", ()=>{
        localStorage.setItem("choose", document.querySelector("input[name=\"choose\"]:checked").id)
    })
})
function saveFile(){
    // check first
    var inputRadio = document.querySelector("input[name=\"choose\"]:checked");
    if(!inputRadio && localStorage.getItem("choose")){
        document.getElementById(localStorage.getItem("choose")).checked = true;
    } else if(inputRadio && !localStorage.getItem("choose")){
        localStorage.setItem("choose", inputRadio.id)
    } else  if(!inputRadio && !localStorage.getItem("choose")){
        document.querySelector("#no").checked = true;
        localStorage.setItem("choose", "no")
    }
    if(inputRadio.id == "no"){
        allvalue =  document.querySelector("div[contenteditable=\"true\"]").innerText;
        var files = new File([allvalue], titlename, {type: "text/plain;charset=utf-8"});
        saveAs(files);
    } else if(inputRadio.id == "yes"){
        allvalue =  document.querySelector("div[contenteditable=\"true\"]").innerHTML;
        var files = new File([allvalue], titlename, {type: "text/plain;charset=utf-8"});
        saveAs(files);
    }
    
}
fileSave.addEventListener("click", ()=>{
    saveFile();
})
// retrieving data
reader = new FileReader();
input.addEventListener("change", (e)=>{
    file = input.files[input.files.length-1];
    reader.onload= ()=>{
        var inputRadio = document.querySelector("input[name=\"choose\"]:checked");
        if(inputRadio.id == "no"){
            document.querySelector("div[contenteditable=\"true\"]").innerText = reader.result;
        } else if(inputRadio.id == "yes"){
            document.querySelector("div[contenteditable=\"true\"]").innerHTML = reader.result;
        }
    }
    reader.readAsText(file);    
})
dropbox.addEventListener("dragover", (e)=>{
    // add a :hover class here
    e.preventDefault();
})
dropbox.addEventListener("dragleave", ()=>{
    // add a :hover-remove class here
    // dropbox.classList.remove("animate__animated")
    // dropbox.classList.remove("animate__shakeY")
})
dropbox.addEventListener("drop", (e)=>{
    e.preventDefault();
    file = e.dataTransfer.files[0]
    // read files when dropped
    reader = new FileReader();
    reader.onload= ()=>{
        var inputRadio = document.querySelector("input[name=\"choose\"]:checked");
        if(inputRadio.id == "no"){
            document.querySelector("div[contenteditable=\"true\"]").innerText = reader.result;
        } else if(inputRadio.id == "yes"){
            document.querySelector("div[contenteditable=\"true\"]").innerHTML = reader.result;
        }
    }
    reader.readAsText(file);
})