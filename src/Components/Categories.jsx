import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    console.log(categories)
    
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {categories.map(category => (
                <NavLink key={category.category}
                    to={`category/${category.category}`}
                    role="tab" className={( {isActive} ) =>
                        `tab text-xl md:text-2xl font-thin ${isActive ? 'tab-active' : ''}`
                    
                      }>{category.category}</NavLink>
            ))}
        </div>
    );
};

export default Categories;