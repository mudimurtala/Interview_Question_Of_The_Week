function findLongestStreak(array, goal) {
    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < array.lengh; i++) {
        if (array[i] === true) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
}