export default function orderItems(items, orderKey, orderReverse) {
  const sortedItems = items.sort((a, b) => {
    if (a[orderKey] > b[orderKey]) return 1;
    if (a[orderKey] < b[orderKey]) return -1;
    return 0; // is equal
  });
  if (orderReverse) return sortedItems.reverse();
  return sortedItems;
}
