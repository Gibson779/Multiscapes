import data from "../assets/data"
import Service from "../component/Service"

export default function Services(){
    return(

        <>
        <main className="services">

      <section className="service__container">
        <h1 className="service__header">Our Services</h1>
        <p className="services__text">
          Transform your outdoor space with our professional driveway and landscaping services. We specialise in creating durable, attractive driveways alongside beautifully designed gardens and outdoor areas that enhance the appearance and value of your property. From block paving, resin, and tarmac driveways to patios, turfing, fencing, and complete garden makeovers, our experienced team delivers high-quality workmanship tailored to your needs. Whether you’re looking for a modern, low-maintenance finish or a traditional outdoor design, we provide reliable service, attention to detail, and results built to last.
        </p>
      </section>
      
    <div className="service__items">
      {data.map(item => (
        <Service
          key={item.id}
          {...item}
        />
      ))}

    </div>
 </main>

    </>
  )
}