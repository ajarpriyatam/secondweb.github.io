let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let cross = document.getElementById('cross');
let arrow = document.getElementById('arrow');
let btn1 = document.getElementById('btn1');
let about = document.getElementById('about');
let services = document.getElementById('services');
let works = document.getElementById('works');
let client = document.getElementById('client');
let contact = document.getElementById('contact');





if(window.pageXOffset<100){
console.log("priyatam ajar")
}
else{
    console.log("priyatam")
}



burger.addEventListener('click',function(){
        nav.style.left="40%";
        console.log("prince")
})
cross.addEventListener('click',function(){
    nav.style.left="100%";
    arrow.style.display="block";

})
arrow.addEventListener('click',function(){
    // window.scrollTo(0,0);
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
});
btn1.addEventListener('click',function(){
    window.scrollTo(
       {
        top:908,
        left:0,
        behavior:'smooth'
       }
    )
})
about.addEventListener('click',function(){
    nav.style.left="100%";
    window.scrollTo(
       {
        top:908,
        left:0,
        behavior:'smooth'
       }
    )
})
services.addEventListener('click',function(){
    nav.style.left="100%";
    window.scrollTo(
       {
        top:1740,
        left:0,
        behavior:'smooth'
       }
    )
})
works.addEventListener('click',function(){
    nav.style.left="100%";
    window.scrollTo(
       {
        top:2940,
        left:0,
        behavior:'smooth'
       }
    )
})
client.addEventListener('click',function(){
    nav.style.left="100%";
    window.scrollTo(
       {
        top:5400,
        left:0,
        behavior:'smooth'
       }
    )
})
contact.addEventListener('click',function(){
    nav.style.left="100%";
    window.scrollTo(
       {
        top:6930,
        left:0,
        behavior:'smooth'
       }
    )
})
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        arrow.style.display="block";
    }
    else{
        arrow.style.display="none";
    }
})



let btn4=document.getElementsByClassName('btn4');
let slide2=document.getElementById("slide2");

btn4[0].onclick=function(){
    slide2.style.transform="translateX(0px)";
    for(i=0;i<4;i++){
        btn4[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn4[1].onclick=function(){
    slide2.style.transform="translateX(-460px)";
    for(i=0;i<4;i++){
        btn4[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn4[2].onclick=function(){
    slide2.style.transform="translateX(-920px)";
    for(i=0;i<4;i++){
        btn4[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn4[3].onclick=function(){
    slide2.style.transform="translateX(-1380px)";
    for(i=0;i<4;i++){
        btn4[i].classList.remove("active");
    }
    this.classList.add("active");
}




let btn5=document.getElementById('btn5');
let btn6=document.getElementById('btn6');
let btn7=document.getElementById('btn7');
let btn8=document.getElementById('btn8');

let slider2=document.getElementById('slider2')
btn8.addEventListener('click',function(){
    slider2.style.transform="translateX(-1000px)";
    btn8.style.display="none"
    btn5.style.display="block"
    btn6.style.display="block"
    btn7.style.display="none"

})
btn6.addEventListener('click',function(){
    slider2.style.transform="translateX(-2000px)";
    btn7.style.display="block"
    btn5.style.display="none"
})
btn7.addEventListener('click',function(){
    slider2.style.transform="translateX(-1000px)";
    btn7.style.display="none"
    btn5.style.display="block";
})
btn5.addEventListener('click',function(){
    slider2.style.transform="translateX(0px)";
    btn6.style.display="none"
    btn8.style.display="block";

})