
function whoAmI(name, age) {
   let yob = yearOfBirth(age);
   console.log('Hi, my name is Chris and I\'m 29 years old');
   console.log(`I was born in ${yearOfBirth}`);
}

function yearOfBirth(age) {
  let year = 2018 - age;

}
whoAmI("Chris", 29);