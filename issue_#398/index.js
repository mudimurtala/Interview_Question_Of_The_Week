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

arrayOne = ['14:00', '09:00', '15:00', '10:30'];
arrayTwo = ['08:00', '10:00', '10:00', '14:00'];
arrayThree = ['09:00', '11:00'];
arrayFour = ['12:00'];

console.log(findingLargestDiff(arrayOne));
console.log(findingLargestDiff(arrayTwo));
console.log(findingLargestDiff(arrayThree));
console.log(findingLargestDiff(arrayFour));
