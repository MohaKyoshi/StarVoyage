let data_planet = ["../Images/K2-18b.png", "../Images/HD_189773b.png", "../Images/TOI_849_b.png"]
const planet = document.querySelector(".planet_part").firstElementChild;

const cards = document.querySelector(".cards_container").children;
let card_timeline = gsap.timeline({defaults: {duration: 0.05}, stagger:0});




for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = _=>{

        Array.from(cards).forEach(el => {
            el.classList.remove("active");
        });
        cards[i].classList.add("active");


        Array.from(cards).filter(el => !el.classList.contains("active")).forEach(el =>{
            card_timeline
            .to(el, {background:"linear-gradient(-45deg, var(--red-clr), 40% , var(--blue-clr))"})
            .to(el.children[2], {opacity:1, left:"calc(50% - 50px)"})
            .to(el.children[0], {top:"0px", opacity:1})
            .to(el.children[1], {top:"0px", opacity:1})
            .to(el.children[3], {opacity:0,})
        });

        card_timeline
        .to(cards[i], {background:"#2D4366"})
        .to(cards[i].children[2], {opacity:0, left:"-20px"})
        .to(cards[i].children[0], {top:"-40px", opacity:0})
        .to(cards[i].children[1], {top:"-40px", opacity:0})
        .to(cards[i].children[3], {opacity:1, delay:0.5})

        planet_func();


    }
    
}

cards[0].classList.add("active");
cards[0].style.background ="#2D4366";
cards[0].children[0].style.opacity = "0";
cards[0].children[0].style.top = "-40px";
cards[0].children[1].style.opacity = "0";
cards[0].children[1].style.top = "-40px";
cards[0].children[2].style.opacity = "0";
cards[0].children[2].style.left = "-20px";
cards[0].children[3].style.opacity = "1";




function planet_func (){
    for (let j = 0; j < cards.length; j++){
        if (cards[j].classList.contains("active")){
            planet.setAttribute("src",data_planet[j])
            
            gsap.from(planet, {opacity:0, duration:2, y:-100})
        }
    }
}

planet_func();
