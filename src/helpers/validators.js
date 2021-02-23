const cpfvalidator = (value = '') => {
  let cpf = value;
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf === '') return false;

  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }

  let add = 0;
  [...new Array(9)].forEach((_, i) => {
    add += parseInt(cpf.charAt(i), 0) * (10 - i);
  });
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9), 0)) return false;

  add = 0;
  [...new Array(10)].forEach((_, i) => {
    add += parseInt(cpf.charAt(i), 0) * (11 - i);
  });
  rev = 11 - (add % 11);

  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10), 0)) return false;

  return true;
};

export {cpfvalidator}
