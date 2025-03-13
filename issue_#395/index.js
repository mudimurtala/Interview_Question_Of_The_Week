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

console.log(getSemitoneNumber("A4"))