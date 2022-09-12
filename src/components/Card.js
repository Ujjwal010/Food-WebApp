import './Card.css';
function Card(props) {
  return (
     <div className="card">
     <img src={require(`${props.image}`)} alt="sand"className="card_image"/>
     <p className="card_title">{props.title}</p>
     <p>{props.description}</p>
     </div>   
  );
}

export default Card;