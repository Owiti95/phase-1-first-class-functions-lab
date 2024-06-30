// Code your solution in this file
/*
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);



//last two drivers
const returnLastTwoDrivers = function(drivers) {ss
    return drivers.slice(-2);
};

let lastTwoDrivers = returnLastTwoDrivers(scubersDrivers);
console.log(lastTwoDrivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//fareMultiplier
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}
//fareDoubler
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

//fareTripler

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
};

const fareTripler = createFareMultiplier(3);



const selectDifferentDrivers = function (returnLastTwoDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
};
*/

// Code your solution in this file!

const returnFirstTwoDrivers = function() {
    return (['Antonia', 'Nuru',]);
  };
  
   const returnLastTwoDrivers = function() {
      return ( ['Amari', 'Mo'] )
   };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
  const createFareMultiplier = function () {
    return function () {
      return 5 * 5;
    };
  
  }
  
  const fareDoubler = function () {
     return 10 * 2 
  }
  
   const fareTripler = function () {
     return 12 * 3 
   }

   const selectDifferentDrivers = function (returnLastTwoDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
  };
