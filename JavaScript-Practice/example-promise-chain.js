let promiseToCycle = function () {
    return new Promise(function (resolve, reject) {
        let inTenth = 10;
        if (inTenth) {
            resolve({ inTenth: "Cycle Promise" });
        } else {
            reject({ inTenth: false });
        }
    })
}

let promiseToBike = function (status) {
    return new Promise(function (resolve, reject) {
        if (status.inTenth) {
            status.inTwelveth = "Bike Promise"
            resolve(status);
        } else {
            status.inTwelveth = "Off"
            reject(status);
        }
    })
}

let promiseToMarried = function (status) {
    return new Promise(function (resolve, reject) {
        if (status.inTwelveth == "Bike Promise") {
            status.afterJob = "Married Promise";
            resolve(status);
        } else {
            status.afterJob = "Unmarried Dead";
            reject(status);
        }
    })
}

promiseToCycle().then(function (result) {
    console.log(result);
    return promiseToBike(result);
}).then(function (result) {
    console.log(result);
    return promiseToMarried(result);
}).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
})