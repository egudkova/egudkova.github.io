
package main

import (
	"fmt"
	"os"
  "math"
)

func main() {

	var a float64
  var b float64
  var c float64

  fmt.Print("Аргумент a: ")
    fmt.Fscan(os.Stdin, &a)
  fmt.Print("Аргумент b: ")
    fmt.Fscan(os.Stdin, &b)
  fmt.Print("Аргумент c: ")
    fmt.Fscan(os.Stdin, &c)
    if a == 0 && b == 0 && c != 0 {
      fmt.Println("значение не равно 0")
      }
    if a == 0 && b != 0 && c == 0 {
      fmt.Println("x = 0")
    }
    if a == 0 && b != 0 && c != 0 {
      fmt.Println( -c/b)
    }
    if a != 0 && b == 0 && c == 0 {
      fmt.Println( "x = 0")
    }
    if a != 0 && b == 0 && c != 0 {
      if c < 0 {
        fmt.Println(math.Sqrt(-1*c/a),-math.Sqrt(-1*c/a))
      }else{
        fmt.Println(math.Sqrt(c/a),"*i",-math.Sqrt(c/a),"*i")
      }
    }
    if a != 0 && b != 0 && c == 0 {
      fmt.Println( "x = 0", "x=",-1*b/a)
    }
    if a != 0 && b != 0 && c != 0 {
      d:= b*b-4*a*c
      if(d > 0){
        fmt.Println( "x = ", (-b + math.Sqrt(d))/(2*a) ,"x=",(-1*b - math.Sqrt(d))/(2*a))
      }else{
        a1 := (-b + math.Sqrt(-d))/(2*a)
        a2 :=(-b - math.Sqrt(-d))/(2*a)
        fmt.Println( "x = ",float64(int(a1 *1000))/1000 ,"*i" ,"x=",float64(int(a2 *1000))/1000,"*i")
      }

    }
}
