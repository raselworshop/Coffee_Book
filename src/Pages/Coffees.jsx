import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffees = () => {
    const data = useLoaderData()
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)}
            </div>
            <button className="btn btn-warning" onClick={() => navigate('/coffees')}>View All</button>
        </>
    );
};

export default Coffees;