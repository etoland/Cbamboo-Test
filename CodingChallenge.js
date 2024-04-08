// first create an object that holds 12 numbers (days in months)
// Jan 1 1900 was a Monday [0], Jan 2 1901 is Tuesday etc. - every year preceding count up from here - for loop 
// do a check if it its a leap year or not 
// first step should be to initialize the check 

function countingSundays() {
// sundayCount start at 0, and keep track of sundays
    let sundayCount = 0;
// daysOfWeek where 0 is Sunday, but initialize at 2 for Tuesday Jan 1
    let daysOfWeek = 2;
// daysInMoths keeps track of days in each month (respectively - with feb calc below)
    let daysInMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// for loop to run through the years
    for (let y = 1901; y <= 2000; y++) {
        // calulcate if leap year or not based on gregorian calendar conditions
        daysInMonths[1] = 28 + (y % 4 === 0 && y % 400 === 0 || y % 100 !== 0);
        // for of loop to iterate over each 
        for (let daysInMonth of daysInMonths) {
            // calc that shifts the day of the week to the next
            daysOfWeek += daysInMonth % 7;
            // if divisible by 7, its a sunday
            if (daysOfWeek % 7 === 0) {
                // then add to sunday count
                sundayCount++
            }
        }
    }
    return sundayCount
}
console.log(countingSundays())