const mouseShape = document.getElementById("mouseShape");
const clickable_a = Array.from(document.getElementsByTagName("a")); 
const clickable_b = Array.from(document.getElementsByTagName("button")); 

let mouse_timeline = gsap.timeline({defaults:{duration:0.2, repeat:0}})

let xValue;
let yValue;


let clickable = clickable_a.concat(clickable_b);



window.onmousemove = e =>{
    xValuem = e.clientX;
    yValuem = e.clientY;
    mouseShape.style.left = `calc(${xValuem}px - 30px)`;
    mouseShape.style.top = `calc(${yValuem}px - 30px)`;
}



clickable.forEach(el => {
    el.onmouseover = _=>{
        mouse_timeline
        .to (mouseShape, {backgroundColor:"var(--white-clr)"})
        .to (mouseShape, { padding:"30px"})
        .to (mouseShape.firstElementChild, { opacity:1})
    }
    el.onmouseout = _=>{ 
        mouse_timeline
        .to (mouseShape, {backgroundColor:"var(--no_clr)"})
        .to (mouseShape, { padding:"0px"})
        .to (mouseShape.firstElementChild, { opacity:0})
    }
});

