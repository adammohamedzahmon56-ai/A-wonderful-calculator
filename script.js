let output = document.getElementById("output");
let btns = document.querySelectorAll("button")
let one = document.getElementsByClassName("one")
function display(btn){
    output.value += btn
}

function Clearall(){
    output.value = "";
}
function DL() {
    output.value = output.value.slice(0, -1);
}
function calc(){
    output.value = eval(output.value)
}