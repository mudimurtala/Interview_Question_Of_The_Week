function findingLargestDiff(arrayList) {

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
