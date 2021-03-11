import Card from './../Card/Card';
import PropTypes from 'prop-types';

const Cards = (props) => {
    const { cards, toggleFavourite, openModal, favouriteCards, inFavourites, cardsInCart, inCart, marginRight} = props;

        return (
            cards.map(card => <Card 
            toggleFavourite={toggleFavourite} 
            card={card} key={card.id}
            openModal={openModal}  
            favouriteCards={favouriteCards}
            inFavourites={inFavourites}
            cardsInCart={cardsInCart}
            inCart={inCart}
            marginRight={marginRight}
            />)
        );
}

Cards.propTypes = {
    cards: PropTypes.array,
    toggleFavourite: PropTypes.func,
    openModal: PropTypes.func,
}

export default Cards;