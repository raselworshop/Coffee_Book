import { useParams } from "react-router-dom";

const CoffeeCards = () => {
    const obj = useParams();
    const {category} = obj;
    console.log(obj)
    return (
        <div>
            coffee cards .... {category}
        </div>
    );
};

export default CoffeeCards;