function checkSpeed(speed) {
    const speedLimit = 70;
    const maxPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints >= maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
// Testing the function
checkSpeed(80); 
checkSpeed(); 
checkSpeed();
