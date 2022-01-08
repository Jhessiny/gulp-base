console.log("oi");

const foo = () => {
  const array = [2, 3, 7, 8];
  const a = array.find((el) => el === 8);
  return a;
};

console.log(foo());
