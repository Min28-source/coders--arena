export const testcases = [
    // Problem 41: Two Sum
    { "problemId": 41, "isHidden": false, "input": "3 3\n6", "output": "[0,1]" },
    { "problemId": 41, "isHidden": false, "input": "3 2 4\n6", "output": "[1,2]" },
    { "problemId": 41, "isHidden": false, "input": "2 7 11 15\n9", "output": "[0,1]" },
    { "problemId": 41, "isHidden": true, "input": "-1 -2 -3 -4 -5\n-8", "output": "[2,4]" },
    { "problemId": 41, "isHidden": true, "input": "0 4 3 0\n0", "output": "[0,3]" },
    { "problemId": 41, "isHidden": true, "input": "1000000000 -1000000000\n0", "output": "[0,1]" },

    // Problem 42: Valid Parentheses
    { "problemId": 42, "isHidden": false, "input": "()[]{}", "output": "true" },
    { "problemId": 42, "isHidden": false, "input": "(]", "output": "false" },
    { "problemId": 42, "isHidden": false, "input": "([])", "output": "true" },
    { "problemId": 42, "isHidden": true, "input": "[", "output": "false" },
    { "problemId": 42, "isHidden": true, "input": "]", "output": "false" },
    { "problemId": 42, "isHidden": true, "input": "((((((()))))))", "output": "true" },
    { "problemId": 42, "isHidden": true, "input": "[(])", "output": "false" },

    // Problem 43: Maximum Subarray
    { "problemId": 43, "isHidden": false, "input": "-2 1 -3 4 -1 2 1 -5 4", "output": "6" },
    { "problemId": 43, "isHidden": false, "input": "1", "output": "1" },
    { "problemId": 43, "isHidden": false, "input": "5 4 -1 7 8", "output": "23" },
    { "problemId": 43, "isHidden": true, "input": "-1", "output": "-1" },
    { "problemId": 43, "isHidden": true, "input": "-5 -4 -3 -2 -1", "output": "-1" },
    { "problemId": 43, "isHidden": true, "input": "1 2 3 4 5", "output": "15" },

    // Problem 44: Binary Search
    { "problemId": 44, "isHidden": false, "input": "-1 0 3 5 9 12\n9", "output": "4" },
    { "problemId": 44, "isHidden": false, "input": "-1 0 3 5 9 12\n2", "output": "-1" },
    { "problemId": 44, "isHidden": false, "input": "5\n5", "output": "0" },
    { "problemId": 44, "isHidden": true, "input": "2 5\n2", "output": "0" },
    { "problemId": 44, "isHidden": true, "input": "2 5\n5", "output": "1" },
    { "problemId": 44, "isHidden": true, "input": "-10 -5 0 3 7 12\n-5", "output": "1" },

    // Problem 45: Merge Sorted Array
    { "problemId": 45, "isHidden": false, "input": "1 2 3\n3\n2 5 6\n3", "output": "[1,2,2,3,5,6]" },
    { "problemId": 45, "isHidden": false, "input": "1\n1\n\n0", "output": "[1]" },
    { "problemId": 45, "isHidden": false, "input": "0\n0\n1\n1", "output": "[1]" },
    { "problemId": 45, "isHidden": true, "input": "4 5 6\n3\n1 2 3\n3", "output": "[1,2,3,4,5,6]" },
    { "problemId": 45, "isHidden": true, "input": "-1 0 0 3 3\n5\n1 2 4\n3", "output": "[-1,0,0,1,2,3,3,4]" },

    // Problem 46: Reverse String
    { "problemId": 46, "isHidden": false, "input": "h e l l o", "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]" },
    { "problemId": 46, "isHidden": false, "input": "H a n n a h", "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]" },
    { "problemId": 46, "isHidden": false, "input": "a", "output": "[\"a\"]" },
    { "problemId": 46, "isHidden": true, "input": "A B", "output": "[\"B\",\"A\"]" },
    { "problemId": 46, "isHidden": true, "input": "1 2 3 4", "output": "[\"4\",\"3\",\"2\",\"1\"]" },

    // Problem 47: Palindrome Number
    { "problemId": 47, "isHidden": false, "input": "121", "output": "true" },
    { "problemId": 47, "isHidden": false, "input": "-121", "output": "false" },
    { "problemId": 47, "isHidden": false, "input": "10", "output": "false" },
    { "problemId": 47, "isHidden": true, "input": "0", "output": "true" },
    { "problemId": 47, "isHidden": true, "input": "12321", "output": "true" },
    { "problemId": 47, "isHidden": true, "input": "2147483647", "output": "false" },

    // Problem 48: Climbing Stairs
    { "problemId": 48, "isHidden": false, "input": "2", "output": "2" },
    { "problemId": 48, "isHidden": false, "input": "3", "output": "3" },
    { "problemId": 48, "isHidden": false, "input": "4", "output": "5" },
    { "problemId": 48, "isHidden": true, "input": "1", "output": "1" },
    { "problemId": 48, "isHidden": true, "input": "5", "output": "8" },
    { "problemId": 48, "isHidden": true, "input": "45", "output": "1836311903" },

    // Problem 49: Best Time to Buy and Sell Stock
    { "problemId": 49, "isHidden": false, "input": "7 1 5 3 6 4", "output": "5" },
    { "problemId": 49, "isHidden": false, "input": "7 6 4 3 1", "output": "0" },
    { "problemId": 49, "isHidden": false, "input": "1 2", "output": "1" },
    { "problemId": 49, "isHidden": true, "input": "3 3 3 3", "output": "0" },
    { "problemId": 49, "isHidden": true, "input": "1 2 4 2 5 7 2 4 9 0", "output": "8" },
    { "problemId": 49, "isHidden": true, "input": "100", "output": "0" },

    // Problem 50: Contains Duplicate
    { "problemId": 50, "isHidden": false, "input": "1 2 3 1", "output": "true" },
    { "problemId": 50, "isHidden": false, "input": "1 2 3 4", "output": "false" },
    { "problemId": 50, "isHidden": false, "input": "1 1 1 3 3 4 3 2 4 2", "output": "true" },
    { "problemId": 50, "isHidden": true, "input": "0", "output": "false" },
    { "problemId": 50, "isHidden": true, "input": "-1000000000 1000000000 -1000000000", "output": "true" },
    { "problemId": 50, "isHidden": true, "input": "5 4 3 2 1 0 -1", "output": "false" }
];