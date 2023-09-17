gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.enable', {
    y: -20,
},
    {
        y: 0,
        stagger: 1,
        opacity: 1,
    }
)

gsap.to('.enable-1', {
    opacity: 1,
    stagger: 0.2
})

ScrollTrigger.observe({
    target: window,
    type: 'pointer',
    onMove: ({ deltaX, deltaY }) => {
        gsap.to('.pointer-animation', { x: 0.2 * deltaX, y: deltaY * 0.2 })
        gsap.to('.pointer-animation-1', { y: 0.2 * deltaX, x: deltaY * 0.2 })
    }
})

const height = `${window.innerHeight + 76}px`
gsap.to('.nav-animation', {
    scrollTrigger: {
        trigger: '.nav-animation',
        start: "top bottom",
        end: `${height} top`,
        toggleClass: 'activate',
    }
})