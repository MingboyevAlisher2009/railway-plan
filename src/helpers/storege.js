const setItem = (key, value) => {
  localStorage.setItem(key, value);
  return;
};

const getItem = (key) => {
  localStorage.getItem(key);
  return;
};

const removeItems = () => {
  localStorage.clear();
  return;
};

export default { setItem, getItem, removeItems };
