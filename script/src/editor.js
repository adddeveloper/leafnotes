// these variables are for y-axis
var newpage, val, contentvalue, allvalue = "", next, lines, el;
const thedocument = document.querySelector(".document");
// thes variables are for x-axis
var textarea;
var valx, elx, linesx, nextEl, newline;
 
// function is defined before calling it down there
function checkX(){
    if(document.getElementById("page1").nextElementSibling) return;
    textarea = document.querySelectorAll(".textarea").forEach((eachEl, indexText)=>{
        valx = eachEl.childNodes;
        valx.forEach((textEl, indexTextEl)=>{
            elx = textEl.innerText.split("");
            nextEl = textEl.nextElementSibling;
            linesx = 2;
            if(elx.length > linesx && nextEl && nextEl != textEl){
                for (var i = 0; i <= elx.length; i++) {
                    nextEl.innerText += elx[elx.length-1];
                    elx.pop()
                }
                for (var i = 0; i <= contentvalue.length - lines; i++) {
                    next.innerHTML = theElement.lastChild.outerHTML + next.innerHTML;
                    theElement.lastChild.remove();
                }
            } else if(elx.length > linesx){
                newline = document.createElement("div");
                newline.contentEditable = "true";
                newline.innerText = elx.pop()+newline.innerText;
                
                textEl.innerText = elx.join("");
                eachEl.appendChild(newline);
                newline.focus();
                newline.click();
            }
        })
    });
}
// function is defined before call down there
function checkY(){
    val = thedocument.childNodes;
    val.forEach((theElement, index) => {
    el = theElement;
    if (!theElement.id) {
        theElement.id = "page" + (index + 1);
    }
    contentvalue = theElement.childNodes;
    // thedocument.childNodes[0].lastChild.remove()
    next = theElement.nextElementSibling;
    lines = 36;
    if (contentvalue.length > lines && next && next != theElement) {
        for (var i = 0; i <= contentvalue.length - lines; i++) {
            next.innerHTML = theElement.lastChild.outerHTML + next.innerHTML;
            theElement.lastChild.remove();
        }
    } else if (contentvalue.length > lines) {
        newpage = document.createElement("div");
        newpage.classList = "importanthide4 paper-document my-2 p-3 textarea";
        for (var i = 0; i <= contentvalue.length - lines; i++) {
            newpage.innerHTML = theElement.lastChild.outerHTML + newpage.innerHTML;
            theElement.lastChild.remove();
        }
        // newpage.innerHTML = contentvalue[lines].outerHTML+newpage.innerHTML;
        thedocument.appendChild(newpage);
    }
    });
}

function update(){
    // this function that the update function is calling, checks to see if 
    // the document is overflowing in the y-axis
    checkY();
    // this function that the update function is calling, checks to see if 
    // the document is overflowing in the x-axis
   checkX();
    requestAnimationFrame(update) // this request makes our update more like a loop
} update();
