import { setCards } from "./actions";

export const getCardsOperation = () => (dispatch) => {
    fetch('data.json')
      .then(res => res.json())
      .then(result => {
        let savedFavourites;
        try {
          savedFavourites = JSON.parse(localStorage.getItem('favourite-items'));
        } catch (e) {
            console.error(e);
        }
        if(!savedFavourites || !Array.isArray(savedFavourites) || !savedFavourites.length) {
            return result;
        } else {
            result.forEach(item => item.isFavourite = savedFavourites.indexOf(item.id) > -1)
        }
        return result;
      })
      .catch(console.error)
      .then(data => dispatch(setCards(data)))
}


