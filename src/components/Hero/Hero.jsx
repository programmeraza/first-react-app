import React from 'react'
import './hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    AOS.init();
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',

    });
    return (
        <section className="hero">
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="container">
                    <div className="hero__wrapper">
                        <h2 className="hero__title">
                            Крупнейшая коллекция природных артефактов
                        </h2>
                        <p className="hero__text">
                            Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.
                        </p>
                        <button className='hero__btn'>
                            <span>Исследовать</span><svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.7071 8.20711C44.0976 7.81658 44.0976 7.18342 43.7071 6.79289L37.3431 0.428932C36.9526 0.0384078 36.3195 0.0384078 35.9289 0.428932C35.5384 0.819457 35.5384 1.45262 35.9289 1.84315L41.5858 7.5L35.9289 13.1569C35.5384 13.5474 35.5384 14.1805 35.9289 14.5711C36.3195 14.9616 36.9526 14.9616 37.3431 14.5711L43.7071 8.20711ZM0 8.5L43 8.5V6.5L0 6.5L0 8.5Z" fill="#BAE249" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero