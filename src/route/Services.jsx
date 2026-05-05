import data from "../assets/data"
import Service from "../component/Service"

export default function Services(){
    return(

        <>
        <main className="services">

      <section className="service__container">
        <h1 className="service__header">Our Services</h1>
        <p className="services__text">
          We offer a wide range of joinery and construction services. Every project is carried out with careful planning, skilled workmanship and high-quality materials to ensure lasting results.
          Customer satisfaction and safety are always our top priorities. Our team works professionally and responsibly on every job, creating spaces that are both practical and visually appealing. From small upgrades to complete garden renovations, we are committed to delivering reliable service and results you can be proud of.
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