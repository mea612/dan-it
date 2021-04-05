import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    btn: {
        width: props => props.width,
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
    
})

const Button = (props) => {
    const classes = useStyles(props);
    const{onClick, title} = props;
    
        return (
            <button onClick={onClick} className={classes.btn} >{title}</button>
        );
}

Button.propsTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
