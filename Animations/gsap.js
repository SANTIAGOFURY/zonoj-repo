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
// ...existing code...

// ...existing code...

// Animate .mission cards with scale and rotation effect
gsap.utils.toArray(".missions-section .mission").forEach((mission, i) => {
  gsap.from(mission, {
    opacity: 0,
    scale: 0.8,
    rotate: -5,
    duration: 1,
    delay: i * 0.12,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: mission,
      start: "top 85%",
      toggleActions: "play none none reset",
    },
  });
});

// ...existing code...
// ...existing code...

// Animate missions h1 word by word
gsap.from(".missions h1 span", {
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.25,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".missions h1",
    start: "top 85%",
    toggleActions: "play none none reset",
  },
});
gsap.from(".info h1 span", {
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.25,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".missions h1",
    start: "top 85%",
    toggleActions: "play none none reset",
  },
});
// Animate info blobs with floating, scaling, and rotation for a lively effect
gsap.to(".info .blob1", {
  y: 40,
  scale: 1.08,
  rotate: 14,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
gsap.to(".info .blob2", {
  y: -40,
  scale: 0.92,
  rotate: -13,
  duration: 4.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

const wavePath = document.getElementById("wavePath");

const wave1 = "M0,160 C480,360 960,-40 1440,160 L1440,320 L0,320 Z";
const wave2 = "M0,120 C480,-40 960,360 1440,120 L1440,320 L0,320 Z";
const wave3 = "M0,200 C480,-80 960,400 1440,200 L1440,320 L0,320 Z";
const color1 = "#7c3aed"; // Purple
const color2 = "#21c064"; // Green
const color3 = "red"; // Orange
wavePath.setAttribute("d", wave1); // Start with first shape

wavePath.setAttribute("d", wave1);
wavePath.setAttribute("fill", color1);

const animateWave = () => {
  gsap.to(wavePath, {
    duration: 2,
    attr: { d: wave2 },
    fill: color2,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(wavePath, {
        duration: 2,
        attr: { d: wave3 },
        fill: color3,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(wavePath, {
            duration: 2,
            attr: { d: wave1 },
            fill: color1,
            ease: "power1.inOut",
            onComplete: animateWave,
          });
        },
      });
    },
  });
};

animateWave();

animateWave(); // Start
