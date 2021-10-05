const arr = process.argv.slice(2);
const sum = (stdin, std) => {
  return stdin + Number(std);
};
const result = arr.reduce(sum, 0);
console.log(result)