const jonasObj = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1990,
    profession: 'teacher',
    friends: ['Michael', 'Steve', 'Peter'],
    hasDriversLicense: true,
    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is ${this.age} years old, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

// new age is created for the first time 
console.log(jonasObj.calcAge());
// for the subsequent call no need to call calcage again just access that variable
console.log(jonasObj.age);

// Challenege
// print
// 'jonas is x years old teacher, and he has a/no driver's license'
console.log(jonasObj.getSummary());