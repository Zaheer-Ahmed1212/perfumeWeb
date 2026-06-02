gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero-img",{
    opacity:0,
    scale:0.3,
    duration:0.8,
    delay:0.4
})
const tl = gsap.timeline();
tl.from(".lft-sec h1",{
    opacity:0,
    y:20,
    duration:0.8,
    delay:1.2,
    ease:"power3.out"
})
tl.from(".lft-sec p",{
    opacity:0,
    y:15,
    duration:0.8
})
tl.from(".lft-sec a",{
    opacity:0,
    scale:0.4,
    duration:0.8
})
gsap.from(".feature-sec h1", {
   opacity: 0,
   y: 60,
   duration: 0.8,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".feature-sec h1",
      start: "top 80%",
      toggleActions: "play none none none",
    
   }
});

gsap.from(".feature", {
   opacity: 0,
   y: 80,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".feature-cards",
      start: "top 80%",
    
   }
});
gsap.from(".about-brand .image-card", {
   opacity: 0,
   scale: 0.2,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".about-brand .image-card",
      start: "top 70%",
    
   }
});
gsap.from(".about-brand .right-sec h1", {
   x:-150,
   duration: 1,
    opacity:0,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".about-brand .image-card",
      start: "top 70%",
    
   }
});
gsap.from(".about-brand .right-sec p", {
   x:-150,
    opacity:0,
   delay:0.2,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".about-brand .image-card",
      start: "top 70%",
    
   }
});
gsap.from(".about-brand .right-sec button", {
   x:-150,
   opacity:0,
   delay:0.4,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".about-brand .image-card",
      start: "top 70%",
    
   }
});
gsap.from(".cards-sec .card1", {
   y:50,
   opacity:0,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".cards-sec .card1",
      start: "top 50%",
    
   }
});
gsap.from(".products h1 ", {
   y:50,
   opacity:0,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".products h1",
      start: "top 70%",
    
   }
});
gsap.from(".products .see-more button ", {
   opacity:0,
   scale:0.3,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".products .see-more button ",
      start: "top 70%",
    
   }
});
gsap.from(".testamonials .headingT h1", {
   opacity:0,
   scale:0.3,
   duration: 1,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".testamonials .headingT h1",
      start: "top 50%",
    
   }
});
gsap.from(".testamonials .cards .card", {
   opacity:0,
  y:150,
   duration: 0.5,
   ease: "power3.out",

   scrollTrigger: {
      trigger: ".testamonials .cards .card",
      start: "top 70%",
    
   }
});
const order = document.querySelectorAll(".order");
order.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("you have ordered successfully!");
  });
});
let msg  = document.querySelector(".msg");
msg.addEventListener("click",()=>{
   msg.textContent = "Message Sent!"
   msg.disabled = true;
   msg.style.opacity = "0.7";

})





