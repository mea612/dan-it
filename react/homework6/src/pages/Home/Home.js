import React from 'react';
import Cards from '../../components/Cards/Cards';
import {createUseStyles} from 'react-jss';
import { useSelector } from 'react-redux';
import {getCards } from '../../store/selectors';


const useStyles = createUseStyles({
    container: {
      width: '80%',
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
    const cards = useSelector(getCards)
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.cardContainer}>
                    <Cards
                        cards={cards}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Home;