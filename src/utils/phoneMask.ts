export const phoneMask = (number: string) => {
  number = number.replace(/\D/g, "");
  number = number.replace(/^(\d{2})(\d)/g, "($1) $2");
  number = number.replace(/(\d)(\d{4})$/, "$1-$2");
  return number;
};
