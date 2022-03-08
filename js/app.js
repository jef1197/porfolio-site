import '../css/style.css';
import torontoImg from '../dist/assets/toronto.webp'


// Fullpage scroll js

new Pageable("#fullpage", {
    animation: 800,
    delay: 100,
    freeScroll: true,
});

// partcle background
$("#tsparticles")
    .particles()
    .init({
            fullScreen: false,
            autoPlay: true,
            background: {
                color: {
                    value: "#fff",
                },
                image: `url(${torontoImg})`,
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
                opacity: 1,
            },
            backgroundMask: {
                composite: "destination-out",
                cover: {
                    color: {
                        value: {
                            r: 0,
                            g: 0,
                            b: 0
                        }
                    },
                    opacity: 1
                },
                enable: true
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 90,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onDiv: {
                        selectors: [],
                        enable: false,
                        mode: [],
                        type: "circle"
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        mix: false,
                        opacity: 1,
                        size: 100
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad"
                    },
                    slow: {
                        factor: 3,
                        radius: 200
                    },
                }
            },
            particles: {
                links: {
                    distance: 150,
                    enable: true,
                    frequency: 1,
                    opacity: 1,

                    width: 1,
                    warp: false
                },
                move: {
                    angle: {
                        offset: 0,
                        value: 90
                    },
                    enable: true,
                    speed: 2,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                        factor: 1000
                    },
                    limit: 100,
                    value: 80
                },
                reduceDuplicates: false,
                size: {
                    random: {
                        enable: true,
                        minimumValue: 1
                    },
                    value: {
                        min: 1,
                        max: 30
                    },
                },
                zIndex: {
                    value: 0,
                    opacityRate: 1,
                    sizeRate: 1,
                    velocityRate: 1
                }
            },
            detectRetina: true,
        },
    );

// project image slider

// new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        padding: '2rem',
        drag   : true,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        lazyLoad: 'nearby',
        cover      : true,
		height: '50vh',
    } );
    splide.mount();
} );

// form validation

const constraints = {
    name: {
        presence: { allowEmpty: false }
    },
    email: {
        presence: { allowEmpty: false },
        email: true
    },
    message: {
        presence: { allowEmpty: false }
    }
};

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value
    };

const errors = validate(formValues, constraints);

if (errors) {
    event.preventDefault();
    const errorMessage = Object
        .values(errors)
        .map(function (fieldValues) { 
            return fieldValues.join(', ')
        })
        .join("\n");

    alert(errorMessage);
}
}, false);

console.log('working')