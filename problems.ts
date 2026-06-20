export const problems = [
  {
    "id": 1,
    "title": "Two Sum",
    "description": "Given an array of integers `nums` and an integer `target`, return the 0-indexed indices of the two distinct elements such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. For example, if nums = [2, 7, 11, 15] and target = 9, the function should return [0, 1] because nums[0] + nums[1] == 9.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
      "Optimize time complexity to O(n) using a hash map."
    ],
    "examples": "Input: nums = [2, 7, 11, 15], target = 9. Output: [0, 1]. Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
    "starterCode": {
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        // Write your code here\n        pass",
      "javascript": "function twoSum(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 2,
    "title": "Valid Parentheses",
    "description": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1. Open brackets must be closed by the same type of brackets. 2. Open brackets must be closed in the correct order. 3. Every close bracket has a corresponding open bracket of the same type.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    "examples": "Input: s = \"()[]{}\". Output: true. Explanation: All opening brackets are closed properly by their corresponding matching brackets in the correct order.",
    "starterCode": {
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        // Write your code here\n        pass",
      "javascript": "function isValid(s) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 3,
    "title": "Maximum Subarray",
    "description": "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. A subarray is a contiguous part of an array. For instance, in [-2,1,-3,4,-1,2,1,-5,4], the contiguous subarray [4,-1,2,1] has the largest sum = 6.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "Optimize time complexity to O(n) using Kadane's Algorithm."
    ],
    "examples": "Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]. Output: 6. Explanation: The subarray [4, -1, 2, 1] has the largest sum 6.",
    "starterCode": {
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        // Write your code here\n        pass",
      "javascript": "function maxSubArray(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 4,
    "title": "Binary Search",
    "description": "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-10^4 < nums[i], target < 10^4",
      "All the integers in nums are unique.",
      "nums is sorted in ascending order."
    ],
    "examples": "Input: nums = [-1, 0, 3, 5, 9, 12], target = 9. Output: 4. Explanation: 9 exists in nums and its index is 4.",
    "starterCode": {
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        // Write your code here\n        pass",
      "javascript": "function search(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 5,
    "title": "Merge Sorted Arrays",
    "description": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. Merge `nums1` and `nums2` into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored.",
    "constraints": [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 <= m, n <= 200",
      "1 <= m + n <= 200",
      "-10^9 <= nums1[i], nums2[j] <= 10^9"
    ],
    "examples": "Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3. Output: [1, 2, 2, 3, 5, 6]. Explanation: The arrays we are merging are [1, 2, 3] and [2, 5, 6]. The result of the merge is [1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.",
    "starterCode": {
      "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Modify nums1 in-place, do not return anything\n    }\n}",
      "python": "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        // Modify nums1 in-place, do not return anything\n        pass",
      "javascript": "function merge(nums1, m, nums2, n) {\n    // Modify nums1 in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Modify nums1 in-place, do not return anything\n    }\n};"
    }
  },
  {
    "id": 6,
    "title": "Reverse String",
    "description": "Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array in-place with O(1) extra memory. Do not allocate extra space for another array; you must modify the input array by swapping elements.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character."
    ],
    "examples": "Input: s = [\"h\", \"e\", \"l\", \"l\", \"o\"]. Output: [\"o\", \"l\", \"l\", \"e\", \"h\"]. Explanation: The characters are reversed in-place using two pointers.",
    "starterCode": {
      "java": "class Solution {\n    public void reverseString(char[] s) {\n        // Modify s in-place, do not return anything\n    }\n}",
      "python": "class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        // Modify s in-place, do not return anything\n        pass",
      "javascript": "function reverseString(s) {\n    // Modify s in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Modify s in-place, do not return anything\n    }\n};"
    }
  },
  {
    "id": 7,
    "title": "Palindrome Number",
    "description": "Given an integer `x`, return true if `x` is a palindrome, and false otherwise. An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not. Negative numbers are never palindromes because the minus sign reads differently backwards (e.g., -121 becomes 121-).",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "Could you solve it without converting the integer to a string?"
    ],
    "examples": "Input: x = 121. Output: true. Explanation: 121 reads as 121 from left to right and from right to left.",
    "starterCode": {
      "java": "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        // Write your code here\n        pass",
      "javascript": "function isPalindrome(x) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 8,
    "title": "Climbing Stairs",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? For example, if n = 3, there are three ways: (1 step + 1 step + 1 step), (1 step + 2 steps), and (2 steps + 1 step).",
    "constraints": [
      "1 <= n <= 45"
    ],
    "examples": "Input: n = 3. Output: 3. Explanation: There are three ways to climb to the top: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step.",
    "starterCode": {
      "java": "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        // Write your code here\n        pass",
      "javascript": "function climbStairs(n) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 9,
    "title": "Best Time to Buy Stock",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "examples": "Input: prices = [7, 1, 5, 3, 6, 4]. Output: 5. Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
    "starterCode": {
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        // Write your code here\n        pass",
      "javascript": "function maxProfit(prices) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "id": 10,
    "title": "Contains Duplicate",
    "description": "Given an integer array `nums`, return true if any value appears at least twice in the array, and return false if every element is distinct. This requires tracking previously seen numbers efficiently to achieve an optimal execution speed.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": "Input: nums = [1, 2, 3, 1]. Output: true. Explanation: The element 1 occurs at indices 0 and 3, which means it appears more than once.",
    "starterCode": {
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        // Write your code here\n        pass",
      "javascript": "function containsDuplicate(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  }
]