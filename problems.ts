export const problems = [
  {
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
      "python": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Write your code here\n        pass",
      "javascript": "function twoSum(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Valid Parentheses",
    "description": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1. Open brackets must be closed by the same type of brackets. 2. Open brackets must be closed in the correct order. 3. Every close bracket has a corresponding open bracket of the same type.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    "examples": "Input: s = \"()[]{}\". Output: true. Explanation: All opening brackets are closed properly by their corresponding matching brackets in the correct order.",
    "starterCode": {
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function isValid(s) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};"
    }
  },
  {
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
      "python": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function maxSubArray(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
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
      "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function search(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
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
      "python": "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        # Modify nums1 in-place, do not return anything\n        pass",
      "javascript": "function merge(nums1, m, nums2, n) {\n    // Modify nums1 in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Modify nums1 in-place, do not return anything\n    }\n};"
    }
  },
  {
    "title": "Reverse String",
    "description": "Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array in-place with O(1) extra memory. Do not allocate extra space for another array; you must modify the input array by swapping elements.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character."
    ],
    "examples": "Input: s = [\"h\", \"e\", \"l\", \"l\", \"o\"]. Output: [\"o\", \"l\", \"l\", \"e\", \"h\"]. Explanation: The characters are reversed in-place using two pointers.",
    "starterCode": {
      "java": "class Solution {\n    public void reverseString(char[] s) {\n        // Modify s in-place, do not return anything\n    }\n}",
      "python": "class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        # Modify s in-place, do not return anything\n        pass",
      "javascript": "function reverseString(s) {\n    // Modify s in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Modify s in-place, do not return anything\n    }\n};"
    }
  },
  {
    "title": "Palindrome Number",
    "description": "Given an integer `x`, return true if `x` is a palindrome, and false otherwise. An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not. Negative numbers are never palindromes because the minus sign reads differently backwards (e.g., -121 becomes 121-).",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "Could you solve it without converting the integer to a string?"
    ],
    "examples": "Input: x = 121. Output: true. Explanation: 121 reads as 121 from left to right and from right to left.",
    "starterCode": {
      "java": "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function isPalindrome(x) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Climbing Stairs",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? For example, if n = 3, there are three ways: (1 step + 1 step + 1 step), (1 step + 2 steps), and (2 steps + 1 step).",
    "constraints": [
      "1 <= n <= 45"
    ],
    "examples": "Input: n = 3. Output: 3. Explanation: There are three ways to climb to the top: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step.",
    "starterCode": {
      "java": "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function climbStairs(n) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Best Time to Buy Stock",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "examples": "Input: prices = [7, 1, 5, 3, 6, 4]. Output: 5. Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
    "starterCode": {
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function maxProfit(prices) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Contains Duplicate",
    "description": "Given an integer array `nums`, return true if any value appears at least twice in the array, and return false if every element is distinct. This requires tracking previously seen numbers efficiently to achieve an optimal execution speed.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": "Input: nums = [1, 2, 3, 1]. Output: true. Explanation: The element 1 occurs at indices 0 and 3, which means it appears more than once.",
    "starterCode": {
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function containsDuplicate(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Move Zeroes",
    "description": "Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. Minimize the total number of operations.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": "Input: nums = [0, 1, 0, 3, 12]. Output: [1, 3, 12, 0, 0]. Explanation: All zeroes are moved to the rightmost positions, while 1, 3, and 12 maintain their initial relative order.",
    "starterCode": {
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        // Modify nums in-place, do not return anything\n    }\n}",
      "python": "class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        # Modify nums in-place, do not return anything\n        pass",
      "javascript": "function moveZeroes(nums) {\n    // Modify nums in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // Modify nums in-place, do not return anything\n    }\n};"
    }
  },
  {
    "title": "Product Except Self",
    "description": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
      "Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)"
    ],
    "examples": "Input: nums = [1, 2, 3, 4]. Output: [24, 12, 8, 6]. Explanation: answer[0] = 2*3*4 = 24, answer[1] = 1*3*4 = 12, answer[2] = 1*2*4 = 8, answer[3] = 1*2*3 = 6.",
    "starterCode": {
      "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # Write your code here\n        pass",
      "javascript": "function productExceptSelf(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Longest Common Prefix",
    "description": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\". The prefix must be present at the start of every single string in the input array.",
    "constraints": [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200",
      "strs[i] consists of only lowercase English letters."
    ],
    "examples": "Input: strs = [\"flower\", \"flow\", \"flight\"]. Output: \"fl\". Explanation: The prefix 'fl' is shared by all three strings at the very beginning.",
    "starterCode": {
      "java": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        # Write your code here\n        pass",
      "javascript": "function longestCommonPrefix(strs) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Roman to Integer",
    "description": "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M with values 1, 5, 10, 50, 100, 500 and 1000 respectively. Given a roman numeral string `s`, convert it to an integer. Roman numerals are usually written largest to smallest from left to right. However, there are instances where subtraction is used, such as IV (4) or IX (9).",
    "constraints": [
      "1 <= s.length <= 15",
      "s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').",
      "It is guaranteed that s is a valid roman numeral in the range [1, 3999]."
    ],
    "examples": "Input: s = \"MCMXCIV\". Output: 1994. Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.",
    "starterCode": {
      "java": "class Solution {\n    public int romanToInt(String s) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def romanToInt(self, s: str) -> int:\n        # Write your code here\n        pass",
      "javascript": "function romanToInt(s) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int romanToInt(string s) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Valid Anagram",
    "description": "Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. This means the count and composition of characters must be completely identical.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": "Input: s = \"anagram\", t = \"nagaram\". Output: true. Explanation: Both strings contain exactly three 'a's, one 'g', one 'm', one 'n', and one 'r'.",
    "starterCode": {
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function isAnagram(s, t) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Flood Fill",
    "description": "An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image. You are also given three integers `sr`, `sc`, and `color`. You should perform a flood fill on the image starting from the pixel `image[sr][sc]`. To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `color`.",
    "constraints": [
      "m == image.length",
      "n == image[i].length",
      "1 <= m, n <= 50",
      "0 <= image[i][j], color < 2^16",
      "0 <= sr < m",
      "0 <= sc < n"
    ],
    "examples": "Input: image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2. Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]. Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., image[1][1]), all pixels connected by a path of the same color (color 1) are colored with the new color 2. Note the bottom right pixel is not colored 2 because it is not 4-directionally connected to the starting pixel.",
    "starterCode": {
      "java": "class Solution {\n    public int[][] floodFill(int[][] image, int sr, int sc, int color) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:\n        # Write your code here\n        pass",
      "javascript": "function floodFill(image, sr, sc, color) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Number of Islands",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. This problem can be solved using Depth First Search (DFS) or Breadth First Search (BFS) to traverse connected land components.",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'."
    ],
    "examples": "Input: grid = [[\"1\", \"1\", \"0\", \"0\", \"0\"], [[\"1\", \"1\", \"0\", \"0\", \"0\"], [\"0\", \"0\", \"1\", \"0\", \"0\"], [\"0\", \"0\", \"0\", \"1\", \"1\"]]. Output: 3. Explanation: There are three distinct islands formed by connected components of '1's.",
    "starterCode": {
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function numIslands(grid) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Course Schedule",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. For example, the pair `[0, 1]` indicates that to take course 0 you must first take course 1. Return true if you can finish all courses. Otherwise, return false. This is equivalent to detecting a cycle in a directed graph representing the course dependencies.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "0 <= ai, bi < numCourses",
      "All the pairs prerequisites[i] are unique."
    ],
    "examples": "Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]. Output: false. Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. This forms a dependency loop, making it impossible.",
    "starterCode": {
      "java": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function canFinish(numCourses, prerequisites) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Invert Binary Tree",
    "description": "Given the root of a binary tree, invert the tree, and return its root. Inverting a binary tree means that for every node in the tree, its left child and right child are swapped recursively. Maximize correctness by handling edge cases like empty trees or trees with a single node.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "examples": "Input: root = [4, 2, 7, 1, 3, 6, 9]. Output: [4, 7, 2, 9, 6, 3, 1]. Explanation: The children of node 4 (2 and 7) are swapped to (7 and 2). Recursively, the children of 2 and 7 are also swapped.",
    "starterCode": {
      "java": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Write your code here\n        pass",
      "javascript": "function invertTree(root) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Maximum Depth of Tree",
    "description": "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. An empty tree has a depth of 0.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    "examples": "Input: root = [3, 9, 20, null, null, 15, 7]. Output: 3. Explanation: The longest path goes from 3 -> 20 -> 15 (or 7), which contains exactly 3 nodes.",
    "starterCode": {
      "java": "class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function maxDepth(root) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Balanced Binary Tree",
    "description": "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1, and both subtrees are also balanced.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 5000].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "examples": "Input: root = [3, 9, 20, null, null, 15, 7]. Output: true. Explanation: The root node has left height 1 and right height 2. The difference is 1, which is valid. All other nodes satisfy the condition.",
    "starterCode": {
      "java": "class Solution {\n    public boolean isBalanced(TreeNode root) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function isBalanced(root) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isBalanced(TreeNode* root) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Level Order Traversal",
    "description": "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). This requires a Breadth First Search (BFS) using a queue to collect elements group-by-group according to their distance from the root.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-100 <= Node.val <= 100"
    ],
    "examples": "Input: root = [3, 9, 20, null, null, 15, 7]. Output: [[3], [9, 20], [15, 7]]. Explanation: Level 0 contains [3], Level 1 contains [9, 20], Level 2 contains [15, 7].",
    "starterCode": {
      "java": "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # Write your code here\n        pass",
      "javascript": "function levelOrder(root) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Lowest Common Ancestor",
    "description": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. According to the definition of LCA on Wikipedia: 'The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).'",
    "constraints": [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "-10^9 <= Node.val <= 10^9",
      "All Node.val are unique.",
      "p and q will exist in the BST and p != q."
    ],
    "examples": "Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8. Output: 6. Explanation: The LCA of nodes 2 and 8 is 6, as it is the root and splits the paths to 2 and 8.",
    "starterCode": {
      "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # Write your code here\n        pass",
      "javascript": "function lowestCommonAncestor(root, p, q) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Kth Largest Element",
    "description": "Given an integer array `nums` and an integer `k`, return the `k`-th largest element in the array. Note that it is the `k`-th largest element in the sorted order, not the `k`-th distinct element. Can you solve it without sorting in O(n) time complexity? Use min-heap or Quickselect algorithm to achieve the optimal speed.",
    "constraints": [
      "1 <= k <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": "Input: nums = [3, 2, 1, 5, 6, 4], k = 2. Output: 5. Explanation: The sorted array is [1, 2, 3, 4, 5, 6], and the 2nd largest element is 5.",
    "starterCode": {
      "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function findKthLargest(nums, k) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Top K Frequent Elements",
    "description": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order. Your algorithm's time complexity must be better than O(n log n), where n is the array's size. Bucket sort or heap-based approaches can achieve O(n) or O(n log k) runtime.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= k <= number of unique elements",
      "It is guaranteed that the answer is unique."
    ],
    "examples": "Input: nums = [1, 1, 1, 2, 2, 3], k = 2. Output: [1, 2]. Explanation: 1 occurs 3 times, 2 occurs 2 times, and 3 occurs 1 time. The two most frequent elements are 1 and 2.",
    "starterCode": {
      "java": "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        # Write your code here\n        pass",
      "javascript": "function topKFrequent(nums, k) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Merge Intervals",
    "description": "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. For instance, [1,3] and [2,6] overlap, so they merge into [1,6]. Intervals must be sorted by their start time before merging.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4"
    ],
    "examples": "Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]. Output: [[1, 6], [8, 10], [15, 18]]. Explanation: Since intervals [1, 3] and [2, 6] overlap, merge them into [1, 6].",
    "starterCode": {
      "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n        pass",
      "javascript": "function merge(intervals) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Insert Interval",
    "description": "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `i`-th interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval. Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).",
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^5",
      "intervals is sorted by starti in ascending order.",
      "newInterval.length == 2",
      "0 <= start <= end <= 10^5"
    ],
    "examples": "Input: intervals = [[1, 3], [6, 9]], newInterval = [2, 5]. Output: [[1, 5], [6, 9]]. Explanation: The new interval [2, 5] overlaps with [1, 3], so they are merged into [1, 5].",
    "starterCode": {
      "java": "class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        # Write your code here\n        pass",
      "javascript": "function insert(intervals, newInterval) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Meeting Rooms",
    "description": "Given an array of meeting time intervals where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings. A person can attend all meetings if and only if no two meetings overlap in time (i.e., for any two meetings A and B, the start time of one must be greater than or equal to the end time of the other).",
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^6"
    ],
    "examples": "Input: intervals = [[0, 30], [5, 10], [15, 20]]. Output: false. Explanation: The meeting from 0 to 30 overlaps with both 5-10 and 15-20, so a person cannot attend all of them.",
    "starterCode": {
      "java": "class Solution {\n    public boolean canAttendMeetings(int[][] intervals) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function canAttendMeetings(intervals) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool canAttendMeetings(vector<vector<int>>& intervals) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Coin Change",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin. This problem is typically solved using dynamic programming.",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "examples": "Input: coins = [1, 2, 5], amount = 11. Output: 3. Explanation: 11 can be formed by 5 + 5 + 1, which requires 3 coins.",
    "starterCode": {
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function coinChange(coins, amount) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "House Robber",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400"
    ],
    "examples": "Input: nums = [1, 2, 3, 1]. Output: 4. Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.",
    "starterCode": {
      "java": "class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function rob(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Longest Increasing Subsequence",
    "description": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence. A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. It can be solved in O(n^2) using dynamic programming or O(n log n) using binary search with patience sorting.",
    "constraints": [
      "1 <= nums.length <= 2500",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": "Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]. Output: 4. Explanation: The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.",
    "starterCode": {
      "java": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function lengthOfLIS(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Unique Paths",
    "description": "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time. Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "examples": "Input: m = 3, n = 7. Output: 28. Explanation: From top-left to bottom-right, there are 28 distinct valid paths traveling only down or right.",
    "starterCode": {
      "java": "class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function uniquePaths(m, n) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Jump Game",
    "description": "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise. Use a greedy strategy to keep track of the maximum reachable index from your current position.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5"
    ],
    "examples": "Input: nums = [2, 3, 1, 1, 4]. Output: true. Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.",
    "starterCode": {
      "java": "class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function canJump(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Word Search",
    "description": "Given an `m x n` grid of characters `board` and a string `word`, return true if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a single word match. This problem is solved using backtracking with DFS.",
    "constraints": [
      "m == board.length",
      "n = board[i].length",
      "1 <= m, n <= 6",
      "1 <= word.length <= 15",
      "board and word consist of only lowercase and uppercase English letters."
    ],
    "examples": "Input: board = [[\"A\", \"B\", \"C\", \"E\"], [\"S\", \"F\", \"C\", \"S\"], [\"A\", \"D\", \"E\", \"E\"]], word = \"ABCCED\". Output: true. Explanation: The path 'A' -> 'B' -> 'C' -> 'C' -> 'E' -> 'D' exists sequentially in the matrix grid.",
    "starterCode": {
      "java": "class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function exist(board, word) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Generate Parentheses",
    "description": "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses. A string of parentheses is well-formed if every opening parenthesis has a closing match and they never cross invalid states during building. Backtracking should be utilized by maintaining counts of open and close brackets used so far.",
    "constraints": [
      "1 <= n <= 8"
    ],
    "examples": "Input: n = 3. Output: [\"((()))\", \"(()())\", \"(())()\", \"()(())\", \"()()()\"]. Explanation: These are all the 5 possible well-formed brackets combinations with 3 pairs.",
    "starterCode": {
      "java": "class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        # Write your code here\n        pass",
      "javascript": "function generateParenthesis(n) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Permutations",
    "description": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order. A permutation is an arrangement of all elements in a particular order. For an array of size n, there are exactly n! unique permutations. Backtracking is the standard approach to explore all paths.",
    "constraints": [
      "1 <= nums.length <= 6",
      "-10 <= nums[i] <= 10",
      "All the integers of nums are unique."
    ],
    "examples": "Input: nums = [1, 2, 3]. Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]. Explanation: All 6 unique orderings for the numbers 1, 2, and 3 are listed.",
    "starterCode": {
      "java": "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        # Write your code here\n        pass",
      "javascript": "function permute(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Combination Sum",
    "description": "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different. The test cases are generated such that the number of unique combinations that sum up to `target` is less than 150 combinations for the given input.",
    "constraints": [
      "1 <= candidates.length <= 30",
      "2 <= candidates[i] <= 40",
      "All elements of candidates are distinct.",
      "1 <= target <= 40"
    ],
    "examples": "Input: candidates = [2, 3, 6, 7], target = 7. Output: [[2, 2, 3], [7]]. Explanation: 2 and 3 are candidates, and 2+2+3 = 7. Note that 2 can be used multiple times. 7 is also a candidate, which sums to 7. These are the only two combinations.",
    "starterCode": {
      "java": "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        # Write your code here\n        pass",
      "javascript": "function combinationSum(candidates, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "N Queens",
    "description": "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board placement of the n-queens, where 'Q' and '.' both indicate a queen and an empty space, respectively. Queens attack along the same row, column, or diagonals.",
    "constraints": [
      "1 <= n <= 9"
    ],
    "examples": "Input: n = 4. Output: [[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]. Explanation: There are two distinct solutions for a 4x4 chessboard layout where no two queens attack each other.",
    "starterCode": {
      "java": "class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        # Write your code here\n        pass",
      "javascript": "function solveNQueens(n) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Search 2D Matrix",
    "description": "You are given an `m x n` integer matrix `matrix` with the following two properties: 1. Each row is sorted in non-decreasing order. 2. The first integer of each row is greater than the last integer of the previous row. Given an integer `target`, return true if `target` is in the matrix or false otherwise. You must write a solution in O(log(m * n)) time complexity by treating the matrix as a virtual 1D sorted array.",
    "constraints": [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 <= m, n <= 100",
      "-10^4 <= matrix[i][j], target <= 10^4"
    ],
    "examples": "Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3. Output: true. Explanation: 3 is located inside the first row of the matrix, so we return true.",
    "starterCode": {
      "java": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function searchMatrix(matrix, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Find Peak Element",
    "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that `nums[-1] = nums[n] = -infinity`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array. You must write an algorithm that runs in O(log n) time using a binary search approach.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "-2^31 <= nums[i] <= 2^31 - 1",
      "nums[i] != nums[i + 1] for all valid i."
    ],
    "examples": "Input: nums = [1, 2, 3, 1]. Output: 2. Explanation: 3 is a peak element and its index is 2.",
    "starterCode": {
      "java": "class Solution {\n    public int findPeakElement(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def findPeakElement(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function findPeakElement(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Rotated Sorted Array Search",
    "description": "There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not in `nums`. You must write an algorithm with O(log n) runtime complexity.",
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i] <= 10^4",
      "All values of nums are unique.",
      "nums is an ascending array that has been rotated."
    ],
    "examples": "Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0. Output: 4. Explanation: 0 is located at index 4 in the rotated array.",
    "starterCode": {
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function search(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Min Stack",
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1). Implement the MinStack class: 1. `push(val)` pushes the element val onto the stack. 2. `pop()` removes the element on the top of the stack. 3. `top()` gets the top element of the stack. 4. `getMin()` retrieves the minimum element in the stack. You must use an auxiliary tracking system (like a second stack or pairs) to achieve O(1) for all operations.",
    "constraints": [
      "-2^31 <= val <= 2^31 - 1",
      "Methods pop, top and getMin will always be called on non-empty stacks.",
      "At most 3 * 10^4 calls will be made to push, pop, top, and getMin."
    ],
    "examples": "Input: operations = [\"MinStack\", \"push\", \"push\", \"push\", \"getMin\", \"pop\", \"top\", \"getMin\"], values = [[], [-2], [0], [-3], [], [], [], []]. Output: [null, null, null, null, -3, null, 0, -2]. Explanation: MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); // return -3 minStack.pop(); minStack.top(); // return 0 minStack.getMin(); // return -2",
    "starterCode": {
      "java": "class MinStack {\n    public MinStack() {\n        // Initialize your data structure here\n    }\n    \n    public void push(int val) {\n        // Write your code here\n    }\n    \n    public void pop() {\n        // Write your code here\n    }\n    \n    public int top() {\n        // Write your code here\n    }\n    \n    public int getMin() {\n        // Write your code here\n    }\n}",
      "python": "class MinStack:\n    def __init__(self):\n        # Initialize your data structure here\n        pass\n\n    def push(self, val: int) -> None:\n        # Write your code here\n        pass\n\n    def pop(self) -> None:\n        # Write your code here\n        pass\n\n    def top(self) -> int:\n        # Write your code here\n        pass\n\n    def getMin(self) -> int:\n        # Write your code here\n        pass",
      "javascript": "class MinStack {\n    constructor() {\n        // Initialize your data structure here\n    }\n\n    push(val) {\n        // Write your code here\n    }\n\n    pop() {\n        // Write your code here\n    }\n\n    top() {\n        // Write your code here\n    }\n\n    getMin() {\n        // Write your code here\n    }\n};",
      "cpp": "class MinStack {\npublic:\n    MinStack() {\n        // Initialize your data structure here\n    }\n    \n    void push(int val) {\n        // Write your code here\n    }\n    \n    void pop() {\n        // Write your code here\n    }\n    \n    int top() {\n        // Write your code here\n    }\n    \n    int getMin() {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Daily Temperatures",
    "description": "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`-th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead. This can be optimally solved in O(n) time using a monotonic decreasing stack.",
    "constraints": [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100"
    ],
    "examples": "Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]. Output: [1, 1, 4, 2, 1, 1, 0, 0]. Explanation: For day 1 (73), the next warmer day is day 2 (74), so answer[0] = 1. For day 3 (75), the next warmer day is day 7 (76), which is 4 days later.",
    "starterCode": {
      "java": "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Write your code here\n        pass",
      "javascript": "function dailyTemperatures(temperatures) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Evaluate RPN",
    "description": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation (Postfix Notation). Evaluate the expression. Return an integer that represents the value of the expression. Valid operators are '+', '-', '*', and '/'. Each operand may be an integer or another expression. The division between two integers always truncates toward zero. There will be no division by zero.",
    "constraints": [
      "1 <= tokens.length <= 10^4",
      "tokens[i] is either an operator or an integer in the range [-200, 200]."
    ],
    "examples": "Input: tokens = [\"2\", \"1\", \"+\", \"3\", \"*\"]. Output: 9. Explanation: ((2 + 1) * 3) = 9",
    "starterCode": {
      "java": "class Solution {\n    public int evalRPN(String[] tokens) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function evalRPN(tokens) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Implement Queue Using Stacks",
    "description": "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`). Implement the MyQueue class: 1. `push(x)` pushes element x to the back of the queue. 2. `pop()` removes the element from the start of the queue and returns it. 3. `peek()` returns the element at the start of the queue. 4. `empty()` returns true if the queue is empty, false otherwise.",
    "constraints": [
      "1 <= x <= 9",
      "At most 100 calls will be made to push, pop, peek, and empty.",
      "All the calls to pop and peek are valid."
    ],
    "examples": "Input: operations = [\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"], values = [[], [1], [2], [], [], []]. Output: [null, null, null, 1, 1, false]. Explanation: MyQueue myQueue = new MyQueue(); myQueue.push(1); myQueue.push(2); myQueue.peek(); // return 1 myQueue.pop(); // return 1 myQueue.empty(); // return false",
    "starterCode": {
      "java": "class MyQueue {\n    public MyQueue() {\n        // Initialize your two stacks here\n    }\n    \n    public void push(int x) {\n        // Write your code here\n    }\n    \n    public int pop() {\n        // Write your code here\n    }\n    \n    public int peek() {\n        // Write your code here\n    }\n    \n    public boolean empty() {\n        // Write your code here\n    }\n}",
      "python": "class MyQueue:\n    def __init__(self):\n        // Initialize your two stacks here\n        pass\n\n    def push(self, x: int) -> None:\n        # Write your code here\n        pass\n\n    def pop(self) -> int:\n        # Write your code here\n        pass\n\n    def peek(self) -> int:\n        # Write your code here\n        pass\n\n    def empty(self) -> bool:\n        # Write your code here\n        pass",
      "javascript": "class MyQueue {\n    constructor() {\n        // Initialize your two stacks here\n    }\n\n    push(x) {\n        // Write your code here\n    }\n\n    pop() {\n        // Write your code here\n    }\n\n    peek() {\n        // Write your code here\n    }\n\n    empty() {\n        // Write your code here\n    }\n};",
      "cpp": "class MyQueue {\npublic:\n    MyQueue() {\n        // Initialize your two stacks here\n    }\n    \n    void push(int x) {\n        // Write your code here\n    }\n    \n    int pop() {\n        // Write your code here\n    }\n    \n    int peek() {\n        // Write your code here\n    }\n    \n    bool empty() {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "LRU Cache",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: 1. `LRUCache(capacity)` Initialize the LRU cache with positive size capacity. 2. `get(key)` Return the value of the key if the key exists, otherwise return -1. 3. `put(key, value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key. The functions get and put must each run in O(1) average time complexity. This is typically achieved using a combination of a Doubly Linked List and a Hash Map.",
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    "examples": "Input: operations = [\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"], values = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]. Output: [null, null, null, 1, null, -1, null, -1, 3, 4]. Explanation: LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); // returns 1 lRUCache.put(3, 3); // evicts key 2 lRUCache.get(2); // returns -1 (not found)",
    "starterCode": {
      "java": "class LRUCache {\n    public LRUCache(int capacity) {\n        // Initialize cache and tracking structure\n    }\n    \n    public int get(int key) {\n        // Write your code here\n    }\n    \n    public void put(int key, int value) {\n        // Write your code here\n    }\n}",
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        # Initialize cache and tracking structure\n        pass\n\n    def get(self, key: int) -> int:\n        # Write your code here\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        # Write your code here\n        pass",
      "javascript": "class LRUCache {\n    constructor(capacity) {\n        // Initialize cache and tracking structure\n    }\n\n    get(key) {\n        // Write your code here\n    }\n\n    put(key, value) {\n        // Write your code here\n    }\n};",
      "cpp": "class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        // Initialize cache and tracking structure\n    }\n    \n    int get(int key) {\n        // Write your code here\n    }\n    \n    void put(int key, int value) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Trie Implementation",
    "description": "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class: 1. `Trie()` Initializes the trie object. 2. `insert(word)` Inserts the string word into the trie. 3. `search(word)` Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise. 4. `startsWith(prefix)` Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.",
    "constraints": [
      "1 <= word.length, prefix.length <= 2000",
      "word and prefix consist only of lowercase English letters.",
      "At most 3 * 10^4 calls in total will be made to insert, search, and startsWith."
    ],
    "examples": "Input: operations = [\"Trie\", \"insert\", \"search\", \"startsWith\"], values = [[], [\"apple\"], [\"apple\"], [\"app\"]]. Output: [null, null, true, true]. Explanation: Trie trie = new Trie(); trie.insert('apple'); trie.search('apple'); // returns true trie.startsWith('app'); // returns true",
    "starterCode": {
      "java": "class Trie {\n    public Trie() {\n        // Initialize your trie nodes here\n    }\n    \n    public void insert(String word) {\n        // Write your code here\n    }\n    \n    public boolean search(String word) {\n        // Write your code here\n    }\n    \n    public boolean startsWith(String prefix) {\n        // Write your code here\n    }\n}",
      "python": "class Trie:\n    def __init__(self):\n        # Initialize your trie nodes here\n        pass\n\n    def insert(self, word: str) -> None:\n        # Write your code here\n        pass\n\n    def search(self, word: str) -> bool:\n        # Write your code here\n        pass\n\n    def startsWith(self, prefix: str) -> bool:\n        # Write your code here\n        pass",
      "javascript": "class Trie {\n    constructor() {\n        // Initialize your trie nodes here\n    }\n\n    insert(word) {\n        // Write your code here\n    }\n\n    search(word) {\n        // Write your code here\n    }\n\n    startsWith(prefix) {\n        // Write your code here\n    }\n};",
      "cpp": "class Trie {\npublic:\n    Trie() {\n        // Initialize your trie nodes here\n    }\n    \n    void insert(string word) {\n        // Write your code here\n    }\n    \n    bool search(string word) {\n        // Write your code here\n    }\n    \n    bool startsWith(string prefix) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Word Ladder",
    "description": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that: 1. Every adjacent pair of words differs by a single letter. 2. Every `si` for `1 <= i <= sk` is in `wordList`. Note that `beginWord` does not need to be in `wordList`. 3. `sk == endWord`. Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or 0 if no such sequence exists. This is solved using Breadth First Search (BFS) on a graph where words are nodes and edges represent single letter edits.",
    "constraints": [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
      "beginWord != endWord",
      "All words in wordList are unique."
    ],
    "examples": "Input: beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\", \"dot\", \"dog\", \"lot\", \"log\", \"cog\"]. Output: 5. Explanation: One shortest transformation sequence is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog', which is 5 words long.",
    "starterCode": {
      "java": "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function ladderLength(beginWord, endWord, wordList) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Network Delay Time",
    "description": "You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = [ui, vi, wi]`, where `ui` is the source node, `vi` is the target node, and `wi` is the time it takes for a signal to travel from source to target. We will send a signal from a given node `k`. Return the minimum time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return -1. This is an application of Dijkstra's algorithm for finding single-source shortest paths on a weighted directed graph.",
    "constraints": [
      "1 <= n <= 100",
      "1 <= k <= n",
      "1 <= times.length <= 6000",
      "times[i].length == 3",
      "1 <= ui, vi <= n",
      "ui != vi",
      "0 <= wi <= 100",
      "All the pairs (ui, vi) are unique."
    ],
    "examples": "Input: times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2. Output: 2. Explanation: The signal is sent from node 2. It reaches node 1 at time 1, node 3 at time 1, and node 4 at time 2 (via node 3). So the maximum time is 2.",
    "starterCode": {
      "java": "class Solution {\n    public int networkDelayTime(int[][] times, int n, int k) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function networkDelayTime(times, n, k) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n        // Write your code here\n    }\n};"
    }
  },
  {
    "title": "Dijkstra Shortest Path",
    "description": "Given a weighted connected undirected graph with `V` vertices and an adjacency list `adj` where `adj[i]` contains pairs representing an edge to another node along with its weight, find the shortest distance from a source vertex `S` to all other vertices in the graph. The output should be an array of integers where the `i`-th element represents the minimum weight path from `S` to vertex `i`. If a vertex is unreachable from `S`, its distance should remain infinity or represented by -1 depending on convention. Use a priority queue (min-heap) to greedily select the vertex with the minimum distance at each step to achieve O(E log V) complexity.",
    "constraints": [
      "1 <= V <= 1000",
      "1 <= E <= 10^5",
      "0 <= S < V",
      "Weights of edges are non-negative integers."
    ],
    "examples": "Input: V = 3, adj = [[[1, 1], [2, 6]], [[0, 1], [2, 3]], [[0, 6], [1, 3]]], S = 0. Output: [0, 1, 4]. Explanation: The shortest distance from 0 to 0 is 0. From 0 to 1 is 1. From 0 to 2 is 4 (via node 1, since 1 + 3 = 4 is shorter than direct edge 6).",
    "starterCode": {
      "java": "class Solution {\n    public int[] dijkstra(int V, List<List<int[]>> adj, int S) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def dijkstra(self, V: int, adj: List[List[List[int]]], S: int) -> List[int]:\n        # Write your code here\n        pass",
      "javascript": "function dijkstra(V, adj, S) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> dijkstra(int V, vector<vector<pair<int, int>>>& adj, int S) {\n        // Write your code here\n    }\n};"
    }
  }
];
