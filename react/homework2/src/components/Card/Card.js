// import classes from '*.module.css';
import React, { Component } from 'react';
import Button from "../Button/Button";
import withStyles from 'react-jss';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

const styles = {
    card: {
        width: 'calc((100% / 3) - 45px)',
        border: '2px solid #eaeaea',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        boxShadow: '1px 3px 5px -2px rgb(215 221 225 / 60%)',
    },
    cardImage: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
    },
    priceContainer: {
        fontSize: '18px',
        fontWeight: '500',
    },
    addInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}

class Card extends Component {

    
    
    render() {
        const {
            card: {
                name,
                price,
                image,
                id,
                color,
                isFavourite
            },
            toggleFavourite,
            classes,
            openModal,
        } = this.props;

        return (
            <div className={classes.card}>
                <img className={classes.cardImage} src={image} alt=""/>
                <div className={classes.addInfo}>
                    <h4>{name}</h4>
                    
                    <Icon 
                        onClick={() => {
                            toggleFavourite(id)
                        }}
                        // onMouseEnter={() => console.log('SVG HOVER')}
                        color='gold'
                        isFavourite={isFavourite}
                        title={'Add to favourites'}
                    />
                </div>
                
                <p><b>color:</b> {color}</p>
                <p className={classes.priceContainer}>price: ${price}.<sup>00</sup></p>
                <p><b>SN:</b> {id}</p>
                    
                <Button 
                    title="Add to Cart"
                    onClick={() => {
                        openModal(id) 
                        // console.log(id)
                    }
                    }
                        

                />
            </div>
        );
    }
}

const StyledCard = withStyles(styles)(Card);
StyledCard.propTypes = {
    card: PropTypes.object.isRequired,
    toggleFavourite: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
}


export default StyledCard;