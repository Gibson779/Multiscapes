export default function Home(){
    return(
        <>
     
       <section className="about">
       <div className="about__container">

        <div className="about__text">
        <h1 className="about__header">ABOUT US</h1>

        <p className="about__paragraph"> 
           With over 16 years of experience in the joinery trade, we take pride in delivering high-quality craftsmanship tailored to each client’s needs. From bespoke shelving and fitted doors to custom-built outdoor gazebos, our work combines precision, durability, and attention to detail.
           We specialise in all aspects of joinery, offering solutions that are both functional and beautifully finished. Whether it’s enhancing your home’s interior with made-to-measure storage or creating stunning outdoor structures, every project is completed to the highest standard.
           Our approach is simple: listen carefully, work closely with our clients, and bring their ideas to life with skill and care. No matter the size of the job, we are committed to reliable service and results that stand the test of time.
        </p>
        </div>

        <img src="./images/garden shed.jpg" alt="About" className="about__image" />
     
        
       </div>
       </section>

           </>
    )
}