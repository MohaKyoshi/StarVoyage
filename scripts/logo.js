let logo_timeline = gsap.timeline({defaults: {duration:0.2} })

logo.onmouseover = _=>{
    logo_timeline.clear();
    logo_timeline.to ("#logo", {wordSpacing:30}).restart();
    logo_timeline.to (".star_logo", {opacity:1, left:150})
}

logo.onmouseout = _=>{
    logo_timeline.reverse();
} 