import { useState } from 'react';
import validate from './validate';

const useCardForm = () => {
   const [values, setValues] = useState({
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
   });
   const [error, setError] = useState();
   const handleFocus = (e) => {
      setValues({
         ...values,
         focus: e.target.name
      })
   }
   const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
         ...values,
         [name]: value
      })
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      setError(validate(values));
   }

   return { handleChange, handleFocus, handleSubmit, values, error }
}

export default useCardForm;