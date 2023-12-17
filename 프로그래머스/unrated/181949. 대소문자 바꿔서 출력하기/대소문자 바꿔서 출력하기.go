package main

import (
	"fmt"
	"unicode"
)

func main() {
	var s1 string
	fmt.Scan(&s1)

	for _, char := range s1 {
		if unicode.IsLower(char) {
            fmt.Printf("%c", unicode.ToUpper(char))
        } else {
            fmt.Printf("%c", unicode.ToLower(char))
        }
	}
}
