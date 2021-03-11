import React from 'react';
import Cards from "../../components/Cards/Cards";
import Icon from "../../components/Icon/Icon"
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    container: {
      width: '75em',
      margin: "0 auto",
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '20px 0'
    },
    headerFavourites: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleFavourite: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: '20px',
        color: '#182e49',
        paddingLeft: '10px'
    },
    textFavourite: {
        paddingLeft: '15px'
    }
  })


const Favourites = (props) => {
    const classes = useStyles(props);
    const { favouriteCards, openModal, toggleFavourite} = props;
    // console.log(favouriteCards);
    return (
        
        <div>
            <div className={classes.container}>
                <div className={classes.headerFavourites}>
                    <Icon
                    type='star'
                    color='#182e49'
                    title={'Favourites'}
                    width='28'
                    height='28'
                    />
                    <p className={classes.titleFavourite}>Favourites</p>
                    <p className={classes.textFavourite}>Amount: {favouriteCards.length}</p>
                </div>
                <div className={classes.cardContainer}>
                    <Cards cards={favouriteCards} 
                        toggleFavourite={toggleFavourite}
                        openModal={openModal}
                        favouriteCards={favouriteCards}
                        inFavourites
                        marginRight='0.983em'
                    />
                </div>
            </div>
            
            
        </div>
    );
};

export default Favourites;