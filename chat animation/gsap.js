const wavePath = document.getElementById("wavePath");
// Reduced amplitude values
const wave1 = "M0,160 C480,220 960,100 1440,160 L1440,320 L0,320 Z";
const wave2 = "M0,140 C480,100 960,220 1440,140 L1440,320 L0,320 Z";
const wave3 = "M0,170 C480,80 960,240 1440,170 L1440,320 L0,320 Z";
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

const topWavePath = document.getElementById("topWavePath");

// Paths flipped vertically for top wave effect
const topWave1 = "M0,160 C480,220 960,100 1440,160 L1440,320 L0,320 Z";
const topWave2 = "M0,140 C480,100 960,220 1440,140 L1440,320 L0,320 Z";
const topWave3 = "M0,170 C480,80 960,240 1440,170 L1440,320 L0,320 Z";



topWavePath.setAttribute("d", topWave1);
topWavePath.setAttribute("fill", color1);

const animateTopWave = () => {
  gsap.to(topWavePath, {
    duration: 2,
    attr: { d: topWave2 },
    fill: color2,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(topWavePath, {
        duration: 2,
        attr: { d: topWave3 },
        fill: color3,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(topWavePath, {
            duration: 2,
            attr: { d: topWave1 },
            fill: color1,
            ease: "power1.inOut",
            onComplete: animateTopWave,
          });
        },
      });
    },
  });
};

animateTopWave();
