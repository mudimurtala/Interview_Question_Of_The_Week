function findingLargestDiff(arrayList) {

    // This is a helper function
    function timeToMinutes(timeStr) {
        const [hour, minutes] = timeStr.split(':').map(Number);
        return hour * 60 + minutes;
    }

    const convertedToNumbers = arrayList.map(timeToMinutes);

    convertedToNumbers.sort((a, b) => a - b);

    let greatestDifference = 0;

    for (let i = 0; i < convertedToNumbers.length - 1; i++) {
        const difference = convertedToNumbers[i + 1] - convertedToNumbers[i];
        if (difference > greatestDifference) {
            greatestDifference = difference;
        }
    }

    return greatestDifference;
}

// examples

arrayOne = ['18:40', '04:10', '11:00', '22:20', '02:50'];
arrayTwo = ['05:19', '20:30', '19:00', '13:45'];
arrayThree = ['01:55', '10:55'];
arrayFour = ['15:15'];

console.log(findingLargestDiff(arrayOne));
console.log(findingLargestDiff(arrayTwo));
console.log(findingLargestDiff(arrayThree));
console.log(findingLargestDiff(arrayFour));
