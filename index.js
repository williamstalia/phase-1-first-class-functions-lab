// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
    return driversArray.slice(0, 2)
}
const returnLastTwoDrivers = function (driversArray) {
    return driversArray.slice(2, 5)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
        return function(multiplier) {
           return (multiplier * 4)
        }
    }
    
const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

const selectDifferentDrivers = function(drivers, eitherDriver) {
    return eitherDriver(drivers)
}