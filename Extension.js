// Logic: you should just be able to change initialization of DOW start date to check for tuesdays
function checkForTuesdays() {
    let tuesdayCount = 0; 
    // here is where change should be made
    let daysOfWeek = 1;
    let daysInMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let y = 1901; y <= 2000; y++) {
        daysInMonths[1] = 28 + (y % 4 === 0 && y % 400 === 0 || y % 100 !== 0);
        
        for (let daysInMonth of daysInMonths) {
            daysOfWeek += daysInMonth % 7;
            if (daysOfWeek % 7 === 0) {
                tuesdayCount++
            }    
        }
    }
    return tuesdayCount
}
console.log(checkForTuesdays())