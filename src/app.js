function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = { greet }; // just to test if the function is exportable
if (require.main === module) {
  // if yes call it
  console.log(greet('World'));
}
