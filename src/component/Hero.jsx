import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";



export default function Hero() {

 const slides = [
    {/*
      type: "video",
      src: "/videos/landscaping.MP4"
    }, */},
    {
      type: "image",
      src: "/images/stock2.jpg"
    },
    {
      type: "image",
      src: "/images/stock.jpg"
    },
  ];

  return (
    <section className="hero">
      
      
     <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="hero__slider"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            {slide.type === "video" ? (
              <video
                className="hero__bg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source 
                  src={slide.src} 
                  type="video/mp4" 
                />
              </video>
            ) : (
              <img
                src={slide.src}
                alt="Landscaping project"
                className="hero__bg"
              />
            )}

          </SwiperSlide>
        ))}

      </Swiper>


      <div className="hero__overlay"></div>

        
      <div className="hero__content">

  <span className="hero__tag">
    
  </span>

  <h1 className="hero_title">
    Multiscapes

  </h1>

  <p className="hero__subtitle">
    Creating stunning outdoor spaces across Greater Manchester 
    with quality craftsmanship and exceptional attention to detail.
  </p>

  <div className="cta-buttons">

    <Link to="/contact" className="btn-primary">
      Get A Free Quote
    </Link>

    <Link to="/gallery" className="btn-secondary">
      View Our Work
    </Link>

  </div>



</div>
    </section>
  );
}