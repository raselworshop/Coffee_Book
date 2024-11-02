import { FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Card = ({ coffee, handleRemove }) => {
    const {pathname} = useLocation();
    // const {pathnam} = location;
    console.log(pathname)
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};
    return (
        <div className="flex relative">
            <Link
                to={`/coffees/${id}`}
                className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
            >
                <figure className='w-full h-48 overflow-hidden'>
                    <img className='rounded-xl' src={image} alt='' />
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl'>Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
            {
                pathname === '/dashboard' && (<div
                    onClick={()=>handleRemove(id)}
                    className="absolute -top-5 -right-5 p-4 bg-warning rounded-full cursor-pointer"><FaTrashAlt size={20}></FaTrashAlt> </div>)
            }
        </div>
    );
};

export default Card;