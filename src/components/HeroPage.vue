<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

// const particleOptions = {
//   background: {
//     color: {
//       value: '#0d47a1'
//     }
//   },
//   fpsLimit: 120,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: 'push'
//       },
//       onHover: {
//         enable: true,
//         mode: 'repulse'
//       },
//       resize: true
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         duration: 2,
//         opacity: 0.8,
//         size: 40
//       },
//       push: {
//         quantity: 4
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4
//       }
//     }
//   },
//   particles: {
//     color: {
//       value: '#ffffff'
//     },
//     links: {
//       color: '#ffffff',
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1
//     },
//     collisions: {
//       enable: true
//     },
//     move: {
//       direction: 'none',
//       enable: true,
//       outMode: 'bounce',
//       random: false,
//       speed: 6,
//       straight: false
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800
//       },
//       value: 80
//     },
//     opacity: {
//       // value: 0.5
//     },
//     shape: {
//       type: 'circle'
//     },
//     size: {
//       random: true,
//       value: 5
//     }
//   },
//   detectRetina: true
// }

const particlesOptions = {
  background: {
    color: {
      value: "#161B36",
    },
  },
  fpsLimit: 20,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#FFFF00",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
      enable: true,
      area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
</script>

<template>
  <div class="home">
    <Particles 
      id="tsparticles"
      class="particles"
      :particlesInit="particlesInit" 
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions"
    />
    <div class="card">
      <h1 class="home__title">GitHub Explorer</h1>
      <p class="home__description">Explore amazing projects from developers around the world!</p>
      <router-link to="/searchuserpage" class="home__button">Get Started</router-link>
    </div>
  </div>
</template>


<!-- Adding "scoped" attribute to limit the CSS to this component only -->
<style scoped>
@import "@/assets/fonts/font.css";

.particles {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.card {
  background-color: orangered;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83%;
  width: 83%;
  text-align: center;
}

.home__title {
  font-family: 'SEGA LOGO FONT';
  font-size: 2.8rem;
  font-weight: 100;
  margin-bottom: 2rem;
  /* color: #303c6a; */
  color: yellow
}

.home__description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  /* color: yellow; */
}

.home__button {
  /* background-color: #008080; */
  background-color: brown;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  display: inline-block;
}

.home__button:hover {
  background-color: #006666;
}
</style>