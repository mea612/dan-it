import React, { Component } from 'react';
import Card from './../Card/Card';
import PropTypes from 'prop-types';


class Cards extends Component {
    render() {
        const { cards, toggleFavourite, openModal} = this.props;

        return (
            cards.map(card => <Card 
            toggleFavourite={toggleFavourite} 
            card={card} key={card.id}
            openModal={openModal}  
            />)
        );
    }
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    toggleFavourite: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
}

export default Cards;