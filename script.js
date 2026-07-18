// =========================
// تأثير ظهور العناصر عند التمرير
// =========================
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".feature,.product,.about,.contact").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});
// =========================
// زر الرجوع للأعلى
// =========================
const topBtn=document.createElement("button");
topBtn.innerHTML="⬆";
topBtn.id="topBtn";
document.body.appendChild(topBtn);
topBtn.style.cssText=`
position:fixed;
bottom:25px;
left:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0d4b2d;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:9999;
transition:.3s;
`;
window.addEventListener("scroll",()=>{
if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});
topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};
// =========================
// القائمة النشطة
// =========================
const links=document.querySelectorAll("nav a");
links.forEach(link=>{
link.addEventListener("click",()=>{
links.forEach(l=>l.classList.remove("active"));
link.classList.add("active");
});
});
// =========================
// تأثير الضغط على زر الشراء
// =========================
document.querySelectorAll(".product button").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.innerHTML="✔ تمت الإضافة";
btn.style.background="#d69a00";
setTimeout(()=>{
btn.innerHTML="أضف للسلة";
btn.style.background="#0d4b2d";
},2000);
});
});
// =========================
// تأثير ظهور العناصر
// =========================
const style=document.createElement("style");
style.innerHTML=`
.hidden{
opacity:0;
transform:translateY(40px);
transition:1s;
}
.show{
opacity:1;
transform:translateY(0);
}
.active{
color:#d69a00!important;
}
`;
document.head.appendChild(style);
// =========================
// سنة الفوتر تلقائياً
// =========================
const footer=document.querySelector("footer p:last-child");
if(footer){
footer.innerHTML="جميع الحقوق محفوظة © "+new Date().getFullYear();
}// =========================
// تأثير ظهور العناصر عند التمرير
// =========================
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".feature,.product,.about,.contact").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});
// =========================
// زر الرجوع للأعلى
// =========================
const topBtn=document.createElement("button");
topBtn.innerHTML="⬆";
topBtn.id="topBtn";
document.body.appendChild(topBtn);
topBtn.style.cssText=`
position:fixed;
bottom:25px;
left:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0d4b2d;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:9999;
transition:.3s;
`;
window.addEventListener("scroll",()=>{
if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});
topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};
// =========================
// القائمة النشطة
// =========================
const links=document.querySelectorAll("nav a");
links.forEach(link=>{
link.addEventListener("click",()=>{
links.forEach(l=>l.classList.remove("active"));
link.classList.add("active");
});
});
// =========================
// تأثير الضغط على زر الشراء
// =========================
document.querySelectorAll(".product button").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.innerHTML="✔ تمت الإضافة";
btn.style.background="#d69a00";
setTimeout(()=>{
btn.innerHTML="أضف للسلة";
btn.style.background="#0d4b2d";
},2000);
});
});
// =========================
// تأثير ظهور العناصر
// =========================
const style=document.createElement("style");
style.innerHTML=`
.hidden{
opacity:0;
transform:translateY(40px);
transition:1s;
}
.show{
opacity:1;
transform:translateY(0);
}
.active{
color:#d69a00!important;
}
`;
document.head.appendChild(style);
// =========================
// سنة الفوتر تلقائياً
// =========================
const footer=document.querySelector("footer p:last-child");
if(footer){
footer.innerHTML="جميع الحقوق محفوظة © "+new Date().getFullYear();
}
// ===== Hero Slider =====

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    }, 4000);

}