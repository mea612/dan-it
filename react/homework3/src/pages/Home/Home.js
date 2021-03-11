import React from 'react';
import Cards from '../../components/Cards/Cards';
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    container: {
      width: '75em',
      margin: "0 auto",
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0'
    }
  })

const Home = (props) => {
    const classes = useStyles();
    const { cards, toggleFavourite, openModal} = props;
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.cardContainer}>
                    <Cards cards={cards} 
                        toggleFavourite={toggleFavourite}
                        openModal={openModal}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Home;