// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2);
};
const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2)
};
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=function(doubleValue){
    return function(value){
        return doubleValue*value;
    };
};
const fareTripler=createFareMultiplier(3);
const fareDoubler=createFareMultiplier(2);
const selectDifferentDrivers=function(drivers,driversToReturn){
    return driversToReturn(drivers);
};
