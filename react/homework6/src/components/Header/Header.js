import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import Badge from "../Badge/Badge";
import { favouriteCount, amountInCart } from '../../store/selectors';
import { useSelector } from 'react-redux';

const useStyles = createUseStyles({
    siteHeader: {
        backgroundColor: '#182e49',
        padding: '30px 0'
    },
    headerContainer: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        color: '#fff',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '26px',
        fontWeight: '700',
        letterSpacing: '0.1rem',
        transition: 'color .3s',
        '&:hover': {
            color: 'gold'
        }
    },
    nav: {
        marginLeft: 'auto',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '15px',
        fontWeight: '700',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all .3s',
        '&:hover': {
            color: 'gold'
        },
        '&:not(:last-child)': {
            marginRight: '20px'
        }, 
    },
    navStar: {
        position: 'relative',
        top: '5px',
        '&:hover path': {
            stroke: 'gold'
        }
        
    },
    navCart: {
        position: 'relative',
        top: '5px',
        '&:hover path': {
            fill: 'gold'
        }
    }
})

const Header = (props) => {
    const favouriteCards = useSelector(favouriteCount);
    const amountOfItemsInCart = useSelector(amountInCart);
    const classes = useStyles();
    const { isFavourite } = props;
        return (
            <div className={classes.siteHeader}>
                <div className={classes.headerContainer}>
                    <Link to="/" className={classes.logo}>Digital</Link>
                    <div className={classes.nav}>
                        <Link to="/" className={classes.navLink}>Home</Link>
                        <Link to="/favourites" className={classes.navLink}>
                        {favouriteCards > 0 && <Badge badgeContent={favouriteCards}/>}
                            <Icon className={classes.navStar}
                                
                                onClick={() => {
                                    console.log('favourite')
                                }}
                                type='star'
                                color='white'
                                isFavourite={isFavourite}
                                title={'Favourites'}
                                width='25'
                                height='25'
                            />
                        
                        </Link>
                        <Link to="/shopping-cart" className={classes.navLink}>
                            {amountOfItemsInCart > 0 && <Badge badgeContent={amountOfItemsInCart}/>}
                            <Icon className={classes.navCart}
                                // onClick={() => {
                                //     console.log('Shopping cart')
                                // }}
                                type='cart'
                                color='white'
                                // isFavourite={isFavourite}
                                title={'Shopping cart'}
                                width='25'
                                height='25'
                            />
                            
                        </Link>
                </div>
                </div>
                
                
            </div>
        );
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;