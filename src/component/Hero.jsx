import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img 
        src="/images/stock2.jpg" 
        alt="Home banner"
        className="hero__bg"
      />

      <div className="hero__content">
        <h1 className="hero_title">
         Premium Landscaping & <br/>
         Driveway Transformations 

        </h1>

        <p>
         Creating beautiful outdoor spaces across Greater Manchester
        </p>

         <div className="cta-buttons">
          <div className="link">
        <Link to="/contact">
        <button className="btn btn-primary">Get A Free Quote</button>
        </Link>
        <Link to="/gallery">
        <button className="btn btn-secondary">View Our Work</button>
        </Link>
        </div>
        </div>
      </div>
    </section>
  );
}