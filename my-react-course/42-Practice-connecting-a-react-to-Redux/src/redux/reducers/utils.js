export function nextId(items) {
   return items.length ? Math.max(...items.map(item => item.id)) + 1 : 0;
}

export function deleteItemByID(items , id) {
   return [...items].filter(item => item.id !== id);
}