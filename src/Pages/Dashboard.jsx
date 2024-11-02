import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { removeFavorite, storedAllFav } from "../Utilities";
import Card from "../Components/Card";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = storedAllFav();
        setCoffees(favorites)
    }, []); 
    const handleRemove = (id) =>{
        removeFavorite(id)
        const favorites = storedAllFav();
        setCoffees(favorites)
    }
    return (
        <div>
            <Heading title='Welcome to Dashboard'
                subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'
            ></Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)}
            </div>
        </div>
    );
};

export default Dashboard;