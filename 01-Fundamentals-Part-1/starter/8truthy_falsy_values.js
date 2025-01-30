// truthy and falsy values
// while comparing we usually converts a variable to boolean type. While conversion it follows below rules to assign true /false to a var
// There are 5 falsy values
/*
1. 0
2. ''
3. undefined
4. null
5. NaN
*/
// Every thing else is considered as truthy value

let height;
if (height) {
  console.log("Height is " + height);
} else {
  console.log("height is undefined");
}
