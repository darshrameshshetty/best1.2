gsap.from(".image1 img",{
    y:-530,
    duration:1,
    delay:1,
    
})
gsap.to(".image1 img",{
    opacity:1,
})




var a = document.querySelector(".image1 img")
var b = document.querySelector(".image2 img")
var flag = 0

b.addEventListener("click", function () {
    if (flag == 0) {
        b.style.opacity = 0;
        a.style.opacity = 1;
        flag = 1;
    } else {
        a.style.opacity = 0;
        b.style.opacity = 1;
        flag = 0;
    }
})


 gsap.from(" h2",{
    x:-180,
    duration:1.5,
    opacity:0,
    delay:2,
})

gsap.from(".bar",{
    width:0,
    duration:1.3,
})



gsap.to("h1",{
    y:-90,
    duration:1.5,
    ease:Expo.easeInOut,
    delay:2.5
})
gsap.from("h1",{
    opacity:0,
    duration:1.6,
    delay:2.5
})
gsap.from("a",{
    opacity:0,
})
gsap.from(".navleft h4,.navmiddle h4,.navright ",{
    y:-100,
    duration:1,
    stagger:0.3,
})
gsap.to(".bottle1 img,.bottle2 img",{
    y:-50,
    duration:1,
    delay:3,
    ease:Expo.easeIn,
opacity:1,
})


