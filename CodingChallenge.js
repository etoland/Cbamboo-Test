// first create an object that holds 12 numbers (days in months)
// Jan 1 1900 was a Monday [0] - every year preceding count up from here - for loop 
// do a check if it its a leap year or not 
// first step should be to initialize the check 

function countingSundays() {
// sundayCount start at 0, and keep track of sundays
    let sundayCount = 0;
// daysOfWeek where 0 is Sunday, but initialize at 1 for Monday
    let daysOfWeek = 1;
// daysInMoths keeps track of days in each month (respectively - with feb calc below)
    let daysInMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// for loop to run through the years
    for (let y = 1901; y <= 2000; y++) {
        // calulcate if leap year or not based on gregorian calendar conditions
        daysInMonths[1] = 28 + (y % 4 === 0 && y % 400 === 0 || y % 100 !== 0);
        // for of loop to
        for (let daysInMonth of daysInMonths) {

        }
    }
}