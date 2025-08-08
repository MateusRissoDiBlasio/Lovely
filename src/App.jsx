import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import './App.css'
import './css/hearts.css'
import './responsive.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import './swiperstyles.css'
import { EffectCards } from 'swiper/modules';
import music from '/music/manha-de-sol.mp3';

import { tsParticles } from "@tsparticles/engine";
import { loadHeartShape } from "@tsparticles/shape-heart";

(async () => {
  await loadHeartShape(tsParticles);
})();

function App() {

  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesLoaded2 = (container) => {
    console.log(container);
  };

// [confetti random explosions]

  // const options = useMemo(
  //   () => (
  //     {
  //       autoPlay: true,
  //       background: {
  //         color: {
  //           value: ""
  //         },
  //         image: "",
  //         position: "",
  //         repeat: "",
  //         size: "",
  //         opacity: 1
  //       },
  //       backgroundMask: {
  //         composite: "destination-out",
  //         cover: {
  //           opacity: 1,
  //           color: {
  //             value: ""
  //           }
  //         },
  //         enable: false
  //       },
  //       clear: true,
  //       defaultThemes: {},
  //       delay: 0,
  //       fullScreen: {
  //         enable: true,
  //         zIndex: 100
  //       },
  //       detectRetina: true,
  //       duration: 0,
  //       fpsLimit: 120,
  //       interactivity: {
  //         detectsOn: "window",
  //         events: {
  //           onClick: {
  //             enable: false,
  //             mode: []
  //           },
  //           onDiv: {
  //             selectors: [],
  //             enable: false,
  //             mode: [],
  //             type: "circle"
  //           },
  //           onHover: {
  //             enable: false,
  //             mode: [],
  //             parallax: {
  //               enable: false,
  //               force: 2,
  //               smooth: 10
  //             }
  //           },
  //           resize: {
  //             delay: 0.5,
  //             enable: true
  //           }
  //         },
  //         modes: {
  //           trail: {
  //             delay: 1,
  //             pauseOnStop: false,
  //             quantity: 1
  //           },
  //           attract: {
  //             distance: 200,
  //             duration: 0.4,
  //             easing: "ease-out-quad",
  //             factor: 1,
  //             maxSpeed: 50,
  //             speed: 1
  //           },
  //           bounce: {
  //             distance: 200
  //           },
  //           bubble: {
  //             distance: 200,
  //             duration: 0.4,
  //             mix: false,
  //             divs: {
  //               distance: 200,
  //               duration: 0.4,
  //               mix: false,
  //               selectors: []
  //             }
  //           },
  //           connect: {
  //             distance: 80,
  //             links: {
  //               opacity: 0.5
  //             },
  //             radius: 60
  //           },
  //           grab: {
  //             distance: 100,
  //             links: {
  //               blink: false,
  //               consent: false,
  //               opacity: 1
  //             }
  //           },
  //           push: {
  //             default: true,
  //             groups: [],
  //             quantity: 4
  //           },
  //           remove: {
  //             quantity: 2
  //           },
  //           repulse: {
  //             distance: 200,
  //             duration: 0.4,
  //             factor: 100,
  //             speed: 1,
  //             maxSpeed: 50,
  //             easing: "ease-out-quad",
  //             divs: {
  //               distance: 200,
  //               duration: 0.4,
  //               factor: 100,
  //               speed: 1,
  //               maxSpeed: 50,
  //               easing: "ease-out-quad",
  //               selectors: []
  //             }
  //           },
  //           slow: {
  //             factor: 3,
  //             radius: 200
  //           },
  //           particle: {
  //             replaceCursor: false,
  //             pauseOnStop: false,
  //             stopDelay: 0
  //           },
  //           light: {
  //             area: {
  //               gradient: {
  //                 start: {
  //                   value: "#ffffff"
  //                 },
  //                 stop: {
  //                   value: "#000000"
  //                 }
  //               },
  //               radius: 1000
  //             },
  //             shadow: {
  //               color: {
  //                 value: "#000000"
  //               },
  //               length: 2000
  //             }
  //           }
  //         }
  //       },
  //       manualParticles: [],
  //       particles: {
  //         bounce: {
  //           horizontal: {
  //             value: 1
  //           },
  //           vertical: {
  //             value: 1
  //           }
  //         },
  //         collisions: {
  //           absorb: {
  //             speed: 2
  //           },
  //           bounce: {
  //             horizontal: {
  //               value: 1
  //             },
  //             vertical: {
  //               value: 1
  //             }
  //           },
  //           enable: false,
  //           maxSpeed: 50,
  //           mode: "bounce",
  //           overlap: {
  //             enable: true,
  //             retries: 0
  //           }
  //         },
  //         color: {
  //           value: "#00ff00",
  //           animation: {
  //             h: {
  //               count: 0,
  //               enable: true,
  //               speed: 50,
  //               decay: 0,
  //               delay: 0,
  //               sync: false,
  //               offset: 0
  //             },
  //             s: {
  //               count: 0,
  //               enable: false,
  //               speed: 1,
  //               decay: 0,
  //               delay: 0,
  //               sync: true,
  //               offset: 0
  //             },
  //             l: {
  //               count: 0,
  //               enable: false,
  //               speed: 1,
  //               decay: 0,
  //               delay: 0,
  //               sync: true,
  //               offset: 0
  //             }
  //           }
  //         },
  //         effect: {
  //           close: true,
  //           fill: true,
  //           options: {},
  //           type: []
  //         },
  //         groups: {},
  //         move: {
  //           angle: {
  //             offset: 0,
  //             value: 90
  //           },
  //           attract: {
  //             distance: 200,
  //             enable: false,
  //             rotate: {
  //               x: 3000,
  //               y: 3000
  //             }
  //           },
  //           center: {
  //             x: 50,
  //             y: 50,
  //             mode: "percent",
  //             radius: 0
  //           },
  //           decay: 0.1,
  //           distance: {},
  //           direction: "none",
  //           drift: 0,
  //           enable: true,
  //           gravity: {
  //             acceleration: 10,
  //             enable: true,
  //             inverse: false,
  //             maxSpeed: 50
  //           },
  //           path: {
  //             clamp: true,
  //             delay: {
  //               value: 0
  //             },
  //             enable: false,
  //             options: {}
  //           },
  //           outModes: {
  //             default: "destroy",
  //             bottom: "destroy",
  //             left: "destroy",
  //             right: "destroy",
  //             top: "none"
  //           },
  //           random: false,
  //           size: false,
  //           speed: {
  //             min: 10,
  //             max: 20
  //           },
  //           spin: {
  //             acceleration: 0,
  //             enable: false
  //           },
  //           straight: false,
  //           trail: {
  //             enable: false,
  //             length: 10,
  //             fill: {}
  //           },
  //           vibrate: false,
  //           warp: false
  //         },
  //         number: {
  //           density: {
  //             enable: false,
  //             width: 1920,
  //             height: 1080
  //           },
  //           limit: {
  //             mode: "delete",
  //             value: 0
  //           },
  //           value: 0
  //         },
  //         opacity: {
  //           value: {
  //             min: 0,
  //             max: 1
  //           },
  //           animation: {
  //             count: 0,
  //             enable: true,
  //             speed: 2,
  //             decay: 0,
  //             delay: 0,
  //             sync: false,
  //             mode: "auto",
  //             startValue: "max",
  //             destroy: "min"
  //           }
  //         },
  //         reduceDuplicates: false,
  //         shadow: {
  //           blur: 0,
  //           color: {
  //             value: "#000"
  //           },
  //           enable: false,
  //           offset: {
  //             x: 0,
  //             y: 0
  //           }
  //         },
  //         shape: {
  //           close: true,
  //           fill: true,
  //           options: {},
  //           type: "square"
  //         },
  //         size: {
  //           value: {
  //             min: 2,
  //             max: 4
  //           },
  //           animation: {
  //             count: 0,
  //             enable: false,
  //             speed: 5,
  //             decay: 0,
  //             delay: 0,
  //             sync: false,
  //             mode: "auto",
  //             startValue: "random",
  //             destroy: "none"
  //           }
  //         },
  //         stroke: {
  //           width: 0
  //         },
  //         zIndex: {
  //           value: 0,
  //           opacityRate: 1,
  //           sizeRate: 1,
  //           velocityRate: 1
  //         },
  //         destroy: {
  //           bounds: {},
  //           mode: "none",
  //           split: {
  //             count: 1,
  //             factor: {
  //               value: 3
  //             },
  //             rate: {
  //               value: {
  //                 min: 4,
  //                 max: 9
  //               }
  //             },
  //             sizeOffset: true,
  //             particles: {}
  //           }
  //         },
  //         roll: {
  //           darken: {
  //             enable: true,
  //             value: 25
  //           },
  //           enable: true,
  //           enlighten: {
  //             enable: false,
  //             value: 0
  //           },
  //           mode: "vertical",
  //           speed: {
  //             min: 15,
  //             max: 25
  //           }
  //         },
  //         tilt: {
  //           value: {
  //             min: 0,
  //             max: 360
  //           },
  //           animation: {
  //             enable: true,
  //             speed: 60,
  //             decay: 0,
  //             sync: false
  //           },
  //           direction: "random",
  //           enable: true
  //         },
  //         twinkle: {
  //           lines: {
  //             enable: false,
  //             frequency: 0.05,
  //             opacity: 1
  //           },
  //           particles: {
  //             enable: false,
  //             frequency: 0.05,
  //             opacity: 1
  //           }
  //         },
  //         wobble: {
  //           distance: 30,
  //           enable: true,
  //           speed: {
  //             angle: {
  //               min: -15,
  //               max: 15
  //             },
  //             move: 10
  //           }
  //         },
  //         life: {
  //           count: 1,
  //           delay: {
  //             value: 0,
  //             sync: false
  //           },
  //           duration: {
  //             value: 5,
  //             sync: true
  //           }
  //         },
  //         rotate: {
  //           value: {
  //             min: 0,
  //             max: 360
  //           },
  //           animation: {
  //             enable: true,
  //             speed: 60,
  //             decay: 0,
  //             sync: false
  //           },
  //           direction: "random",
  //           path: false
  //         },
  //         orbit: {
  //           animation: {
  //             count: 0,
  //             enable: false,
  //             speed: 1,
  //             decay: 0,
  //             delay: 0,
  //             sync: false
  //           },
  //           enable: false,
  //           opacity: 1,
  //           rotation: {
  //             value: 45
  //           },
  //           width: 1
  //         },
  //         links: {
  //           blink: false,
  //           color: {
  //             value: "#fff"
  //           },
  //           consent: false,
  //           distance: 100,
  //           enable: false,
  //           frequency: 1,
  //           opacity: 1,
  //           shadow: {
  //             blur: 5,
  //             color: {
  //               value: "#000"
  //             },
  //             enable: false
  //           },
  //           triangles: {
  //             enable: false,
  //             frequency: 1
  //           },
  //           width: 1,
  //           warp: false
  //         },
  //         repulse: {
  //           value: 0,
  //           enabled: false,
  //           distance: 1,
  //           duration: 1,
  //           factor: 1,
  //           speed: 1
  //         }
  //       },
  //       pauseOnBlur: true,
  //       pauseOnOutsideViewport: true,
  //       responsive: [],
  //       smooth: false,
  //       style: {},
  //       themes: [],
  //       zLayers: 100,
  //       emitters: {
  //         autoPlay: true,
  //         fill: true,
  //         life: {
  //           wait: false,
  //           count: 0,
  //           delay: 0.4,
  //           duration: 0.1
  //         },
  //         rate: {
  //           quantity: 150,
  //           delay: 0.1
  //         },
  //         shape: {
  //           options: {},
  //           replace: {
  //             color: false,
  //             opacity: false
  //           },
  //           type: "square"
  //         },
  //         startCount: 0,
  //         size: {
  //           mode: "percent",
  //           height: 0,
  //           width: 0
  //         },
  //         particles: {}
  //       },
  //       motion: {
  //         disable: false,
  //         reduce: {
  //           factor: 4,
  //           value: true
  //         }
  //       }
  //     }
  //   ),
  //   [],
  // );

  // [confetti cannon]
  const options = useMemo(
    () => (
          {
            autoPlay: true,
            background: {
              color: {
                value: ""
              },
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                opacity: 1,
                color: {
                  value: ""
                }
              },
              enable: false
            },
            clear: true,
            defaultThemes: {},
            delay: 10,
            fullScreen: {
              enable: true,
              zIndex: 100
            },
            detectRetina: true,
            duration: 15,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: false,
                  mode: []
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle"
                },
                onHover: {
                  enable: false,
                  mode: [],
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                  }
                },
                resize: {
                  delay: 0.5,
                  enable: true
                }
              },
              modes: {
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 1
                },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1
                },
                bounce: {
                  distance: 200
                },
                bubble: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: []
                  }
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5
                  },
                  radius: 60
                },
                grab: {
                  distance: 100,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1
                  }
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4
                },
                remove: {
                  quantity: 2
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: []
                  }
                },
                slow: {
                  factor: 3,
                  radius: 200
                },
                particle: {
                  replaceCursor: false,
                  pauseOnStop: false,
                  stopDelay: 0
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff"
                      },
                      stop: {
                        value: "#000000"
                      }
                    },
                    radius: 1000
                  },
                  shadow: {
                    color: {
                      value: "#000000"
                    },
                    length: 2000
                  }
                }
              }
            },
            manualParticles: [],
            particles: {
              bounce: {
                horizontal: {
                  value: 0
                },
                vertical: {
                  value: 0
                }
              },
              collisions: {
                absorb: {
                  speed: 2
                },
                bounce: {
                  horizontal: {
                    value: 1
                  },
                  vertical: {
                    value: 1
                  }
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0
                }
              },
              color: {
                value: "#f00",
                animation: {
                  h: {
                    count: 0,
                    enable: true,
                    speed: 30,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0
                  }
                }
              },
              effect: {
                close: true,
                fill: true,
                options: {},
                type: []
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000
                  }
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0
                },
                decay: 0.1,
                distance: {},
                direction: "top",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: true,
                  inverse: false,
                  maxSpeed: 200
                },
                path: {
                  clamp: true,
                  delay: {
                    value: 0
                  },
                  enable: false,
                  options: {}
                },
                outModes: {
                  default: "destroy",
                  bottom: "destroy",
                  left: "destroy",
                  right: "destroy",
                  top: "none"
                },
                random: false,
                size: false,
                speed: {
                  min: 50,
                  max: 150
                },
                spin: {
                  acceleration: 0,
                  enable: false
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {}
                },
                vibrate: false,
                warp: false
              },
              number: {
                density: {
                  enable: false,
                  width: 1920,
                  height: 1080
                },
                limit: {
                  mode: "delete",
                  value: 0
                },
                value: 0
              },
              opacity: {
                value: 1,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 2,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none"
                }
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: "#000"
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0
                }
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: "circle"
              },
              size: {
                value: 3,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none"
                }
              },
              stroke: {
                width: 0
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    value: 3
                  },
                  rate: {
                    value: {
                      min: 4,
                      max: 9
                    }
                  },
                  sizeOffset: true,
                  particles: {}
                }
              },
              roll: {
                darken: {
                  enable: true,
                  value: 30
                },
                enable: true,
                enlighten: {
                  enable: true,
                  value: 30
                },
                mode: "vertical",
                speed: {
                  min: 15,
                  max: 25
                }
              },
              tilt: {
                value: {
                  min: 0,
                  max: 360
                },
                animation: {
                  enable: true,
                  speed: 60,
                  decay: 0,
                  sync: false
                },
                direction: "random",
                enable: true
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1
                }
              },
              wobble: {
                distance: 30,
                enable: true,
                speed: {
                  angle: {
                    min: -15,
                    max: 15
                  },
                  move: 10
                }
              },
              life: {
                count: 0,
                delay: {
                  value: 0,
                  sync: false
                },
                duration: {
                  value: 0,
                  sync: false
                }
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360
                },
                animation: {
                  enable: true,
                  speed: 60,
                  decay: 0,
                  sync: false
                },
                direction: "random",
                path: false
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false
                },
                enable: false,
                opacity: 1,
                rotation: {
                  value: 45
                },
                width: 1
              },
              links: {
                blink: false,
                color: {
                  value: "#fff"
                },
                consent: false,
                distance: 100,
                enable: false,
                frequency: 1,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000"
                  },
                  enable: false
                },
                triangles: {
                  enable: false,
                  frequency: 1
                },
                width: 1,
                warp: false
              },
              repulse: {
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1
              }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            smooth: false,
            style: {},
            themes: [],
            zLayers: 100,
            emitters: {
              autoPlay: true,
              fill: true,
              life: {
                wait: false
              },
              rate: {
                quantity: 10,
                delay: 0.1
              },
              shape: {
                options: {},
                replace: {
                  color: false,
                  opacity: false
                },
                type: "square"
              },
              startCount: 0,
              size: {
                mode: "percent",
                height: 0,
                width: 0
              },
              particles: {
                links: {
                  enable: false
                },
                shape: {
                  type: "circle"
                }
              },
              position: {
                x: 50,
                y: 50
              }
            },
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: true
              }
            }
          }
    ),
    [],
  );


  // console.log(init)

  // [hearts cannon]
  // const options = useMemo(
  //   () => (
  //         {
  //           autoPlay: true,
  //           background: {
  //             color: {
  //               value: ""
  //             },
  //             image: "",
  //             position: "",
  //             repeat: "",
  //             size: "",
  //             opacity: 1
  //           },
  //           backgroundMask: {
  //             composite: "destination-out",
  //             cover: {
  //               opacity: 1,
  //               color: {
  //                 value: ""
  //               }
  //             },
  //             enable: false
  //           },
  //           clear: true,
  //           defaultThemes: {},
  //           delay: 11,
  //           fullScreen: {
  //             enable: true,
  //             zIndex: 100
  //           },
  //           detectRetina: true,
  //           duration: 60,
  //           fpsLimit: 120,
  //           interactivity: {
  //             detectsOn: "window",
  //             events: {
  //               onClick: {
  //                 enable: false,
  //                 mode: []
  //               },
  //               onDiv: {
  //                 selectors: [],
  //                 enable: false,
  //                 mode: [],
  //                 type: "heart"
  //               },
  //               onHover: {
  //                 enable: false,
  //                 mode: [],
  //                 parallax: {
  //                   enable: false,
  //                   force: 2,
  //                   smooth: 10
  //                 }
  //               },
  //               resize: {
  //                 delay: 0.5,
  //                 enable: true
  //               }
  //             },
  //             modes: {
  //               trail: {
  //                 delay: 1,
  //                 pauseOnStop: false,
  //                 quantity: 1
  //               },
  //               attract: {
  //                 distance: 200,
  //                 duration: 0.4,
  //                 easing: "ease-out-quad",
  //                 factor: 1,
  //                 maxSpeed: 50,
  //                 speed: 1
  //               },
  //               bounce: {
  //                 distance: 200
  //               },
  //               bubble: {
  //                 distance: 200,
  //                 duration: 0.4,
  //                 mix: false,
  //                 divs: {
  //                   distance: 200,
  //                   duration: 0.4,
  //                   mix: false,
  //                   selectors: []
  //                 }
  //               },
  //               connect: {
  //                 distance: 80,
  //                 links: {
  //                   opacity: 0.5
  //                 },
  //                 radius: 60
  //               },
  //               grab: {
  //                 distance: 100,
  //                 links: {
  //                   blink: false,
  //                   consent: false,
  //                   opacity: 1
  //                 }
  //               },
  //               push: {
  //                 default: true,
  //                 groups: [],
  //                 quantity: 4
  //               },
  //               remove: {
  //                 quantity: 2
  //               },
  //               repulse: {
  //                 distance: 200,
  //                 duration: 0.4,
  //                 factor: 100,
  //                 speed: 1,
  //                 maxSpeed: 50,
  //                 easing: "ease-out-quad",
  //                 divs: {
  //                   distance: 200,
  //                   duration: 0.4,
  //                   factor: 100,
  //                   speed: 1,
  //                   maxSpeed: 50,
  //                   easing: "ease-out-quad",
  //                   selectors: []
  //                 }
  //               },
  //               slow: {
  //                 factor: 3,
  //                 radius: 200
  //               },
  //               particle: {
  //                 replaceCursor: false,
  //                 pauseOnStop: false,
  //                 stopDelay: 0
  //               },
  //               light: {
  //                 area: {
  //                   gradient: {
  //                     start: {
  //                       value: "#ffffff"
  //                     },
  //                     stop: {
  //                       value: "#000000"
  //                     }
  //                   },
  //                   radius: 1000
  //                 },
  //                 shadow: {
  //                   color: {
  //                     value: "#000000"
  //                   },
  //                   length: 2000
  //                 }
  //               }
  //             }
  //           },
  //           manualParticles: [],
  //           particles: {
  //             bounce: {
  //               horizontal: {
  //                 value: 0
  //               },
  //               vertical: {
  //                 value: 0
  //               }
  //             },
  //             collisions: {
  //               absorb: {
  //                 speed: 2
  //               },
  //               bounce: {
  //                 horizontal: {
  //                   value: 1
  //                 },
  //                 vertical: {
  //                   value: 1
  //                 }
  //               },
  //               enable: false,
  //               maxSpeed: 50,
  //               mode: "bounce",
  //               overlap: {
  //                 enable: true,
  //                 retries: 0
  //               }
  //             },
  //             color: {
  //               value: "#ff02c8ff",
  //               animation: {
  //                 h: {
  //                   count: 0,
  //                   enable: true,
  //                   speed: 30,
  //                   decay: 0,
  //                   delay: 0,
  //                   sync: true,
  //                   offset: 0
  //                 },
  //                 s: {
  //                   count: 0,
  //                   enable: false,
  //                   speed: 1,
  //                   decay: 0,
  //                   delay: 0,
  //                   sync: true,
  //                   offset: 0
  //                 },
  //                 l: {
  //                   count: 0,
  //                   enable: false,
  //                   speed: 1,
  //                   decay: 0,
  //                   delay: 0,
  //                   sync: true,
  //                   offset: 0
  //                 }
  //               }
  //             },
  //             effect: {
  //               close: true,
  //               fill: true,
  //               options: {},
  //               type: []
  //             },
  //             groups: {},
  //             move: {
  //               angle: {
  //                 offset: 0,
  //                 value: 90
  //               },
  //               attract: {
  //                 distance: 200,
  //                 enable: false,
  //                 rotate: {
  //                   x: 3000,
  //                   y: 3000
  //                 }
  //               },
  //               center: {
  //                 x: 50,
  //                 y: 50,
  //                 mode: "percent",
  //                 radius: 0
  //               },
  //               decay: 0.1,
  //               distance: {},
  //               direction: "top",
  //               drift: 0,
  //               enable: true,
  //               gravity: {
  //                 acceleration: 9.81,
  //                 enable: true,
  //                 inverse: false,
  //                 maxSpeed: 200
  //               },
  //               path: {
  //                 clamp: true,
  //                 delay: {
  //                   value: 0
  //                 },
  //                 enable: false,
  //                 options: {}
  //               },
  //               outModes: {
  //                 default: "destroy",
  //                 bottom: "destroy",
  //                 left: "destroy",
  //                 right: "destroy",
  //                 top: "none"
  //               },
  //               random: false,
  //               size: false,
  //               speed: {
  //                 min: 50,
  //                 max: 150
  //               },
  //               spin: {
  //                 acceleration: 0,
  //                 enable: false
  //               },
  //               straight: false,
  //               trail: {
  //                 enable: false,
  //                 length: 10,
  //                 fill: {}
  //               },
  //               vibrate: false,
  //               warp: false
  //             },
  //             number: {
  //               density: {
  //                 enable: false,
  //                 width: 1920,
  //                 height: 1080
  //               },
  //               limit: {
  //                 mode: "delete",
  //                 value: 0
  //               },
  //               value: 0
  //             },
  //             opacity: {
  //               value: 1,
  //               animation: {
  //                 count: 0,
  //                 enable: false,
  //                 speed: 2,
  //                 decay: 0,
  //                 delay: 0,
  //                 sync: false,
  //                 mode: "auto",
  //                 startValue: "random",
  //                 destroy: "none"
  //               }
  //             },
  //             reduceDuplicates: false,
  //             shadow: {
  //               blur: 0,
  //               color: {
  //                 value: "#000"
  //               },
  //               enable: false,
  //               offset: {
  //                 x: 0,
  //                 y: 0
  //               }
  //             },
  //             shape: {
  //               close: true,
  //               fill: true,
  //               options: {},
  //               type: "heart"
  //             },
  //             size: {
  //               value: 15,
  //               animation: {
  //                 count: 0,
  //                 enable: false,
  //                 speed: 5,
  //                 decay: 0,
  //                 delay: 0,
  //                 sync: false,
  //                 mode: "auto",
  //                 startValue: "random",
  //                 destroy: "none"
  //               }
  //             },
  //             stroke: {
  //               width: 0
  //             },
  //             zIndex: {
  //               value: 0,
  //               opacityRate: 1,
  //               sizeRate: 1,
  //               velocityRate: 1
  //             },
  //             destroy: {
  //               bounds: {},
  //               mode: "none",
  //               split: {
  //                 count: 1,
  //                 factor: {
  //                   value: 3
  //                 },
  //                 rate: {
  //                   value: {
  //                     min: 4,
  //                     max: 9
  //                   }
  //                 },
  //                 sizeOffset: true,
  //                 particles: {}
  //               }
  //             },
  //             roll: {
  //               darken: {
  //                 enable: true,
  //                 value: 30
  //               },
  //               enable: true,
  //               enlighten: {
  //                 enable: true,
  //                 value: 30
  //               },
  //               mode: "vertical",
  //               speed: {
  //                 min: 15,
  //                 max: 25
  //               }
  //             },
  //             tilt: {
  //               value: {
  //                 min: 0,
  //                 max: 360
  //               },
  //               animation: {
  //                 enable: true,
  //                 speed: 60,
  //                 decay: 0,
  //                 sync: false
  //               },
  //               direction: "random",
  //               enable: true
  //             },
  //             twinkle: {
  //               lines: {
  //                 enable: false,
  //                 frequency: 0.05,
  //                 opacity: 1
  //               },
  //               particles: {
  //                 enable: false,
  //                 frequency: 0.05,
  //                 opacity: 1
  //               }
  //             },
  //             wobble: {
  //               distance: 30,
  //               enable: true,
  //               speed: {
  //                 angle: {
  //                   min: -15,
  //                   max: 15
  //                 },
  //                 move: 10
  //               }
  //             },
  //             life: {
  //               count: 0,
  //               delay: {
  //                 value: 0,
  //                 sync: false
  //               },
  //               duration: {
  //                 value: 0,
  //                 sync: false
  //               }
  //             },
  //             rotate: {
  //               value: {
  //                 min: 0,
  //                 max: 360
  //               },
  //               animation: {
  //                 enable: true,
  //                 speed: 60,
  //                 decay: 0,
  //                 sync: false
  //               },
  //               direction: "random",
  //               path: false
  //             },
  //             orbit: {
  //               animation: {
  //                 count: 0,
  //                 enable: false,
  //                 speed: 1,
  //                 decay: 0,
  //                 delay: 0,
  //                 sync: false
  //               },
  //               enable: false,
  //               opacity: 1,
  //               rotation: {
  //                 value: 45
  //               },
  //               width: 1
  //             },
  //             links: {
  //               blink: false,
  //               color: {
  //                 value: "#fa00bbff"
  //               },
  //               consent: false,
  //               distance: 100,
  //               enable: false,
  //               frequency: 1,
  //               opacity: 1,
  //               shadow: {
  //                 blur: 5,
  //                 color: {
  //                   value: "#000"
  //                 },
  //                 enable: false
  //               },
  //               triangles: {
  //                 enable: false,
  //                 frequency: 1
  //               },
  //               width: 1,
  //               warp: false
  //             },
  //             repulse: {
  //               value: 0,
  //               enabled: false,
  //               distance: 1,
  //               duration: 1,
  //               factor: 1,
  //               speed: 1
  //             }
  //           },
  //           pauseOnBlur: true,
  //           pauseOnOutsideViewport: true,
  //           responsive: [],
  //           smooth: false,
  //           style: {},
  //           themes: [],
  //           zLayers: 100,
  //           emitters: {
  //             autoPlay: true,
  //             fill: true,
  //             life: {
  //               wait: false
  //             },
  //             rate: {
  //               quantity: 10,
  //               delay: 0.1
  //             },
  //             shape: {
  //               options: {},
  //               replace: {
  //                 color: false,
  //                 opacity: false
  //               },
  //               type: "square"
  //             },
  //             startCount: 0,
  //             size: {
  //               mode: "percent",
  //               height: 0,
  //               width: 0
  //             },
  //             particles: {
  //               links: {
  //                 enable: false
  //               },
  //               shape: {
  //                 type: "heart"
  //               }
  //             },
  //             position: {
  //               x: 50,
  //               y: 50
  //             }
  //           },
  //           motion: {
  //             disable: false,
  //             reduce: {
  //               factor: 4,
  //               value: true
  //             }
  //           }
  //         }
  //   ),
  //   [],
  // );

  

  const optionshearts = useMemo(
    () => (
      {
        fullScreen: {
          zIndex: 100
        },
        delay: 25,
        particles: {
          number: {
            value: 0
          },
          
          color: {
            value: [
              "#ff0000ff",
              "#ffffffff",
              "#ff0000ff"
            ]
          },
          shape: {
            type: [
              "heart"
            ],
            options: {}
          },
          opacity: {
            value: {
              min: 0,
              max: 1
            },
            animation: {
              enable: true,
              speed: 2,
              startValue: "max",
              destroy: "min"
            }
          },
          size: {
            value: {
              min: 5,
              max: 10
            }
          },
          links: {
            enable: false
          },
          life: {
            duration: {
              sync: true,
              value: 10
            },
            count: 1
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 10
            },
            speed: {
              min: 10,
              max: 20
            },
            decay: 0.1,
            direction: "none",
            straight: false,
            outModes: {
              default: "destroy",
              top: "none"
            }
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            direction: "random",
            move: true,
            animation: {
              enable: true,
              speed: 60
            }
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 60
            }
          },
          roll: {
            darken: {
              enable: true,
              value: 25
            },
            enable: true,
            speed: {
              min: 15,
              max: 25
            }
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15
            }
          }
        },
        emitters: {
          life: {
            count: 1,
            duration: 0.1,
            delay: 0.4
          },
          rate: {
            delay: 0.1,
            quantity: 300
          },
          size: {
            width: 45,
            height: 45
          },
          position:{
            x: 50,
            y: 10 
          }
        }
      }

    ),
    [],
  );
  
  // console.log(init)

  // const options = useMemo(
  //   () => (
  //     {
  //       autoPlay: true,
  //       background: {
  //         color: {
  //           value: ""
  //         },
  //         image: "",
  //         position: "",
  //         repeat: "",
  //         size: "",
  //         opacity: 1
  //       },
  //       backgroundMask: {
  //         composite: "destination-out",
  //         cover: {
  //           opacity: 1,
  //           color: {
  //             value: ""
  //           }
  //         },
  //         enable: false
  //       },
  //       clear: true,
  //       defaultThemes: {},
  //       delay: 0,
  //       fullScreen: {
  //         enable: true,
  //         zIndex: 100
  //       },
  //       detectRetina: true,
  //       duration: 0,
  //       fpsLimit: 120,
  //       interactivity: {
  //         detectsOn: "window",
  //         events: {
  //           onClick: {
  //             enable: false,
  //             mode: []
  //           },
  //           onDiv: {
  //             selectors: [],
  //             enable: false,
  //             mode: [],
  //             type: "circle"
  //           },
  //           onHover: {
  //             enable: false,
  //             mode: [],
  //             parallax: {
  //               enable: false,
  //               force: 2,
  //               smooth: 10
  //             }
  //           },
  //           resize: {
  //             delay: 0.5,
  //             enable: true
  //           }
  //         },
  //         modes: {
  //           trail: {
  //             delay: 1,
  //             pauseOnStop: false,
  //             quantity: 1
  //           },
  //           attract: {
  //             distance: 200,
  //             duration: 0.4,
  //             easing: "ease-out-quad",
  //             factor: 1,
  //             maxSpeed: 50,
  //             speed: 1
  //           },
  //           bounce: {
  //             distance: 200
  //           },
  //           bubble: {
  //             distance: 200,
  //             duration: 0.4,
  //             mix: false,
  //             divs: {
  //               distance: 200,
  //               duration: 0.4,
  //               mix: false,
  //               selectors: []
  //             }
  //           },
  //           connect: {
  //             distance: 80,
  //             links: {
  //               opacity: 0.5
  //             },
  //             radius: 60
  //           },
  //           grab: {
  //             distance: 100,
  //             links: {
  //               blink: false,
  //               consent: false,
  //               opacity: 1
  //             }
  //           },
  //           push: {
  //             default: true,
  //             groups: [],
  //             quantity: 4
  //           },
  //           remove: {
  //             quantity: 2
  //           },
  //           repulse: {
  //             distance: 200,
  //             duration: 0.4,
  //             factor: 100,
  //             speed: 1,
  //             maxSpeed: 50,
  //             easing: "ease-out-quad",
  //             divs: {
  //               distance: 200,
  //               duration: 0.4,
  //               factor: 100,
  //               speed: 1,
  //               maxSpeed: 50,
  //               easing: "ease-out-quad",
  //               selectors: []
  //             }
  //           },
  //           slow: {
  //             factor: 3,
  //             radius: 200
  //           },
  //           particle: {
  //             replaceCursor: false,
  //             pauseOnStop: false,
  //             stopDelay: 0
  //           },
  //           light: {
  //             area: {
  //               gradient: {
  //                 start: {
  //                   value: "#ffffff"
  //                 },
  //                 stop: {
  //                   value: "#000000"
  //                 }
  //               },
  //               radius: 1000
  //             },
  //             shadow: {
  //               color: {
  //                 value: "#000000"
  //               },
  //               length: 2000
  //             }
  //           }
  //         }
  //       },
  //       manualParticles: [],
  //       particles: {
  //         bounce: {
  //           horizontal: {
  //             value: 1
  //           },
  //           vertical: {
  //             value: 1
  //           }
  //         },
  //         collisions: {
  //           absorb: {
  //             speed: 2
  //           },
  //           bounce: {
  //             horizontal: {
  //               value: 1
  //             },
  //             vertical: {
  //               value: 1
  //             }
  //           },
  //           enable: false,
  //           maxSpeed: 50,
  //           mode: "bounce",
  //           overlap: {
  //             enable: true,
  //             retries: 0
  //           }
  //         },
  //         color: {
  //           value: "#ffd700",
  //           animation: {
  //             h: {
  //               count: 0,
  //               enable: false,
  //               speed: 1,
  //               decay: 0,
  //               delay: 0,
  //               sync: true,
  //               offset: 0
  //             },
  //             s: {
  //               count: 0,
  //               enable: false,
  //               speed: 1,
  //               decay: 0,
  //               delay: 0,
  //               sync: true,
  //               offset: 0
  //             },
  //             l: {
  //               count: 0,
  //               enable: false,
  //               speed: 1,
  //               decay: 0,
  //               delay: 0,
  //               sync: true,
  //               offset: 0
  //             }
  //           }
  //         },
  //         effect: {
  //           close: true,
  //           fill: true,
  //           options: {},
  //           type: []
  //         },
  //         groups: {},
  //         move: {
  //           angle: {
  //             offset: 0,
  //             value: 90
  //           },
  //           attract: {
  //             distance: 200,
  //             enable: false,
  //             rotate: {
  //               x: 3000,
  //               y: 3000
  //             }
  //           },
  //           center: {
  //             x: 50,
  //             y: 50,
  //             mode: "percent",
  //             radius: 0
  //           },
  //           decay: 0.05,
  //           distance: {},
  //           direction: "top",
  //           drift: 0,
  //           enable: true,
  //           gravity: {
  //             acceleration: 9.81,
  //             enable: true,
  //             inverse: false,
  //             maxSpeed: 50
  //           },
  //           path: {
  //             clamp: true,
  //             delay: {
  //               value: 0
  //             },
  //             enable: false,
  //             options: {}
  //           },
  //           outModes: {
  //             default: "destroy",
  //             bottom: "destroy",
  //             left: "destroy",
  //             right: "destroy",
  //             top: "none"
  //           },
  //           random: false,
  //           size: false,
  //           speed: {
  //             min: 10,
  //             max: 50
  //           },
  //           spin: {
  //             acceleration: 0,
  //             enable: false
  //           },
  //           straight: false,
  //           trail: {
  //             enable: false,
  //             length: 10,
  //             fill: {}
  //           },
  //           vibrate: false,
  //           warp: false
  //         },
  //         number: {
  //           density: {
  //             enable: false,
  //             width: 1920,
  //             height: 1080
  //           },
  //           limit: {
  //             mode: "delete",
  //             value: 0
  //           },
  //           value: 100
  //         },
  //         opacity: {
  //           value: 1,
  //           animation: {
  //             count: 0,
  //             enable: false,
  //             speed: 2,
  //             decay: 0,
  //             delay: 0,
  //             sync: false,
  //             mode: "auto",
  //             startValue: "random",
  //             destroy: "none"
  //           }
  //         },
  //         reduceDuplicates: false,
  //         shadow: {
  //           blur: 0,
  //           color: {
  //             value: "#000"
  //           },
  //           enable: false,
  //           offset: {
  //             x: 0,
  //             y: 0
  //           }
  //         },
  //         shape: {
  //           close: true,
  //           fill: true,
  //           options: {},
  //           type: "triangle"
  //         },
  //         size: {
  //           value: {
  //             min: 0,
  //             max: 2
  //           },
  //           animation: {
  //             count: 1,
  //             enable: true,
  //             speed: 16,
  //             decay: 0,
  //             delay: 0,
  //             sync: true,
  //             mode: "auto",
  //             startValue: "min",
  //             destroy: "none"
  //           }
  //         },
  //         stroke: {
  //           width: 0
  //         },
  //         zIndex: {
  //           value: 0,
  //           opacityRate: 1,
  //           sizeRate: 1,
  //           velocityRate: 1
  //         },
  //         destroy: {
  //           bounds: {},
  //           mode: "none",
  //           split: {
  //             count: 1,
  //             factor: {
  //               value: 3
  //             },
  //             rate: {
  //               value: {
  //                 min: 4,
  //                 max: 9
  //               }
  //             },
  //             sizeOffset: true,
  //             particles: {}
  //           }
  //         },
  //         roll: {
  //           darken: {
  //             enable: true,
  //             value: 25
  //           },
  //           enable: true,
  //           enlighten: {
  //             enable: false,
  //             value: 0
  //           },
  //           mode: "vertical",
  //           speed: {
  //             min: 5,
  //             max: 15
  //           }
  //         },
  //         tilt: {
  //           value: {
  //             min: 0,
  //             max: 360
  //           },
  //           animation: {
  //             enable: true,
  //             speed: 30,
  //             decay: 0,
  //             sync: false
  //           },
  //           direction: "random",
  //           enable: true
  //         },
  //         twinkle: {
  //           lines: {
  //             enable: false,
  //             frequency: 0.05,
  //             opacity: 1
  //           },
  //           particles: {
  //             enable: false,
  //             frequency: 0.05,
  //             opacity: 1
  //           }
  //         },
  //         wobble: {
  //           distance: 30,
  //           enable: true,
  //           speed: {
  //             angle: {
  //               min: -7,
  //               max: 7
  //             },
  //             move: 10
  //           }
  //         },
  //         life: {
  //           count: 0,
  //           delay: {
  //             value: 0,
  //             sync: false
  //           },
  //           duration: {
  //             value: 0,
  //             sync: false
  //           }
  //         },
  //         rotate: {
  //           value: {
  //             min: 0,
  //             max: 360
  //           },
  //           animation: {
  //             enable: true,
  //             speed: 30,
  //             decay: 0,
  //             sync: false
  //           },
  //           direction: "random",
  //           path: false
  //         },
  //         orbit: {
  //           animation: {
  //             count: 0,
  //             enable: false,
  //             speed: 1,
  //             decay: 0,
  //             delay: 0,
  //             sync: false
  //           },
  //           enable: false,
  //           opacity: 1,
  //           rotation: {
  //             value: 45
  //           },
  //           width: 1
  //         },
  //         links: {
  //           blink: false,
  //           color: {
  //             value: "#fff"
  //           },
  //           consent: false,
  //           distance: 100,
  //           enable: false,
  //           frequency: 1,
  //           opacity: 1,
  //           shadow: {
  //             blur: 5,
  //             color: {
  //               value: "#000"
  //             },
  //             enable: false
  //           },
  //           triangles: {
  //             enable: false,
  //             frequency: 1
  //           },
  //           width: 1,
  //           warp: false
  //         },
  //         repulse: {
  //           value: 0,
  //           enabled: false,
  //           distance: 1,
  //           duration: 1,
  //           factor: 1,
  //           speed: 1
  //         }
  //       },
  //       pauseOnBlur: true,
  //       pauseOnOutsideViewport: true,
  //       responsive: [],
  //       smooth: false,
  //       style: {},
  //       themes: [],
  //       zLayers: 100,
  //       emitters: [
  //         {
  //           autoPlay: true,
  //           fill: true,
  //           life: {
  //             wait: false
  //           },
  //           rate: {
  //             quantity: 5,
  //             delay: 0.15
  //           },
  //           shape: {
  //             options: {},
  //             replace: {
  //               color: false,
  //               opacity: false
  //             },
  //             type: "square"
  //           },
  //           startCount: 0,
  //           particles: {
  //             move: {
  //               direction: "top-right",
  //               outModes: {
  //                 top: "none",
  //                 left: "none",
  //                 default: "destroy"
  //               }
  //             }
  //           },
  //           position: {
  //             x: 0,
  //             y: 30
  //           }
  //         },
  //         {
  //           autoPlay: true,
  //           fill: true,
  //           life: {
  //             wait: false
  //           },
  //           rate: {
  //             quantity: 5,
  //             delay: 0.15
  //           },
  //           shape: {
  //             options: {},
  //             replace: {
  //               color: false,
  //               opacity: false
  //             },
  //             type: "square"
  //           },
  //           startCount: 0,
  //           particles: {
  //             move: {
  //               direction: "top-left",
  //               outModes: {
  //                 top: "none",
  //                 right: "none",
  //                 default: "destroy"
  //               }
  //             }
  //           },
  //           position: {
  //             x: 100,
  //             y: 30
  //           }
  //         }
  //       ],
  //       motion: {
  //         disable: false,
  //         reduce: {
  //           factor: 4,
  //           value: true
  //         }
  //       }
  //     }
  //     ),
  //   [],
  // );  

  
  const [swiper1heart1, setSwiper1Heart1] = useState(false);
  const [swiper1heart2, setSwiper1Heart2] = useState(false);
  const [swiper1heart3, setSwiper1Heart3] = useState(false);
  const [swiper1heart4, setSwiper1Heart4] = useState(false);
  const [swiper1heart5, setSwiper1Heart5] = useState(false);
  const [swiper1heart6, setSwiper1Heart6] = useState(false);

  const maximizeSwiper1Heart1 = () => {
      setSwiper1Heart1(!swiper1heart1);
  };

  const maximizeSwiper1Heart2 = () => {
      setSwiper1Heart2(!swiper1heart2);
  };
  
  const maximizeSwiper1Heart3 = () => {
      setSwiper1Heart3(!swiper1heart3);
  };
  
  const maximizeSwiper1Heart4 = () => {
      setSwiper1Heart4(!swiper1heart4);
  };

  const maximizeSwiper1Heart5 = () => {
      setSwiper1Heart5(!swiper1heart5);
  };
  
  const maximizeSwiper1Heart6 = () => {
      setSwiper1Heart6(!swiper1heart6);
  };

  const [swiper2heart1, setSwiper2Heart1] = useState(false);
  const [swiper2heart2, setSwiper2Heart2] = useState(false);
  const [swiper2heart3, setSwiper2Heart3] = useState(false);
  const [swiper2heart4, setSwiper2Heart4] = useState(false);
  const [swiper2heart5, setSwiper2Heart5] = useState(false);

  const maximizeSwiper2Heart1 = () => {
      setSwiper2Heart1(!swiper2heart1);
  };

  const maximizeSwiper2Heart2 = () => {
      setSwiper2Heart2(!swiper2heart2);
  };
  
  const maximizeSwiper2Heart3 = () => {
      setSwiper2Heart3(!swiper2heart3);
  };
  
  const maximizeSwiper2Heart4 = () => {
      setSwiper2Heart4(!swiper2heart4);
  };

  const maximizeSwiper2Heart5 = () => {
      setSwiper2Heart5(!swiper2heart5);
  };

  const [swiper3heart1, setSwiper3Heart1] = useState(false);
  const [swiper3heart2, setSwiper3Heart2] = useState(false);
  const [swiper3heart3, setSwiper3Heart3] = useState(false);
  const [swiper3heart4, setSwiper3Heart4] = useState(false);
  const [swiper3heart5, setSwiper3Heart5] = useState(false);
  const [swiper3heart6, setSwiper3Heart6] = useState(false);
  const [swiper3heart7, setSwiper3Heart7] = useState(false);

  const maximizeSwiper3Heart1 = () => {
      setSwiper3Heart1(!swiper3heart1);
  };

  const maximizeSwiper3Heart2 = () => {
      setSwiper3Heart2(!swiper3heart2);
  };
  
  const maximizeSwiper3Heart3 = () => {
      setSwiper3Heart3(!swiper3heart3);
  };
  
  const maximizeSwiper3Heart4 = () => {
      setSwiper3Heart4(!swiper3heart4);
  };

  const maximizeSwiper3Heart5 = () => {
      setSwiper3Heart5(!swiper3heart5);
  };

  const maximizeSwiper3Heart6 = () => {
      setSwiper3Heart6(!swiper3heart6);
  };

  const maximizeSwiper3Heart7 = () => {
      setSwiper3Heart7(!swiper3heart7);
  };

  const minimizeOthers = () => {
    setSwiper2Heart1(false);
    setSwiper2Heart2(false);
    setSwiper2Heart3(false);
    setSwiper2Heart4(false);
    setSwiper2Heart5(false);
    setSwiper3Heart1(false);
    setSwiper3Heart2(false);
    setSwiper3Heart3(false);
    setSwiper3Heart4(false);
    setSwiper3Heart5(false);
    setSwiper3Heart6(false);
    setSwiper3Heart7(false);
  }

  const minimizeOthers2 = () => {
    setSwiper1Heart1(false);
    setSwiper1Heart2(false);
    setSwiper1Heart3(false);
    setSwiper1Heart4(false);
    setSwiper1Heart5(false);
    setSwiper1Heart6(false);
    setSwiper3Heart1(false);
    setSwiper3Heart2(false);
    setSwiper3Heart3(false);
    setSwiper3Heart4(false);
    setSwiper3Heart5(false);
    setSwiper3Heart6(false);
    setSwiper3Heart7(false);
  }

  const minimizeOthers3 = () => {
    setSwiper1Heart1(false);
    setSwiper1Heart2(false);
    setSwiper1Heart3(false);
    setSwiper1Heart4(false);
    setSwiper1Heart5(false);
    setSwiper1Heart6(false);
    setSwiper2Heart1(false);
    setSwiper2Heart2(false);
    setSwiper2Heart3(false);
    setSwiper2Heart4(false);
    setSwiper2Heart5(false);
  }

  const [Msg, setMsg] = useState(false)

  const handleMsg = () => {
    setMsg(!Msg);
  }

  const [isMaximized, setIsMaximized] = useState(false); 
  
  const [heart, setHeart] = useState(false);

  setTimeout(() => { 
      setHeart(true);

  }, 500);

  // console.log(window.innerWidth > 1164)
  setTimeout(() => { 
      if(window.innerWidth >= 1160 && window.innerWidth <= 1164){   
        document.getElementById('song').volume = 0.5;
      }
  }, 1000);
  return (
    
      <>              
        { window.innerWidth < 1160 || window.innerWidth > 1164 ? <div className='displayerror'>
          <p>Só vai funcionar em seu notebook</p>
        </div> : ''}

        <div className='background-video'>
          
          {init ? <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          /> : ''}

          {heart ? <Particles
            id="tsparticles2"
            particlesLoaded={particlesLoaded2}
            options={optionshearts}
          /> : ''}

          <video autoPlay muted loop>
            {/* <video> */}
                <source id="background-video" src="/cachu.mp4" type="video/mp4"/>
            </video>
            <div className='hearts'>
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="HeartSwiper1"
                >
                  <SwiperSlide>
                    <div className= 'heart-1' onClick={() => {setIsMaximized(true); maximizeSwiper1Heart1(); handleMsg(); minimizeOthers()}}>
                      <img id='adjust-11' className={isMaximized && swiper1heart1 ? 'maximized-photo position-adjust' : 'normal-photo'} src="/fotos/antes.jpg" alt="" />
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className='heart-2' onClick={() => {setIsMaximized(true); maximizeSwiper1Heart2(); setMsg(false); minimizeOthers()}}>
                      <img id='adjust-12' className={isMaximized && swiper1heart2 ? 'maximized-photo position-adjust' : 'normal-photo'} src="/fotos/gess7.jpg" alt="" />
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className='heart-3' onClick={() => {setIsMaximized(true); maximizeSwiper1Heart3(); setMsg(false); minimizeOthers()}}>
                      <img id='adjust-13' className={isMaximized && swiper1heart3 ? 'maximized-photo position-adjust' : 'normal-photo'} src="/fotos/gess6.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='heart-4' onClick={() => {setIsMaximized(true); maximizeSwiper1Heart4(); setMsg(false); minimizeOthers()}}>
                      <img id='adjust-14' className={isMaximized && swiper1heart4 ? 'maximized-photo position-adjust' : 'normal-photo'} src="/fotos/gess5.jpg" alt="" />
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className='heart-5' onClick={() => {setIsMaximized(true); maximizeSwiper1Heart5(); setMsg(false); minimizeOthers()}}>
                      <img id='adjust-15' className={isMaximized && swiper1heart5 ? 'maximized-photo position-adjust' : 'normal-photo'} src="/fotos/gess8.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='heart-6' onClick={() => {setIsMaximized(true); maximizeSwiper1Heart6(); setMsg(false); minimizeOthers()}}>
                      <img id='adjust-16' className={isMaximized && swiper1heart6 ? 'maximized-photo position-adjust' : 'normal-photo'} src="/fotos/gess9.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                </Swiper>
              {/* PRONTO */}
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="HeartSwiper2"
                  >
                    <SwiperSlide>
                      <div className='heart-1' onClick={() => {setIsMaximized(true); maximizeSwiper2Heart1(); setMsg(false);  minimizeOthers2()}}>
                        <img className={isMaximized && swiper2heart1 ? 'maximized-photo position-adjust2' : 'normal-photo'} src="/fotos/gess4.jpg" alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='heart-2' onClick={() => {setIsMaximized(true); maximizeSwiper2Heart2(); setMsg(false);  minimizeOthers2()}}>
                        <img className={isMaximized && swiper2heart2 ? 'maximized-photo position-adjust2' : 'normal-photo'} src="/fotos/gess.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className='heart-3' onClick={() => {setIsMaximized(true); maximizeSwiper2Heart3(); setMsg(false);  minimizeOthers2()}}>
                        <img className={isMaximized && swiper2heart3 ? 'maximized-photo position-adjust2' : 'normal-photo'} src="/fotos/gess2.jpg" alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='heart-4' onClick={() => {setIsMaximized(true); maximizeSwiper2Heart4(); setMsg(false);  minimizeOthers2()}}>
                        <img className={isMaximized && swiper2heart4 ? 'maximized-photo position-adjust2' : 'normal-photo'} src="/fotos/bike1.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className='heart-5' onClick={() => {setIsMaximized(true); maximizeSwiper2Heart5(); setMsg(false);  minimizeOthers2()}}>
                        <img className={isMaximized && swiper2heart5 ? 'maximized-photo position-adjust2' : 'normal-photo'} src="/fotos/bike2.jpg" alt="" />
                      </div>
                    </SwiperSlide>

                </Swiper>
              {/* PRONTO */}
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="HeartSwiper3"
                >
                  <SwiperSlide>
                    <div className='heart-1' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart1(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-31' className={isMaximized && swiper3heart1 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal1.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='heart-2' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart2(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-32' className={isMaximized && swiper3heart2 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal2.jpg" alt="" />
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className='heart-3' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart3(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-33' className={isMaximized && swiper3heart3 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal3.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='heart-4' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart4(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-34' className={isMaximized && swiper3heart4 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal5.jpg" alt="" />
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className='heart-5' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart5(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-35' className={isMaximized && swiper3heart5 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal6.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='heart-6' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart6(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-36' className={isMaximized && swiper3heart6 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal7.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='heart-7' onClick={() => {setIsMaximized(true); maximizeSwiper3Heart7(); setMsg(false);  minimizeOthers3()}}>
                      <img id='adjust-37' className={isMaximized && swiper3heart7 ? 'maximized-photo position-adjust3' : 'normal-photo'} src="/fotos/casal8.jpg" alt="" />
                    </div>
                  </SwiperSlide>

                </Swiper>
            </div>
        </div>
        <div className='msgs'>
          
          <p className={ Msg ? 'msg1' :''}>Neste dia através de ações misteriosas e na comemoração do</p>
          <p className={ Msg ? 'msg1-1' :''}>aniversário de uma amiga e sem esperarmos, começávamos...</p>
        
        </div>
        <div className='msgs'>

          <p className='msg2'>"Que a sua vida seja sempre iluminada,</p>
          <p className='msg2-1'>como você ilumina a minha.</p>
          <p className='msg2-2'>Feliz aniversário, meu amor!</p>
          <p className='msg2-3'>Que todos os seus desejos se realizem,</p>
          <p className='msg2-4'>pois você merece ser muito feliz."</p>

        </div>
        { window.innerWidth >= 1160 && window.innerWidth <= 1164 ?
          <div className='songdiv'>
            <audio id='song' controls autoPlay>
              <source src={music} type='audio/mpeg'/>
            </audio>
            <p className='songname'>3030 - Manhã De Sol</p>
          </div> :'' }
    </>
  )
}

export default App
