// Check README FOR QUESTIONS
/*
NUMBER ONE 
*/

function jazzify(arr) {
    let ans = []
    let res;
    for (let i = 0; i < arr.length; i++) {
        const resArr = arr[i];
        //if array includes an item with "7", dont concatenate 7 else do so
        if (resArr.includes(7)) {
            res = `${resArr}`
        } else {
            res = `${resArr}${7}`
        }
        ans.push(res)
    }
    return ans
}

// console.log(jazzify(["a", "b", "c", "f"]));
// console.log(jazzify(["G", "F", "C"]));
// console.log(jazzify(["Dm", "G", "E", "A"]));
// console.log(jazzify(["F7", "E7", "A", "Ab7", "Gm7", "C7"]));


/*
NUMBER TWO
*/

function marathonDistance(arr) {
    // if array empty
    if (arr.length === 0) {
        return false
    }
    //checks if there's an item that isn't a number
    arr.forEach(a => {
        if (isNaN(a)) {
            return false
        }
    });
    //sums items in array
    let marathonDistance = arr.reduce((a, b) => Math.abs(parseInt(a)) + Math.abs(parseInt(b)), 0)
    return marathonDistance == 25 ? true : false
}

// console.log(marathonDistance([1, 3, 6, "x"]));
// console.log(marathonDistance([1, 2, 3, 4]));
// console.log(marathonDistance([1, 9, 5, 8, 2]));
// console.log(marathonDistance([-6, 15, 4]));

/*
NUMBER THREE
*/

function arrayOfMultiples(num, length) {
    let res = []
    let ans = num;
    for (let i = 0; i < length; i++) {
        res.push(ans)
        ans = num + ans
    }
    return res;
}

// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));


/*
NUMBER FOUR
*/

function formatDate() {
    let date = new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return {
        day: date.getDate(),
        // date.getMonth() return a number so I had to use it as an index
        month: months[date.getMonth()],
        year: date.getFullYear()
    }
}

// console.log(formatDate())

/*
NUMBER FIVE
*/

const luhnCheck = num => {
    let arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
};
// console.log(luhnCheck('4485275742308327'));
// console.log(luhnCheck(6011329933655299));
// console.log(luhnCheck(123456789));

/*
NUMBER SIX
*/
// Binary Search

function binary_Search(items, value) {
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 1));   
// console.log(binary_Search(items, 5));


// Fibonnaci 
const fibonacci = n =>
    Array.from({
        length: n
    }).reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );
// console.log(fibonacci(2)); 
// console.log(fibonacci(3)); 
// console.log(fibonacci(6));


/*
NUMBER SEVEN
*/