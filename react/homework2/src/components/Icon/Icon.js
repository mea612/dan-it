import React, { Component } from 'react';
import { Star } from '../themes/icons/Star';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';


const styles = {
    icon: {
        cursor: 'pointer',
        
    }
}


class Icon extends Component {
    
    render() {
        const {color, onClick, classes, isFavourite, title} = this.props;

        return (
            <span onClick={onClick} className={classes.icon} title={title}>
                <Star color={color} filled={isFavourite}/>
            </span>
        );
    }
}

const StyledIcon = withStyles(styles)(Icon)
StyledIcon.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool,
}

export default StyledIcon;
