import './Card.css';

function Card(props){
    return (

        <div className="card">
            <div className="card-image">
                <img src={props.image}/>
            </div>
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-subtitle">
                {props.subtitle}
            </div>
            <div className="card-description">
                {props.description}
            </div>
            <div className="card-readmore">
                <button>Read More</button>
            </div>
        </div>
    );
}

export default Card;