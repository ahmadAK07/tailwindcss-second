function aboutNav(){
   let box = document.getElementById('box');
let btn = document.querySelector('nav button');
btn.addEventListener('click', ()=>{
   if(box.classList.contains('h-[250px]')){
    box.classList.remove('h-[250px]');
    box.classList.add('h-[0px]');
   }else{
    box.classList.remove('h-[0px]');
    box.classList.add('h-[250px]');
   }
})
}
aboutNav();




// // const tl = gsap.timeline();

// gsap.from('#first-banner', {
//    x: "-50vw",
//    opacity: 0.2,
//    duration: 3
// });
// gsap.from("#heading-1", {
//    x: "200px",
//    y: "-200px",
//    scale: 0,
//    rotate: "360deg",
//    duration: 2,
//    ease: "ease-in"
// });

// // gsap.from("#heading-2", {
// //    x: "400px",
// //    opacity: 0,
// //    scrollTrigger: {
// //       trigger: "#heading-2",
// //       markers: true,
// //       end: "top center",
// //       scrub: 1
// //    }

// // });
// // gsap.from("#first-para", {
// //    x: "-500px",
// //    opacity: 0,
// //    duration: 2,
// //    ease: "ease-in",
// //    scrollTrigger: {
// //       trigger: "#first-para",
    
// //       scrub: 1,
// //       end: "top center"
// //    }
// // });

// let secondContainer = document.getElementById('second-container');
// Array.from(secondContainer.children).forEach(child => {
//    gsap.from(child, {
//       y: "500px",
//       opacity: 0,
//       scrollTrigger: {
//          trigger: child,
//          scrub: 1,
//          end: "top 80%"
//       }
//    });
// })


// gsap.from("#banner-2", {
//    x: "-600",
//    opacity: 0,
//    scrollTrigger: {
//       trigger: "#banner-2",
 
//       scrub: 1,
//       end: "top 30%"
//    }
// })
// gsap.from("#third-section-card", {
//    x: 600,
//    opacity: 0,
//    scrollTrigger: {
//       trigger: "#third-section-card",
     
//       scrub: 1,
//       end: "top 30%"
//    }
// })


// let fourthContainer = document.getElementById('fourth-container');
// Array.from(fourthContainer.children).forEach(child => {
//    gsap.from(child, {
//         rotate: 560,
//         scale: 0.1,
//         opacity: 0,
//         scrollTrigger: {
//          trigger: child,
//          scrub: 2,
//          end: "top 98%"
//       }
//    });
// })
// let fifthContainer = document.getElementById('fifth-container');
// Array.from(fifthContainer.children).forEach(child => {
//    gsap.from(child, {
//         y: 560,
//         opacity: 0,
//         scrollTrigger: {
//          trigger: child,
//          scrub: 2,
//          end: "top 98%"
//       }
//    });
// })
// let sixthContainer = document.getElementById('sixth-container');
// Array.from(sixthContainer.children).forEach(child => {
//    gsap.from(child, {
//         x: 560,
//         opacity: 0,
//         scrollTrigger: {
//          trigger: child,
//          scrub: 1,
//          end: "top 80%"
//       }
//    });
// })

// let eightContainerCards = document.querySelectorAll('.eighth-container-card');

// eightContainerCards.forEach(card => {
//   Array.from(card.children).forEach(child => {
//    gsap.from(child, {
//       x: 500,
//       opacity: 0,
//       scrollTrigger: {
//          trigger: card,
//          scrub: 1,
//        end: "top 80%"
//       }
//    })
//   })
// })
// // gsap.from("#fifth-container>div", {
// //    y: 600,
// //    opacity: 0,
// //    scrollTrigger: {
// //       trigger: "#fifth-section",
      
// //       scrub: 1,
// //       end: "top 55%"
// //    }
// // })
// // gsap.from("#sixth-container>div", {
// //    y: 600,
// //    opacity: 0,
// //    scrollTrigger: {
// //       trigger: "#sixth-section",
      
// //       scrub: 1,
// //       end: "top 55%"
// //    }
// // })
// // gsap.from("#seventh-container>div", {
// //    x: "-10vw",
// //    opacity: 0,
// //    scrollTrigger: {
// //       trigger: "#seventh-section",
    
// //       scrub: 1,
// //       end: "top 40%"
// //    }
// // })
// // gsap.from("#eighth-container>div>*", {
// //    x: "-500px",
// //    opacity: 0,
// //    scrollTrigger: {
// //       trigger: "#eighth-section",
     
// //       scrub: 1,
// //       end: "top 40%"
// //    }
// // })

// let tenthContainer = document.getElementById('tenth-container');
// Array.from(tenthContainer.children).forEach(child => {
//    gsap.from(child, {
//       y: "500px",
//       opacity: 0,
//       scrollTrigger: {
//          trigger: child,
//          scrub: 1,
//          end: "top 40%"
//       }
//    })
// })

// // gsap.from("#tenth-container>div", {
// //    y: "500px",
// //    opacity: 0,
// //    scrollTrigger: {
// //       trigger: "#tenth-section>div",
      
// //       scrub: 1,
// //       end: "top 40%"
// //    }
// // })


