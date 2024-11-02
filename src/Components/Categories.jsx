import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    console.log(categories)
    return (
        <div role="tablist" className="tabs">
            {categories.map(category => (
                <NavLink key={category.category}
                 to={`category/${category.category}`}
                 role="tab" className="tab">{category.category}</NavLink>
            ))}
        </div>
    );
};

export default Categories;