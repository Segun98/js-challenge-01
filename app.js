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

// Favour is a smart and knowledge savvy dude. He overheard some people talking about
// an algorithm used to validate a variety of identification numbers, such as credit card
// numbers, IMEI numbers, Canadian Social Insurance Numbers. They called it Luhn's algorithm. He did a quick search online and saw the steps to implementing the algorithm on
// wikipedia. He started coding it out but he got frustrated at some point then he came to you
// for help. At that point, you saw that he missed out some things logic-wise and you would just
// code it out from scratch showing him some concepts and learning along the way too. Kindly
// send a solution to your own version of the solution to the problem.