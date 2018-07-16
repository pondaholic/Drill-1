
function yearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  else {
    let year = 2018 - age;
  }
}

function whoAmI(name, age) {
   let yob = yearOfBirth(age);
   console.log('Hi, my name is Chris and I\'m 29 years old');
   console.log(`I was born in ${yob}`);
}


whoAmI("Chris", -29);