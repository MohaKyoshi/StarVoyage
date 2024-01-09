gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({defaults: {duration: 2}});

tl.from(".img_about", {left: `-400px`, opacity:0} )
.from(".about_text_part", {left: `-400px`, opacity:0})


ScrollTrigger.create({
    animation:tl,
    trigger:".about_section",
    start: "top center",
    end: "+=500",
    scrub:1,
})



let tl2 = gsap.timeline({defaults: {duration: 2}});

tl2
.to(".girl", {width:`600px`})

ScrollTrigger.create({
    animation:tl2,
    trigger:".join",
    start: "top center",
    end: "+=400",
    scrub:1,
})

let tl3 = gsap.timeline({defaults: {duration: 2}});

tl3
.from(".planet_part", {y:50, opacity:0})
.from(".cards_container", {y:50, opacity:0})


ScrollTrigger.create({
    animation:tl3,
    trigger:".planet_section",
    start: "400 center",
    end: "+=800",
    scrub:1,
})