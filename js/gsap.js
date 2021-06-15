
// tweenmax
 var tl = gsap.timeline({defaults:{duration: 1}})
        
      tl.from(".anim1",1,{ opacity: 1, y: "50%",ease:Expo.easeInOut})
        .to(".anim1",1, {opacity: 0,   y:"-100%",  ease:Expo.easeInOut})
        .to(".overlay",1,{opacity: 1, y: "-100%", ease:Expo.easeInOut})
        .from(".nav-title",.2,{ opacity: 0, y:"-15%",ease:Expo.ease})
        .from(".nav1",.2,{ opacity: 0, y:"-15%",ease:Expo.ease})
        .from(".nav2",.2,{ opacity: 0, y:"-15%",ease:Expo.ease})
        .from(".nav3",.2,{ opacity: 0, y:"-15%",ease:Expo.ease})
        .from(".nav4",.2,{ opacity: 0, y:"-15%",ease:Expo.ease})
        .from(".c1",.3,{ opacity: 0, y:"15%",ease:Expo.ease})
        .from(".c2",.3,{ opacity: 0, y:"15%",ease:Expo.ease})
        .from(".c3",.3,{ opacity: 0, y:"15%",ease:Expo.ease})
        