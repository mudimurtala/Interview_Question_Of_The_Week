function findLongestStreak(array, goal) {
    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }

    if (longestStreak >= goal) {
        return longestStreak;
    } else {
        return 0;
    }
    
}


// Examples

console.log(findLongestStreak([true, true, false, true, true, true], 3));
console.log(findLongestStreak([true, true, true, false, true], 4));
console.log(findLongestStreak([true, true, true, true], 2));
console.log(findLongestStreak([false, false, false], 1));
console.log(findLongestStreak([true, true, true, true, true], 5));
