import data from "../assets/data"
import Service from "../component/Service"
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
     
       <section className="about">
       <div className="about__container">

        <div className="about__text">
        <h1 className="about__header">ABOUT US</h1>

        <p className="about__paragraph"> 
          At Mutlicsapes, we are passionate about transforming outdoor spaces with high-quality driveway and landscaping solutions. With years of experience in the industry, we have built a reputation for reliable service, skilled workmanship, and attention to detail. We work closely with homeowners and businesses to create attractive, practical outdoor areas tailored to each customer’s style and budget.
          From block paving, resin, and tarmac driveways to patios, fencing, turfing, and full garden renovations, we take pride in delivering durable results that enhance both the appearance and value of your property. Our team is committed to using quality materials, maintaining high standards, and ensuring every project is completed professionally from start to finish.
        </p>
        </div>

        <img src="../images/garden reno 2.jpg" alt="About" className="about__image" />
        
     
        
       </div>
       </section>

       <section className="why_us">
        <h1 className="whyus_header">WHY CHOSE US</h1>
        <p className="whyus_text">We specialists in all aspects of hard & soft domestic landscape design, construction & maintenance around Greater Manchester, delivering high-quality outdoor transformations with exceptional attention to detail. We help homeowners create functional, attractive outdoor spaces tailored to their property and lifestyle.
                                  Our services include new driveway installations, block paving, patios, turfing, fencing, garden landscaping. From complete garden makeovers to smaller exterior improvements, every project is completed to a high standard. A strong focus on quality finishes that are built to last.
                                  With free quotes, home surveys, and a commitment to customer satisfaction, we pride ourselves on delivering reliable service, expert craftsmanship, and professional results from start to finish.</p>
       </section>

       <section className="recent_work">
        <h1 className="recent_header">RECENT WORK</h1>
         
            <div className="service__items">
              {data.map(item => (
                <Service
                  key={item.id}
                  {...item}
                />
              ))}
               </div>
       </section>

       <section className="get_intouch">
        <div className="intouch_container">
              <h1>CONTACT US TODAY</h1>
              <p className="contact_text">Get in touch with our friendly team today for professional driveway and landscaping services across Greater Manchester. Whether you’re planning a new driveway, patio installation, garden transformation, or exterior cleaning service, we’re here to help with expert advice and free no-obligation quotes.</p>
             </div>
               </section>

              <div className="button-container">
                <div className="link">
                <Link to="/contact">
              <button className="contact_btn">Contact US</button>
               <a href="tel:030438303">
               <button className="call_btn">Call (num)</button>
               </a>
               </Link>
               </div>
              </div>
             
     





           </>
    )
}