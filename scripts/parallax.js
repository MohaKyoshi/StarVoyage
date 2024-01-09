const parallax = document.querySelectorAll(".parallax_el");
let timeline = gsap.timeline({defaults: {duration: 0.5}});

let xValue = 0;
let yValue = 0;

let animationStarter = 2;

window.onmousemove = (e) => {
    xValue = e.clientX - innerWidth / 2;
    yValue = e.clientY - innerHeight / 2;

    parallax.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;


        let zValue = e.clientX - parseFloat (getComputedStyle(el).left);


        el.style.transform = `translateX( calc(-50% + ${xValue * speedx}px) ) translateY( calc(-50% + ${yValue * speedy}px) ) perspective(2300px) translateZ(${zValue * speedz}px) `;
    });
};



Array.from(parallax).filter((el) => !el.classList.contains("text_header")).forEach(el => {
    
    gsap.from(el, {
        top: `${window.innerHeight / 2 + Number(el.dataset.distance)}px`,
        duration: animationStarter,
    });

 });

 
timeline
.from(".title1",{ left: `-100px`, opacity:0, delay:animationStarter})
.from(".title2",{ top: `-80px`, opacity:0})
.from(".line",{ left: `100px`, opacity:0, width: `0px`})
.from(".para",{ top: `-150px`, opacity:0})
.from(".social",{ left: `-200px`, opacity:0})
.from("nav",{ top: `-200px`, opacity:0})
