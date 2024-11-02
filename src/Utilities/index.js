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
    if(isExist){ }
    favorite.push(coffee)
    localStorage.setItem("favorites", JSON.stringify(favorite))
    toast.success('Successfully added to Favorite')
}

// and remove a coffee from local storage
const removeFavorite = id =>{
    const favorite = storedAllFav();
    const remaining = favorite.filter(coffee => coffee.id !== id)
    localStorage.setItem("favorites", JSON.stringify(remaining));
    toast.success('Successfully removed from Favorite');
}

export { addFavorite, storedAllFav, removeFavorite }