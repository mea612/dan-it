import Card from './../Card/Card';
import PropTypes from 'prop-types';

const Cards = (props) => {
    
    const { cards, inCart, marginRight} = props;

        return (
            cards.map(card => <Card  
            card={card} key={card.id}
            inCart={inCart}
            marginRight={marginRight}
            />)
        );
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default Cards;