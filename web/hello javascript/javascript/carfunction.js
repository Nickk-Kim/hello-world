// Alex Brown's
this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage = {
  car: "Aston Martin",
  getCar: function() {
    return this.car;
  }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

//Now work is over and Mark wants his car

console.log(storeGetCarForLater());

var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage);
console.log(theRealGetCarFunction());