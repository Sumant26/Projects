def getMajorScale(root):
    notes = ['A', 'B', 'C', 'C#', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'G', 'G#']
    pattern = [2,2,1,2,2,2,1]
    currentIndex = notes.index(root)
    scale = ''
    for i in pattern:
        scale += f' {notes[currentIndex]}'
        currentIndex += i
        currentIndex = currentIndex % len(notes)
    return scale

print(getMajorScale('A'))
