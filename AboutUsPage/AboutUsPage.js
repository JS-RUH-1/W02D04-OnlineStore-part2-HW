// animate back ground
particlesJS("snowfall",{
    "particles": {
      "number": {
        "value": 100
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": 10,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "bottom",
        "straight": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        }
      },
      "modes": {
        "push": {
          "particles_nb": 12
        }
      }
    }
  });
  