import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
      'Name can only contain letters or numbers.'
    )
    .required('Required'),
  email: Yup.string()
    .matches( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      'There must be 6 upper and lower case letters and 1 number.'
    ),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      'There must be 6 upper and lower case letters and 1 number.'
    ),
});


