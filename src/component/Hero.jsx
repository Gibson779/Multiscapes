import { Link } from "react-router-dom";


export default function Hero() {


  return (
    <section className="hero">


    <img src="../images/edit.jpg" alt="HeroImage" className="hero__slider" />

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