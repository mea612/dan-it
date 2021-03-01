
import './App.css';
import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Modal from "./components/Modal/Modal";
import withStyles from 'react-jss';

const styles = {
  container: {
    width: 1200,
    margin: "0 auto",
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0'
  }
}



class App extends Component {
  constructor() {
    super();
    
    this.state = {
      cards: [],
      modal: {
        isOpen: false,
      },
      cart: []
    }
  }
  
  componentDidMount = () => {
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
      .then(r => {
        let savedCart;
        try {
          savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
          this.setState({cart: savedCart})
        } catch(e) {
          console.error(e);
        }
        return r;
      })
      .then(data => this.setState({cards: data}))
  }

  componentDidUpdate = () => {
     const { cards, cart } = this.state;
     const favouriteItems = cards.filter(card => card.isFavourite).map(card => card.id);
     localStorage.setItem('favourite-items', JSON.stringify(favouriteItems));
     localStorage.setItem('cart', JSON.stringify(cart));
  }

  toggleFavourite = (cardId) => {
     const { cards } = this.state;
     const favCards = cards.map(card => 
      (card.id === cardId) ? {...card, isFavourite: !card.isFavourite} : card
    )
    this.setState({cards: favCards})
  }

 addToCart = (id) => {
   const { cart } = this.state;
   if(!cart.includes(id)) {
    this.setState({
      cart:  [...cart, id]
    });
   }
   
 }

  openModal = (id) => {
    this.setState({
      modal: {
        isOpen: true,
        toCartId: id
      }
    })
  }

  render() {
    const{cards, modal} = this.state;
    const { classes } = this.props;
    // console.log(this.state.cards);
    return (
      <div>
      <Header 
        title='Digital'
      />
      <div className={classes.container}>
        <div className={classes.cardContainer}>
          <Cards cards={cards} 
            toggleFavourite={this.toggleFavourite}
            openModal={this.openModal}
          />
        </div>
      </div>
        <Modal 
          onClose={() => this.setState({
            modal: {
              isOpen: false
            }
          })}
          show={modal.isOpen}
          addToCart={this.addToCart}
          id={modal.toCartId}
        />
      </div>
      
    );
  }
}

export default withStyles(styles)(App);


