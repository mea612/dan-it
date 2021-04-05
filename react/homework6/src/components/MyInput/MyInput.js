import React from 'react';
import { useField } from "formik";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    floatingLabel: {
        boxSizing: 'border-box',
        fontSize: '0.8571428571em',
        width: '100%',
        position: 'absolute',
        marginTop: '0.1em',   
        marginLeft: '1px',
        padding: '0 0.9166666667em',
        zIndex: '1',
        opacity: 0
    },
    orderFormField: {
        boxSizing: 'border-box',
        outline: 'none',
        width: '100%',
        borderRadius: '5px',
        padding: '0.9em',
        border: '1px solid #d9d9d9',
        '&::placeholder': {
            color: '#737373'
        },
        '&:focus': {
            border: '2px solid #197bbd',
        },
        marginBottom: '20px',
        
    },
    fieldContainer: {
        width: '100%',
        position: 'relative',
        marginRight: props => props.marginRight
    },
    error: {
        color: 'red',
        fontSize: '12px',
        fontWeight: '700',
        position: 'absolute',
        top: '70%',
        left: '10px'
    }
})

const MyInput = (props) => {
    const classes = useStyles(props);
    const { type, label, name, id } = props;
    const [field, meta] = useField(name);
    // console.log('field', field)
    // console.log('meta', meta)
    return (
        <div className={classes.fieldContainer}>
                <label className={classes.floatingLabel} htmlFor={id}>
                    {label}
                </label>
               
                <input className={classes.orderFormField}
                    id={id}
                    placeholder={label}
                    type={type}  
                    {...field}
                />
                {meta.error && meta.touched && (
                    <span className={classes.error}>{meta.error}</span>
                )}
        </div>
        
    );
};

export default MyInput;