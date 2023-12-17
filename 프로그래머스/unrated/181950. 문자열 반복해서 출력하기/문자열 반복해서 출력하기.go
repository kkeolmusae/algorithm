package main

import "fmt"

func main() {
    var s1 string
    var a int
    fmt.Scan(&s1, &a)
    
    for a > 0 {
        fmt.Printf(s1)
        a--
    }
}