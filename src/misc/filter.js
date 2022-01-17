/* eslint eqeqeq: "off" */

export default function filterItems(items, filters) {
  const { column, value } = filters;

  switch (filters.condition) {
    case 'more':
      return items.filter((item) => item[column] > value);
    case 'less':
      return items.filter((item) => item[column] < value);
    case 'equal':
      return items.filter((item) => item[column] == value);
    case 'contains':
      return items.filter((item) => item[column].toLowerCase().includes(value.toLowerCase()));
    default:
      return items;
  }
}
