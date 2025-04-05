function findingLargDiff(arrayList) {

    function timeToMinutes(timeStr) {
        const [hour, minutes] = timeStr.split(':').map(Number);
        return hour * 60 + minutes
    }

    for (let i = 0; i < arrayList.length; i++) {
        const convertedToNums[] = timeToMinutes(arrayList);
    }

    convertedToNums = sort(convertedToNums)

    function diffBtwtwo(arr) {
        for (let i, j = 0, 1; i, j < arr.length; i++, j++) {
            diff = arr[j] - arr[i];
            if (diff > greatestDiff) {
                greatestDiff = diff;
            }
        }
        return greatestDiff;
    }
}