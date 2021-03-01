import React, { Component } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
    siteHeader: {
        backgroundColor: '#182e49',
        padding: '30px 0'
    },
    headerContainer: {
        width: '1200px',
        margin: '0 auto'
    },
    logo: {
        color: '#fff',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '26px',
        fontWeight: '700',
        letterSpacing: '0.1rem'
    }

}


class Header extends Component {
    render() {
        const { title,  classes} = this.props;
        return (
            <div className={classes.siteHeader}>
                <div className={classes.headerContainer}>
                    <a href="/" className={classes.logo}>{title}</a>
                </div>
                
            </div>
        );
    }
}

const StyledHeader = withStyles(styles)(Header);
StyledHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default StyledHeader;