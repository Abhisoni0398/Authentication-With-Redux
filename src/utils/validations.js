/* eslint-disable prettier/prettier */
import validator from 'is_js';

const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  const {userName, email, password} = data;
  if (userName !== undefined) {
    let emptyValidationText = checkEmpty(
      userName,
      'Please enter valid username',
    );
    if (emptyValidationText !== '') {
      console.log('EmptyValidatorText', emptyValidationText);
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(
        userName,
        3,
        'Username should be minimum 3 letters',
      );
      if (minLengthValidation !== '') {
        console.log('minLengthValidation', minLengthValidation);
        return minLengthValidation;
      }
    }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, 'Please enter valid email');
    if (emptyValidationText !== '') {
      console.log('emptyValidation', emptyValidationText);
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        console.log('email', email);
        return 'Please enter a correct email';
      }
    }
  }

  if (password !== undefined) {
    let emptyValidationText = checkEmpty(
      password,
      'Please enter valid password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(
        password,
        6,
        'password length should be 6',
      );
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }
}
