// Regular Functions vs. Arrow Functions
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const isMillenial = function () {
    // since it is a regular fn call, this will be undefined.
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    //isMillenial();
    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    // this is considered as reg fn call even though parent fn was called by jonas obj. So, when we try to access this.year we do undefined.year as reg fn's this is undefined. To solve this write the fn as arrow expression as it access this from its parent scope which is jonas in our case
    isMillenial();
  },

  greet: () => {
    // this will point to global this which is window
    console.log(this);
    // since we have a var declared with var it access that firstName as that is present on window obj
    // Hence instead of printing jonas it prints matilda
    // if there was no firstName then this.firstName returns undefined
    // Note: Never use arrow fns as methods

    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  // Only regular fns have access to arguments keyword
  // this is helpful when we try to call fn with more arguments. It simply stores values in index 0,1,2... so that we can loop arguments obj and get the values
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  //error
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
