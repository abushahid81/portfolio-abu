let typingEffect = new Typed("#typo", {
    strings: ["MERN Stack Developer!"],
    loop: true,
    innerWidth: 100,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,

});

ScrollReveal().reveal('.content,.icon-logo,.about-ho,#profiles', {
    setInterval: 600,
    reset: true,
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
});

ScrollReveal().reveal('.imagechanger,.about-move,.content,', {
    setInterval: 600,
    reset: true,
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
    // easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
});
ScrollReveal().reveal('.about,.education', {
    setInterval: 600,
    reset: true,
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 200,
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
});

