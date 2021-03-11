// import { Star } from '../themes/icons/Star';
import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';
import * as Icons from '../../themes/icons'

const useStyles = createUseStyles({
    icon: {
        cursor: 'pointer',
        
    }
})

const Icon = (props) => {
    const classes = useStyles();
    const {type, color, onClick, isFavourite, title, className, width, height} = props;
    const IconJSX = Icons[type]

    if (!IconJSX) return null
    // return (
    //     <span onClick={onClick} className={classes.icon} title={title}>
    //         <Star color={color} filled={isFavourite}/>
    //     </span>
    // );
    return (
        <span onClick={onClick} className={classes.icon} title={title}>
            {IconJSX({
                color: color,
                className: className,
                filled: isFavourite,
                width: width,
                height: height
        })}
    </span>
    )
}

Icon.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool,
}

export default Icon;
