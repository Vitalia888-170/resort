import valid from 'card-validator';

export default function validate(values) {
   let errors = {};
   let creditCard = valid.number(values.number);
   creditCard.expirationDate = valid.expirationDate(values.expiry);
   creditCard.cardholderName = valid.cardholderName(values.name);
   creditCard.cvv = valid.cvv(values.cvc);
   errors.show = true;
   errors.variant = "danger";
   errors.message = "An unknown errors ocurred. Please try again later";
   errors.cname = false;
   errors.cnumber = false;
   errors.cexp = false;
   errors.ccvv = false;
   // Card CVC
   if (values.cvc === null) {
      errors.message = "Credit card CVC is not complete"
   } else if (creditCard.cvv.isValid) {
      errors.ccvv = true
   } else {
      errors.message = "Credit card CVC is invalid"
   }
   //Card expiration date
   if (values.expiry === null) {
      errors.message = "Credit card expiration date is not complete"
   } else if (creditCard.expirationDate.isValid) {
      errors.cexp = true
   } else {
      errors.message = "Credit card expiration date is invalid"
   }
   //Card number
   if (values.number === null) {
      errors.message = "Credit card number is not complete"
   } else if (creditCard.isValid) {
      errors.cnumber = true
   } else {
      errors.message = "Credit card number is invalid"
   }

   //Cardholder name
   if (values.name === null) {
      errors.message = "Cardholder name is not complete"
   } else if (creditCard.cardholderName.isValid) {
      errors.cname = true
   } else {
      errors.message = "Cardholder name is invalid"
   }
   if (errors.cname && errors.cnumber && errors.ccvv && errors.cexp) {
      errors.variant = "success";
      errors.message = "Credit card is valid"
   }
   return errors;
}