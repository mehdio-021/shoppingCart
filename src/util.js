const format = (price) => {
  return Number(price.toFixed(3)).toLocaleString() + "تومان";
};

export default format;
