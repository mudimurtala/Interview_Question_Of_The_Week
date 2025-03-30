function findLongestStreak(array, goal) {
    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < array.lengh; i++) {
        if (array[i] === true) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }

    if (longest >= goal) {
        return longest;
    } else {
        return 0;
    }
    
}