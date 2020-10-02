
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let minItem = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minItem) {
                minItem = array[i];
            } else {
                continue;
            }
        }
        return minItem;
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let maxItem = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxItem) {
                maxItem = array[i];
            } else {
                continue;
            }
        }
        return maxItem;
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + +array[i];
        }
        return sum / array.length;
    }
}

