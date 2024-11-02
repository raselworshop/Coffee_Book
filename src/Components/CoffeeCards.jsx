import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const navigate = useNavigate();
    const coffees = useLoaderData();
    const obj = useParams();
    const { category } = obj;
    const [categorisedCoffees, setCategorisedCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...coffees].filter(coffee => coffee.category === category)
            setCategorisedCoffees(filteredByCategory)
        } else {
            setCategorisedCoffees(coffees.slice(0, 6))
        }
    }, [category, coffees])
    console.log(obj, coffees)

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {categorisedCoffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)}
            </div>
            <button className="btn btn-warning" onClick={()=>navigate('/coffees')}>View All</button>
        </>
    );
};

export default CoffeeCards;