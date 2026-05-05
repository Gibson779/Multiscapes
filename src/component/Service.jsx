export default function Service(props){
    
    return (

      <div className="service__card-wrapper">
     <div className="service__cards">
      <h2 className="entry__name">{props.name}</h2>
        <img className="services__image" src={props.image} alt={props.name}/>
      <p className="trip__dates">{props.date}</p>
      <p className="entry__text">{props.text}</p>
      </div>
    </div>
  );
}
