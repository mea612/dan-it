import React, { Component } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
    btnClose: {
        outline: 'none',
        border: 'none',
        background: 'none',
        color: '#528ec1',
        fontSize: '18px',
        transition: 'all .3s',
        marginLeft: 'auto',
        '&:hover': {
            transform: 'scale(1.3)',
        }
    }
}

class CloseButton extends Component {
    render() {
        const{onClick, title, classes} = this.props;
        return (
            <button onClick={onClick} className={classes.btnClose}>{title}</button>
        );
    }
}

const StyledCloseButton = withStyles(styles)(CloseButton);

StyledCloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default StyledCloseButton;