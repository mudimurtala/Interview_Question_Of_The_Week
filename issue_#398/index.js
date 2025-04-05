function findingLargestDiff(arrayList) {

    function timeToMinutes(timeStr) {
        const [hour, minutes] = timeStr.split(':').map(Number);
        return hour * 60 + minutes;
    }

    const convertedToNums = arrayList.map(timeToMinutes);

    convertedToNums.sort((a, b) => a - b);

    let greatestDiff = 0;

    for (let i = 0; i < convertedToNums.length - 1; i++) {
        const diff = convertedToNums[i + 1] - convertedToNums[i];
        if (diff > greatestDiff) {
            greatestDiff = diff;
        }
    }

    return greatestDiff;
}
