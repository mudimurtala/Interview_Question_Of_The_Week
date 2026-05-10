package main

import (
	"fmt"
)

func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	if a < 0 {
		return -a
	}
	return a
}

func longestCoprimeSubsequence(a []int) int {
	n := len(a)
	if n == 0 {
		return 0
	}

	dp := make([]int, n)
	for i := range dp {
		dp[i] = 1
	}

	overallMax := 1

	for i := 1; i < n; i++ {
		for j := 0; j < i; j++ {
			if gcd(a[i], a[j]) == 1 {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}
		overallMax = max(overallMax, dp[i])
	}

	return overallMax
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	tests := [][]int{
		{6, 12, 4, 8},
		{4, 3, 6, 9, 7, 2},
		{},
		{5},
		{2, 4, 8, 16},
	}

	for _, t := range tests {
		fmt.Printf("%v => %d\n", t, longestCoprimeSubsequence(t))
	}
}
