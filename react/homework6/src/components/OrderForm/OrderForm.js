import React from "react";
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import MyInput from "../MyInput/MyInput";
import {createUseStyles} from 'react-jss';
import { getCardsInCart } from "../../store/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { createOrderOperation } from "../../store/operations";

// const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const NUMBER_REGEXP = /^\d+$/;
// const APPARTMENT_REGEXP = /^\d+(\/\d+)*$/;
// const PHONE_REGEXP = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const LETTER_REGEXP = /[^0-9]/;
const useStyles = createUseStyles({
    orderForm: {
        width: '50%',
        position: 'relative',
        borderRight: '1px solid #d9d9d9',
        paddingRight: '30px'
        
    },
    orderFormTitle: {
        fontSize: '1em',
        lineHeight: '1.3em',
        fontWeight: '700',
        color: '#333333',
    },
    orderFormContainer: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between'
    },
    formBtn: {
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '#197bbd',
        border: '1px transparent solid',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: '500',
        padding: '1.4em 1.7em',
        fontSize: '0.9em',
        transition: '.3s',
        '&:hover': {
            backgroundColor: '#135e90',
        }
    }
})


const validationFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required*')
    .min(3, 'Your first name should be longer than 3 letters')
    .matches(LETTER_REGEXP, "Must be only letters"),
  lastName: Yup.string()
    .required('Required*')
    .min(3, 'Your last name should be longer than 3 letters')
    .matches(LETTER_REGEXP, "Must be only letters"),
  age: Yup.number()
    .typeError('Must be a number')
    .required('Required*')
    .positive()
    .integer()
    .lessThan(90, "Your age can't be more than 90")
    .moreThan(18, "Your age can't be less than 18"),
  address: Yup.string()
    .required('Required*')
    .min(2, 'Too Short!')
    .matches(LETTER_REGEXP, "Must be only letters"),
  apartment: Yup.number()
    .typeError('Must be a number').required('Required*'),
  city: Yup.string()
    .required('Required*')
    .min(2, 'Too Short!')
    .matches(LETTER_REGEXP, "Must be only letters"),
  country: Yup.string()
    .required('Required*')
    .min(2, 'Too Short!')
    .matches(LETTER_REGEXP, "Must be only letters"),
  postalCode: Yup.number()
    .typeError('Must be a number')
    .required('Required*')
    .integer()
    .positive()
    .min(0, "Can be from 0 to 9"),
  phone: Yup.number()
    .required('Required*')
    .typeError("Must be only integers")
    .positive(),

})
const OrderForm = () => {

  const classes = useStyles();
  const cardsInCart = useSelector(getCardsInCart);
  const dispatch = useDispatch();
  
  const handleSubmitForm = values =>
    dispatch(createOrderOperation(values, cardsInCart));

  return (
    <div className={classes.orderForm}>
      <h2 className={classes.orderFormTitle}>Shipping address</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          address: '',
          apartment: '',
          city: '',
          country: '',
          postalCode: '',
          phone: '',
        }}
        onSubmit={handleSubmitForm}
        // validate={validateForm}
        validationSchema={validationFormSchema}
      >
        {() => {
          
          return (
            <Form>
                <div className={classes.orderFormContainer}>
                    <MyInput
                      name="firstName"
                      type="text"
                      label="First name"
                      id="checkout_first_name"
                      marginRight='0.983em'
                    />
                    <MyInput
                      name="lastName"
                      type="text"
                      label="Last name"
                      id="checkout_last_name"
                    />
                </div>
              
                <MyInput name="age" type="text" label="Age" id="checkout_age"/>
                <MyInput name="address" type="text" label="Address" id="checkout_address" />
                <MyInput name="apartment" type="text" label="Apartment" id="checkout_apartment" />
                <MyInput name="city" type="text" label="City" id="checkout_city" />
                <div className={classes.orderFormContainer}>
                    <MyInput name="country" type="text" label="Country" id="checkout_country" marginRight='0.983em'/>
                    <MyInput name="postalCode" type="text" label="Postal code" id="checkout_postal_code"/>
                </div>
                <MyInput name="phone" type="text" label="Enter phone number" id="checkout_phone"/>
              <div>
                <button type="submit" className={classes.formBtn}>Proceed checkout</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OrderForm;













//   const validateForm = (values) => {
//     const errors = {}
//     const {firstName, lastName, age, address, apartment, city, country, postalCode, phone} = values;

//     if(!firstName) {
//         errors.firstName = "First name can't be empty"
//     } else if(firstName.length < 2) {
//         errors.firstName = "Min value is 2 characters"
//     }

//     if(!lastName) {
//         errors.lastName = "Last name can't be empty"
//     } else if(lastName.length < 2) {
//         errors.lastName = "Min value is 2 characters"
//     }

//     if(!age) {
//         errors.age = "Required field"
//     } else if (!NUMBER_REGEXP.test(age)) {
//         errors.age = "Value must be positive integer"
//     } else if(age < 18 || age > 90) {
//         errors.age = "The age must be a number between 18 and 90"
//     }

//     if(!address) {
//         errors.address = "Address can't be empty"
//     } else if(address.length < 3) {
//         errors.address = "Min value is 3 characters"
//     }

//     if(!apartment) {
//         errors.apartment = "Required field"
//     } else if(!APPARTMENT_REGEXP.test(apartment)) {
//         errors.apartment = "The appartment must be number with/without slash"
//     }

//     if(!city) {
//         errors.city = "City can't be empty"
//     } else if(city.length < 2) {
//         errors.city = "Min value is 2 characters"
//     }

//     if(!country) {
//         errors.country = "Country can't be empty"
//     } else if(country.length < 2) {
//         errors.country = "Min value is 2 characters"
//     }

//     if(!postalCode) {
//         errors.postalCode = "Postal code can't be empty"
//     } else if(!NUMBER_REGEXP.test(postalCode)) {
//         errors.postalCode = "Value must be integer"
//     } else if(postalCode.length < 4) {
//         errors.postalCode = "Postal code should include at least 4 numbers"
//     }

//     if(!phone) {
//         errors.phone = "Phone can't be empty"
//     } else if(!PHONE_REGEXP.test(phone)) {
//         errors.phone = "Must be correct phone format"
//     }

//     return errors;
//   }