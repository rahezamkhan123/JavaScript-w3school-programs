function lift(floor) {

    let totalFloor = 5;

    if (floor == 0) {
        alert
        let result = alert("you reached to Ground Floor ")
        console.log("You reached to Ground floor !");
    } else if (floor == 1) {
        let result = alert("you reached to your floor  ")
        console.log("You reached to first floor !");
    } else if (floor == 2) {
        let result = prompt("you have to enter floor no. ")
        console.log("You reached to Second floor !");
    } else if (floor == 3) {
        let result = prompt("you have to enter floor no. ")
        console.log("You reached to Third floor !");
    } else if (floor == 4) {
        let result = prompt("you have to enter floor no. ")
        console.log("You reached to Fourth floor !");
    } else if (floor == 5) {
        let result = prompt("you have to enter floor no. ")
        console.log("You reached to Fifth floor !");
    } else if (totalFloor < 5) {
        alert("GOING DOWN")
        let x = parseInt(5) - 1;
        for (let i = x; i >= floor; i--) {
            alert(i);
        }
    }
}

lift(4);