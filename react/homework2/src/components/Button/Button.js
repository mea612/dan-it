import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
    btn: {
        width: '40%',
        backgroundColor: '#fff',
        border: '2px solid #528ec1',
        color: '#528ec1',
        padding: '8px 20px',
        borderRadius: '4px',
        textTransform: 'uppercase',
        fontWeight: '700',
        transition: 'background-color .3s, color .3s',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#528ec1'
          },
        '&:focus': {
            outline: 'none'
        }
    },
    
}


class Button extends Component {
    render() {
        const{onClick, title, classes} = this.props;
    
        return (
            <button onClick={onClick} className={classes.btn} >{title}</button>
        );
    }
}

const StyledButton = withStyles(styles)(Button);

StyledButton.propsTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default StyledButton;
