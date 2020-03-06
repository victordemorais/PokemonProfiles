export const capitalize = value => {
  console.log(value, 'o que ta vindo');
  if (!value) return '';
  return value
    .toLowerCase()
    .replace('.', '. ')
    .split(' ')
    .map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(' ')
    .split(/['’]/g)
    .map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join("'");
};
