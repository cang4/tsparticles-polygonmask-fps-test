import React from "react";
import Particles from "react-tsparticles";

function AppTwo() {
  return (
    <Particles
      id="tsparticles20"
      options={{
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          color: {
            value: "#ffffff"
          },
          lineLinked: {
            enable: false
          },
          opacity: {
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5
            },
            value: 2
          },

          move: {
            size: true,
            enable: true,
            speed: 0.25,
            direction: "left",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: false,
              rotate: { x: 600, y: 1200 }
            },
            trail: {
              enable: true,
              length: 10
            },
            warp: true
          }
        },
        absorbers: {
          orbits: true,
          destroy: false,
          opacity: 1,
          color: "#FFF",
          size: {
            value: 40,
            random: false,
            density: 2000
          },
          position: {
            x: 75,
            y: 50
          }
        },
        background: {
          color: "#000"
        }
      }}
    />
  );
}

export default AppTwo;
