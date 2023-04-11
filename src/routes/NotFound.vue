<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
    await loadFull(engine);
};

const particlesLoaded = async (container) => {
    console.log("Particles container loaded", container);
};

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
    <div class="container">
        <Particles id="tsparticles" class="particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="particlesOptions" />
        <div class="card">
            <h1 class="title">Error</h1>
            <p class="errordescription">Page Not Found</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

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

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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

.title {
  font-family: 'SEGA LOGO FONT';
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 2rem;
  color: #303c6a;
}

.errordescription {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
}
</style>