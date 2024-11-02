import toast from "react-hot-toast";

// get all coffees from local storage
const storedAllFav = () => {
    const allFav = localStorage.getItem('favorites');
    if (allFav) {
        const parseAllFav = JSON.parse(allFav)
        console.log(parseAllFav)
        return parseAllFav;
    }else{
        console.log([])
        return [];
    }
}

// add a cofffee to the local storage
const addFavorite = coffee => {
    const favorite = storedAllFav();
    const isExist = favorite.find(item => item.id === coffee.id);
    if(isExist){ return toast.success('Successfully added to Favorite')}
    favorite.push(coffee)
    localStorage.setItem("favorites", JSON.stringify(favorite))
}

// and remove a coffee from local storage


export { addFavorite, storedAllFav }