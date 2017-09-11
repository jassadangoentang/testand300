function highlightItem(element) {
    element.style.fontStyle = "italic";
    element.style.backgroundColor="lightblue";

}

function resetToIntailStyle(element){
    element.style.fontStyle = "normal";
    element.style.backgroundColor="white";
}

function changeText(elm,text){
   // var elm = document.getElementById("link1");
    elm.innerHTML = text;
}