gsap.registerPlugin(ScrollTrigger);

gsap.from(".showcase-area .container", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".showcase-area .container",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
});

gsap.from(".showcase-area .shapes svg", {
  rotate: 360,
  opacity: 0,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".showcase-area .shapes svg",
    start: "top 90%",
    toggleActions: "play none none reset",
  },
});
gsap.from(".about-cta", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-cta",
    start: "top 80%",
    toggleActions: "play none none reset",
    // markers: true, // Uncomment for debugging
  },
});
gsap.utils.toArray(".about-cta .card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: i * 0.2, // stagger effect
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reset",
    },
  });
});
gsap.utils.toArray(".overview-section > div").forEach((member, i) => {
  gsap.from(member, {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: i * 0.15, // stagger effect
    ease: "power3.out",
    scrollTrigger: {
      trigger: member,
      start: "top 85%",
      toggleActions: "play none none reset",
    },
  });
});
