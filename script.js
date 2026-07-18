window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},2500);

});
const text = "مذاق الطبيعة";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 180);
    }
}

window.addEventListener("load", () => {
    setTimeout(typeWriter, 800);
});