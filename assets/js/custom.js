//span
$(".split").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});
$(".split2").each(function () {
    let txt = $(this).text();
    let split = txt.split(" ").join("</span> <span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});

//main
setTimeout(function(){
    gsap.to(".sec1 .move-image .mimg", {duration: 0.4, width: "40vw", boxShadow: "20px 20px 50px 20px rgba(0, 0, 0, 0.1)"})
    gsap.to(".sec1 h1 span", {duration: 0.6, opacity: 1, y:0, stagger: 0.05, ease: "power4.out", delay:1})
    gsap.to(".sec1 header span", {duration: 0.6, opacity: 1, y:0, ease: "power4.out", delay:2})
    gsap.to(".sec1 .name span", {duration: 0.6, opacity: 1, y:0, ease: "power4.out", delay:2})
},1000);

//scrollProgress
const scrollProgress = function(){
    let scroll = window.scrollY;
    let sec3 = document.querySelector("#section3").offsetTop 
    let sec5 = document.querySelector("#section5").offsetTop 
    let sec6 = document.querySelector("#section6").offsetTop 

    document.querySelectorAll(".site-wrap").forEach(elem => {
        let offset1 = (scroll - sec3 - elem.offsetTop) * 0.1;
        let offset2 = (scroll - sec3 - elem.offsetTop) * 0.15;

        let target1 = elem.querySelector(".img-wrap img");
        let target2 = elem.querySelector("h4");

        gsap.to(target1, {duration: .3, y: offset1});
        gsap.to(target2, {duration: .3, x: offset2});
    });
    let downBtn = document.querySelector(".ani .list .list-grid .list-item:nth-child(1)");
    let offset = (scroll - sec5 - downBtn.offsetTop) * 0.2;
    gsap.to(downBtn, {duration: .3, y: -offset});

    let circle = document.querySelector(".contact .circle");
    let circleSpin = document.querySelector(".contact .circle .circle-spin");
    let offset1 = (scroll - sec6 - downBtn.offsetTop) * 0.1;
    gsap.to(circleSpin, {duration: .3, rotation: offset1});
}
window.addEventListener("scroll", scrollProgress);

//stie appear
function appearSite(site){
    document.querySelector(`${site} .img-wrap`).classList.add("reveal");
    gsap.to(`${site} h4 span`, {duration: .8, y:0, stagger: 0.05, ease: "power4.out", delay:.6})
    gsap.to(`${site} .right .desc span`, {duration: 1, y:0, stagger: 0.1, ease: "power4.out", delay:.8})
    gsap.to(`${site} .right a`, {duration: 1, width: "38%", ease: "power4.out", delay:.8})
    gsap.to(`${site} .right a span`, {duration: 1, opacity: 1, ease: "power4.out", delay:1})
    gsap.to(`${site} .editor-warp`, {duration: 1, opacity: 1, ease: "power4.out", delay:1.2})
}

//list-item appear
function appearItem(item){
    document.querySelector(`${item} .list-img`).classList.add("show"); 
}

//Background
const $section1 = document.querySelector("#section1");
const $section2 = document.querySelector("#section2");
const $section3 = document.querySelector("#section3");
const $section4 = document.querySelector("#section4");
const $section5 = document.querySelector("#section5");
const $section6 = document.querySelector("#section6");

function addBackground(){
    $section1.classList.add("bgblack");
    $section2.classList.add("bgblack");
    $section3.classList.add("bgblack");
    $section4.classList.add("bgblack");
    $section5.classList.add("bgblack");
    $section6.classList.add("bgblack");
}
function removeBackground(){
    $section1.classList.remove("bgblack");
    $section2.classList.remove("bgblack");
    $section3.classList.remove("bgblack");
    $section4.classList.remove("bgblack");
    $section5.classList.remove("bgblack");
    $section6.classList.remove("bgblack");
}

//scroll
window.addEventListener("scroll", function(){
    let scroll = window.scrollY;
    let winH = window.innerHeight/2; 

    const site = document.querySelectorAll(".site-wrap");
    const item = document.querySelectorAll(".list-item");
 
    let sec2 = $section2.offsetTop;
    let sec3 = $section3.offsetTop;
    let sec4 = $section4.offsetTop;
    let sec5 = $section5.offsetTop;
    let sec6 = $section6.offsetTop;
    let off = scroll - $section2.offsetTop;
    
    //sec2
    if( scroll > sec2 - winH ){
        gsap.to(".sec2 .img", {duration: .4, width: "34vw", boxShadow: "20px 20px 50px 20px rgba(0, 0, 0, 0.1)"})
        gsap.to(".sec2 .en span", {duration: .6, opacity: 1, y:0, stagger: 0.1, ease: "power4.out", delay:.4})
        gsap.to(".sec2 .ko span", {duration: .6, opacity: 1, y:0, stagger: 0.1, ease: "power4.out", delay:.8})
        document.querySelector(".sec2 .back-txt span:nth-child(1)").setAttribute("style", `transform: translateX(${off/2}px)`);
        document.querySelector(".sec2 .back-txt span:nth-child(2)").setAttribute("style", `transform: translateX(-${off/2}px)`);
        document.querySelector(".sec2 .back-txt span:nth-child(3)").setAttribute("style", `transform: translateX(${off/2}px)`);
    }
    
    //sec3
    if( scroll > sec3 - winH){
        addBackground();
        gsap.to(".sec3 .site-tit h2 span", {duration: 0.8, opacity: 1, y:0, stagger: 0.05, ease: "power4.out"})
        gsap.to(".sec3 .site-tit .line", {duration: 0.8, width: "83%", ease: "power4.out", delay:.6})
        gsap.to(".sec3 .site-tit .circle", {duration: 0.8, width: "12vw", height: "12vw", ease: "power4.out", delay:.6})
        gsap.to(".sec3 .site-list ul li a", {duration: 0.2, y:0, stagger: 0.05, ease: "circ.in"})
    }else if (scroll < sec3){
        removeBackground()
    }

    for(let i = 0 ; i < 5; i++){
        if ( scroll > sec3 + site[i].offsetTop - winH ) {
            appearSite(`#site${i+1}`);
        }
    }

    //sec4
    if ( scroll > sec4 - winH ) {
        removeBackground()
        gsap.to('#section4 .bg-txt span', {duration: .8, y:0, stagger: 0.05, ease: "power4.out"})
    }else if (scroll < sec4 ){}

    let offset = scroll - $section4.offsetTop ;
    if( scroll > $section4.offsetTop ){
        document.querySelector('.sec4').style.left = `-${offset}px`;
     }

    // sec5
    if ( scroll > sec5 - winH ) {
        addBackground();
        gsap.to('.ani-tit h2 span ', {duration: .8, y:0, stagger: 0.05, ease: "power4.out"})
        gsap.to(".ani-tit .line", {duration: 0.8, width: "94vw", ease: "power4.out", delay:.6})
            gsap.to(".ani-tit .circle", {duration: 0.8, width: "12vw", height: "12vw", ease: "power4.out", delay:.6})
    }else if (scroll < sec5 ){}

    for(let i = 1 ; i < 6; i++){
        if ( scroll > sec5 + item[i].offsetTop - winH ) {
            appearItem(`.list-item:nth-child(${i+1})`);
        }
        if(scroll > sec5 + item[i].offsetTop - winH/2.5){
            gsap.to(`.list-item:nth-child(${i+1}) .list-text h4`, {duration: 1.2, opacity: 1, ease: "power4.out", delay:.2}) 
            gsap.to(`.list-item:nth-child(${i+1}) .list-text span`, {duration: 1, width: "100%",  ease: "power4.out", delay:.4}) 
        }
    }

    // sec6
    if(scroll > sec6 - winH){
    removeBackground()
        gsap.to(".contact .circle .circle-spin", {duration: 1, opacity: 1, ease: "power4.out"})
        gsap.to(".contact h3 p span", {duration: .8, y:0, stagger: 0.05, ease: "power4.out", delay:.3})
        gsap.to(".contact .info ul li span", {duration: 1, y:0, stagger: 0.05, ease: "power4.out", delay:.7})
        gsap.to(".contact .copy", {duration: .8, opacity:1, ease: "power4.out", delay: 1.4})
    }
});	



// main background circle
const circle = '<svg viewBox="0 0 67.4 67.4"><circle class="circle" cx="33.7" cy="33.7" r="33.7"/></svg>'
class Particle{
constructor(svg, coordinates, friction){
    this.svg = svg
    this.steps = ($(window).height())/2
    this.item = null
    this.friction = friction
    this.coordinates = coordinates
    this.position = this.coordinates.y
    this.dimensions = this.render()
    this.move()
    this.rotation = Math.random() > 0.5 ? "-" : "+"
    this.scale = 0.4 + (Math.random()*2)
    this.siner = $(window).width()/2.5 * Math.random()
}
destroy(){
    this.item.remove()
}

move(){
    this.position = this.position - this.friction
    let top = this.position;
    let left = this.coordinates.x + Math.sin(this.position*Math.PI/this.steps) * this.siner;
    this.item.css({
    transform: "translateX("+left+"px) translateY("+top+"px) scale(" + this.scale + ") rotate("+(this.rotation)+(this.position + this.dimensions.height)+"deg)"
    })

    if(this.position < -(this.dimensions.height)){
    this.destroy()
    return false
    }else{
    return true
    }
}

render(){
    this.item = $(this.svg, {
        css: {
            transform: "translateX("+this.coordinates.x+"px) translateY("+this.coordinates.y+"px)"
        }
    })
    $("#particles").append(this.item)
    return {
        width: this.item.width(),
        height: this.item.height()
    }
    }
}

let isPaused = false;
window.onblur = function() {
    isPaused = true;
}.bind(this)
window.onfocus = function() {
    isPaused = false;
}.bind(this)

//-------------------------------
let particles = []

setInterval(function(){
if (!isPaused){
    particles.push(
    new Particle(circle, {
    "x": (Math.random() * $(window).width()),
    "y": $(window).height() + 100
    }, (1 + Math.random()) )
    )
}
}, 180)

function update(){
particles = particles.filter(function(p){
    return p.move()
})
requestAnimationFrame(update.bind(this))
}
update()

// main img mousemove
let x = 0;
let y = 0;
const moveImg = document.querySelector(".move-image");

moveImg.addEventListener("mousemove", function(e){
    const rect = this.getBoundingClientRect();
    this.style.setProperty("--x", e.clientX - ( (rect.width/2) + rect.left));
    this.style.setProperty("--y", e.clientY - ( (rect.height/2) + rect.top));
});

moveImg.addEventListener("mouseleave", function(){
    this.style.setProperty("--x", 0)
    this.style.setProperty("--y", 0)
});

// main text mousemove
const spanSlow = document.querySelectorAll(".spanSlow");
const spanFast = document.querySelectorAll(".spanFast");

const mouseMove = e => {
    let positionSlow = (e.pageX - (window.innerWidth/2)) * 0.1;
    let positionFast = (e.pageX - (window.innerWidth/2)) * 0.2;

    spanSlow.forEach(elem => {
        elem.style.transform = `translateX(${positionSlow}px)`;
    });
    spanFast.forEach(elem => {
        elem.style.transform = `translateX(${positionFast}px)`;
    });
}
window.addEventListener("mousemove", mouseMove);

// tabMenu
const tabMenu = document.querySelectorAll(".tab-btn");
const codeContents = document.querySelectorAll(".code-tab");

tabMenu.forEach((el, index)=>{
    el.children[0].addEventListener('click',(e)=>{
        e.preventDefault();
        if (e.target === e.currentTarget) return; 

        let btnTarget = e.target.parentNode;
        let idx = btnTarget.dataset.indexNumber; 
        
        for(let i=0; i < el.children[0].childElementCount; i++){
            el.children[0].children[i].classList.remove("active");
            codeContents[index].children[i].classList.remove("active");
        }
        btnTarget.classList.add("active");
        codeContents[index].children[idx-1].classList.add("active");
    })  
})