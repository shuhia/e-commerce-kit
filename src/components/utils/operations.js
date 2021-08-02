function replaceItemIn(array, newItem) {
  return array.map((prev) => (prev.id === newItem.id ? newItem : prev));
}
