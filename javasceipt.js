let typingEffect = new Typed("#typo", {
    strings: ["MERN Stack Developer!"],
    loop: true,
    innerWidth: 100,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,

});
ScrollReveal().reveal('.content,.icon-logo', {
    origin: 'bottom',   // or 'top', 'left', 'right'
    distance: '50px',   // How far from the edge of the viewport the element will be revealed
    duration: 2000,      // Duration of the animation in milliseconds
    delay: 200,         // Delay before the animation starts
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
});

ScrollReveal().reveal('.imagechanger', {
    origin: 'top',
    distance: '50px',
    duration: 3000,
    delay: 200,
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
});

