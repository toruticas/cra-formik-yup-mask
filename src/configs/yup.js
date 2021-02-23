// doc: https://github.com/jquense/yup
import * as Yup from 'yup'
import {cpfvalidator} from '../helpers/validators'

Yup.addMethod(Yup.string, 'complex', function(message) {
  return this.test('complex', message, function(value) {
    return value && value.indexOf('@') > -1
  });
});

Yup.addMethod(Yup.string, 'cpf', function(isFormatted, message) {
  return this.test('cpf', message, function(value) {
    if (isFormatted) {
      return cpfvalidator(value.split('.').join('').split('-').join(''))
    } 

    return cpfvalidator(value)
  });
});

export {Yup}
