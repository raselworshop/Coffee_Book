
const Card = ({coffee}) => {
    const {name, iamge, category, origin, type, id, rating, popularity }=coffee || {};
    return (
        <div>
            <p>{id}</p>
           <h3>{name}</h3>
        </div>
    );
};

export default Card;