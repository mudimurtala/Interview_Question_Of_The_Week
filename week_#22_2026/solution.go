package main

import (
    "fmt"
)

func shuffleLine(names []string, n int) []string {
    if n <= 0 {
        return names
    }
    if n == 1 {
        return names
    }

    keep := make([]string, 0, len(names))
    moved := make([]string, 0, len(names))

    for i, name := range names {
        if (i+1)%n == 0 {
            moved = append(moved, name)
        } else {
            keep = append(keep, name)
        }
    }

    return append(keep, moved...)
}

func main() {
    fmt.Println(shuffleLine([]string{"Ada", "Ben", "Cam", "Diya", "Eli", "Fay"}, 3))
    fmt.Println(shuffleLine([]string{"A", "B", "C", "D", "E"}, 2))
    fmt.Println(shuffleLine([]string{"Mo", "Noah", "Oli"}, 1))
}
