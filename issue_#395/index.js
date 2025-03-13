// Function to convert a piano note (e.g., "C4") into a semitone number
function getSemitoneNumber(note) {
    // Define the order of notes in an octave
    const noteOrder = {
        'C': 0,  'C#': 1, 'D': 2,  'D#': 3, 'E': 4,  'F': 5,
        'F#': 6, 'G': 7,  'G#': 8, 'A': 9,  'A#': 10, 'B': 11
    };

    // Extract the note name (letters) and the octave number
    let match = note.match(/^([A-G]#?)(\d+)$/);
    if (!match) return null; // Return null if the note format is invalid

    let [, noteName, octave] = match;
    octave = parseInt(octave, 10);

    // Calculate semitone number
    return noteOrder[noteName] + (octave * 12);
}

// Function to find the largest interval between consecutive piano notes
function findLargestInterval(notes) {
    // Convert each note into its semitone number
    const semitoneNumbers = notes.map(getSemitoneNumber);

    // Initialize maxDifference to 0
    let maxDifference = 0;

    // Loop through the array to find the largest difference between consecutive semitones
    for (let i = 0; i < semitoneNumbers.length - 1; i++) {
        let difference = Math.abs(semitoneNumbers[i + 1] - semitoneNumbers[i]);
        if (difference > maxDifference) {
            maxDifference = difference; // Update maxDifference if a larger gap is found
        }
    }

    return maxDifference; // Return the largest interval
}

// Example test cases
console.log(findLargestInterval(['A0', 'C1', 'G1', 'C2'])); // Output: 7
console.log(findLargestInterval(['C4', 'G4', 'C5', 'G3'])); // Output: 17
console.log(findLargestInterval(['E2', 'C3', 'G3', 'C8'])); // Output: 53