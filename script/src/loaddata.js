// html element (ui)
const dropbox = document.getElementById("dropbox"),
fileName = document.getElementById("fileName"),
fileEx = document.getElementById("fileEx"),
fileSave = document.getElementById("fileSave");
// saved format
var titlename, typefile;
// file naming
titlename = "untitled" + ".txt";
fileEx.addEventListener("change", ()=>{
    if(fileEx.value == '' && fileName.value ==""){
        titlename = "untitled" + ".txt";
    } else if(fileEx.value != "" && fileName.value =="") {
        titlename = "untitled" + fileEx.value;
    } else if(fileEx.value == "" && fileName.value !="") {
        titlename = fileName.value + ".txt";
    } else if(fileEx.value != "" && fileName.value !="") {
        titlename = fileName.value + fileEx.value;
    }
})
fileName.addEventListener("change", ()=>{
    if(fileEx.value == '' && fileName.value ==""){
        titlename = "untitled" + ".txt";
    } else if(fileEx.value != "" && fileName.value =="") {
        titlename = "untitled" + fileEx.value;
    } else if(fileEx.value == "" && fileName.value !="") {
        titlename = fileName.value + ".txt";
    } else if(fileEx.value != "" && fileName.value !="") {
        titlename = fileName.value + fileEx.value;
    }
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
const inputOpen = document.getElementById("inputFile");
inputOpen.onchange=()=>{
    var reader = new FileReader();
    var file = inputOpen.files[0];
    var inputRadioId = document.querySelector("input[name=\"choose\"]:checked").id;
    reader.onload= ()=>{
        console.log(inputRadioId, localStorage.getItem("choose"))
        if(inputRadioId != "no"){
            console.log(reader.result)
            console.log("yes")
            document.querySelector("div[contenteditable=\"true\"]").innerHTML = reader.result;
        } else if(inputRadioId != "yes"){
            console.log(reader.result)
            document.querySelector("div[contenteditable=\"true\"]").innerText = reader.result.split("\n").join("\n");
        }
        // document.getElementById("inputFile").click();
        inputOpen.files[0] = "";
    }
    reader.readAsText(file);   
}
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
    var reader = new FileReader();
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    // read files when dropped
    reader = new FileReader();
    reader.onload= ()=>{
        var inputRadioId = document.querySelector("input[name=\"choose\"]:checked").id;        if(inputRadioId != "no"){
            console.log(reader.result)
            console.log("yes")
            document.querySelector("div[contenteditable=\"true\"]").innerHTML = reader.result;
        } else if(inputRadioId != "yes"){
            console.log("no")
            document.querySelector("div[contenteditable=\"true\"]").innerText = reader.result.split("\n").join("\n");
        }
    }
    reader.readAsText(file);
})