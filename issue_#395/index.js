// This function converts a piano note into a semitone number
function getSemitoneNumber(note) {
    const noteOrder = {
        'C': 0,  'C#': 1, 'D': 2,  'D#': 3, 'E': 4,  'F': 5,
        'F#': 6, 'G': 7,  'G#': 8, 'A': 9,  'A#': 10, 'B': 11
    };

    // Using REGEX to extract note name (letters) and octave number
    let match = note.match(/^([A-G]#?)(\d+)$/);
    if (!match) return null;

    let [, noteName, octave] = match;
    octave = parseInt(octave, 10);

    return noteOrder[noteName] + (octave * 12);
}

// This function finds the largest interval between consecutive piano notes
function findLargestInterval(notes) {
    const semitoneNumbers = notes.map(getSemitoneNumber);

    let maxDifference = 0;

    for (let i = 0; i < semitoneNumbers.length - 1; i++) {
        let difference = Math.abs(semitoneNumbers[i + 1] - semitoneNumbers[i]);
        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }

    return maxDifference;
}

// Testing the solution
console.log(findLargestInterval(['C4', 'G4', 'C5', 'G3']));
console.log(findLargestInterval(['E2', 'C3', 'G3', 'C8']));