import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    badge: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        width: '14px',
        height: '14px',
        fontSize: '12px',
        borderRadius: '50%',
        backgroundColor: 'gold',
        color: '#182e49',
        position: 'absolute',
        left: '15px',
        top: '-7px',
        zIndex: 2,
    }
})

const Badge = (props) => {
    const { badgeContent } = props;
    const classes = useStyles();
    return (
        <span className={classes.badge}>
            {badgeContent}
        </span>
    );
};

export default Badge;