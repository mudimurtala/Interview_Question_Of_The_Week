package main

import (
	"fmt"
	"strings"
	"unicode"
)

func main() {
	fmt.Println(toggleChar("Hello, world!"))
	fmt.Println(toggleChar("HeheHeheHEheheHeH"))
	fmt.Println(toggleChar("This will be alternated", "alternating"))
}

// toggleChar returns a new string where each letter's case is toggled.
// If an optional boolean is provided and true, letters are cased alternately
// across the string, starting with upper for the first alphabetic character.
// Non-letters are left unchanged and do not flip the alternation state.
func toggleChar(s string, opts ...interface{}) string {
    alternate := false
    if len(opts) > 0 {
        switch v := opts[0].(type) {
        case bool:
            alternate = v
        case string:
            alternate = v == "alternating"
        }
    }

    var b strings.Builder
    b.Grow(len(s))
    upperNext := true

    for _, r := range s {
        if !unicode.IsLetter(r) {
            b.WriteRune(r)
            continue
        }
        if alternate {
            if upperNext {
                b.WriteRune(unicode.ToUpper(r))
            } else {
                b.WriteRune(unicode.ToLower(r))
            }
            upperNext = !upperNext
        } else {
            if unicode.IsLower(r) {
                b.WriteRune(unicode.ToUpper(r))
            } else if unicode.IsUpper(r) {
                b.WriteRune(unicode.ToLower(r))
            } else {
                b.WriteRune(r)
            }
        }
    }
    return b.String()
}
