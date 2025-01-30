// Arrow fn is a type of fn expression which can be used for one liner expressions
// No need to write return when the code is just one line
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);
// We can also write complex fn having multiple lines using arrow fns
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1976, "Bob"));
