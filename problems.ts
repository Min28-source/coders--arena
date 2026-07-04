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
    "outputType": "int[]",
    "starterCode": {
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Write your code here\n        pass",
      "javascript": "function twoSum(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line1 = br.readLine();\n        if (line1 == null) return;\n        String[] numsStr = line1.trim().split(\"\\\\s+\");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) nums[i] = Integer.parseInt(numsStr[i]);\n        int target = Integer.parseInt(br.readLine().trim());\n        Solution solver = new Solution();\n        int[] res = solver.twoSum(nums, target);\n        System.out.println(\"[\" + res[0] + \", \" + res[1] + \"]\");\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\nfrom typing import List\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        nums = list(map(int, lines[0].split()))\n        target = int(lines[1].strip())\n        res = Solution().twoSum(nums, target)\n        print(f\"[{res[0]}, {res[1]}]\")",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length >= 2) {\n    const nums = lines[0].trim().split(/\\s+/).map(Number);\n    const target = parseInt(lines[1].trim(), 10);\n    const res = twoSum(nums, target);\n    if (!Array.isArray(res)) {\n        console.error('Expected twoSum to return an array.');\n        process.exit(1);\n    }\n    console.log(`[${res[0]}, ${res[1]}]`);\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    stringstream ss(line);\n    int val; vector<int> nums;\n    while (ss >> val) nums.push_back(val);\n    int target;\n    if (cin >> target) {\n        Solution solver;\n        vector<int> res = solver.twoSum(nums, target);\n        cout << \"[\" << res[0] << \", \" << res[1] << \"]\" << endl;\n    }\n    return 0;\n}"
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
    "outputType": "boolean",
    "starterCode": {
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function isValid(s) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String s = br.readLine();\n        s = (s == null) ? \"\" : s.trim();\n        Solution solver = new Solution();\n        System.out.println(solver.isValid(s) ? \"true\" : \"false\");\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    print(\"true\" if Solution().isValid(line) else \"false\")",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconst res = isValid(s);\nif (typeof res !== 'boolean') {\n    console.error('Expected isValid to return a boolean.');\n    process.exit(1);\n}\nconsole.log(res ? \"true\" : \"false\");",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string s;\n    if (cin >> s) {\n        Solution solver;\n        cout << (solver.isValid(s) ? \"true\" : \"false\") << endl;\n    } else {\n        Solution solver;\n        cout << (solver.isValid(\"\") ? \"true\" : \"false\") << endl;\n    }\n    return 0;\n}"
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
    "outputType": "int",
    "starterCode": {
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function maxSubArray(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        String[] numsStr = line.trim().split(\"\\\\s+\");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) nums[i] = Integer.parseInt(numsStr[i]);\n        Solution solver = new Solution();\n        System.out.println(solver.maxSubArray(nums));\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\nfrom typing import List\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        nums = list(map(int, line.split()))\n        print(Solution().maxSubArray(nums))",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst line = fs.readFileSync(0, 'utf-8').trim();\nif (line) {\n    const nums = line.split(/\\s+/).map(Number);\n    const res = maxSubArray(nums);\n    if (!Number.isInteger(res)) {\n        console.error('Expected maxSubArray to return an integer.');\n        process.exit(1);\n    }\n    console.log(res);\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    stringstream ss(line);\n    int val; vector<int> nums;\n    while (ss >> val) nums.push_back(val);\n    Solution solver;\n    cout << solver.maxSubArray(nums) << endl;\n    return 0;\n}"
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
    "outputType": "int",
    "starterCode": {
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function search(nums, target) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line1 = br.readLine();\n        if (line1 == null) return;\n        String[] numsStr = line1.trim().split(\"\\\\s+\");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) nums[i] = Integer.parseInt(numsStr[i]);\n        int target = Integer.parseInt(br.readLine().trim());\n        Solution solver = new Solution();\n        System.out.println(solver.search(nums, target));\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\nfrom typing import List\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 2:\n        nums = list(map(int, lines[0].split()))\n        target = int(lines[1].strip())\n        print(Solution().search(nums, target))",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length >= 2) {\n    const nums = lines[0].trim().split(/\\s+/).map(Number);\n    const target = parseInt(lines[1].trim(), 10);\n    const res = search(nums, target);\n    if (!Number.isInteger(res)) {\n        console.error('Expected search to return an integer.');\n        process.exit(1);\n    }\n    console.log(res);\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    stringstream ss(line);\n    int val; vector<int> nums;\n    while (ss >> val) nums.push_back(val);\n    int target;\n    if (cin >> target) {\n        Solution solver;\n        cout << solver.search(nums, target) << endl;\n    }\n    return 0;\n}"
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
    "outputType": "int[]",
    "starterCode": {
      "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Modify nums1 in-place, do not return anything\n    }\n}",
      "python": "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        # Modify nums1 in-place, do not return anything\n        pass",
      "javascript": "function merge(nums1, m, nums2, n) {\n    // Modify nums1 in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Modify nums1 in-place, do not return anything\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line1 = br.readLine();\n        if (line1 == null) return;\n        String[] n1Str = line1.trim().split(\"\\\\s+\");\n        int m = Integer.parseInt(br.readLine().trim());\n        String line3 = br.readLine();\n        String[] n2Str = (line3 == null || line3.trim().isEmpty()) ? new String[0] : line3.trim().split(\"\\\\s+\");\n        int n = Integer.parseInt(br.readLine().trim());\n        \n        int[] nums1 = new int[m + n];\n        for (int i = 0; i < m && i < n1Str.length; i++) nums1[i] = Integer.parseInt(n1Str[i]);\n        int[] nums2 = new int[n];\n        for (int i = 0; i < n && i < n2Str.length; i++) nums2[i] = Integer.parseInt(n2Str[i]);\n        \n        Solution solver = new Solution();\n        solver.merge(nums1, m, nums2, n);\n        \n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < nums1.length; i++) {\n            sb.append(nums1[i]).append(i == nums1.length - 1 ? \"\" : \", \");\n        }\n        sb.append(\"]\");\n        System.out.println(sb.toString());\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    lines = sys.stdin.read().splitlines()\n    if len(lines) >= 4:\n        n1Str = lines[0].split()\n        m = int(lines[1].strip())\n        n2Str = lines[2].split()\n        n = int(lines[3].strip())\n        nums1 = [int(n1Str[i]) for i in range(min(m, len(n1Str)))] + [0] * (m + n - min(m, len(n1Str)))\n        nums2 = [int(n2Str[i]) for i in range(min(n, len(n2Str)))]\n        Solution().merge(nums1, m, nums2, n)\n        print(\"[\" + \", \".join(map(str, nums1)) + \"]\")",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length >= 4) {\n    const n1Str = lines[0].trim() ? lines[0].trim().split(/\\s+/) : [];\n    const m = parseInt(lines[1].trim(), 10);\n    const n2Str = lines[2].trim() ? lines[2].trim().split(/\\s+/) : [];\n    const n = parseInt(lines[3].trim(), 10);\n    const nums1 = n1Str.slice(0, m).map(Number);\n    while(nums1.length < m + n) nums1.push(0);\n    const nums2 = n2Str.slice(0, n).map(Number);\n    const res = merge(nums1, m, nums2, n);\n    console.log(\"[\" + nums1.join(\", \") + \"]\");\n}",
      "cpp": "#include <iostream>\ninclude <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line1, line2, line3, line4;\n    if (!getline(cin, line1)) return 0;\n    if (!getline(cin, line2)) return 0;\n    if (!getline(cin, line3)) return 0;\n    if (!getline(cin, line4)) return 0;\n    \n    stringstream ss1(line1);\n    int val, m, n;\n    vector<int> n1Str;\n    while(ss1 >> val) n1Str.push_back(val);\n    \n    stringstream(line2) >> m;\n    \n    stringstream ss3(line3);\n    vector<int> nums2;\n    while(ss3 >> val) nums2.push_back(val);\n    \n    stringstream(line4) >> n;\n    \n    vector<int> nums1(m + n, 0);\n    for (int i = 0; i < m && i < (int)n1Str.size(); i++) nums1[i] = n1Str[i];\n    if ((int)nums2.size() > n) nums2.resize(n);\n    \n    Solution solver;\n    solver.merge(nums1, m, nums2, n);\n    cout << \"[\";\n    for(size_t i=0; i<nums1.size(); ++i) {\n        cout << nums1[i] << (i == nums1.size()-1 ? \"\" : \", \");\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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
    "outputType": "string[]",
    "starterCode": {
      "java": "class Solution {\n    public void reverseString(char[] s) {\n        // Modify s in-place, do not return anything\n    }\n}",
      "python": "class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        # Write your code here\n        pass",
      "javascript": "function reverseString(s) {\n    // Modify s in-place, do not return anything\n};",
      "cpp": "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Modify s in-place, do not return anything\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n \n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        String[] elements = line.trim().split(\"\\\\s+\");\n        char[] s = new char[elements.length];\n        for (int i = 0; i < elements.length; i++) s[i] = elements[i].charAt(0);\n        Solution solver = new Solution();\n        solver.reverseString(s);\n        StringBuilder sb = new StringBuilder(\"[\");\n        for (int i = 0; i < s.length; i++) {\n            sb.append(\"\\\"\").append(s[i]).append(\"\\\"\").append(i == s.length - 1 ? \"\" : \", \");\n        }\n        sb.append(\"]\");\n        System.out.println(sb.toString());\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        s = line.split()\n        Solution().reverseString(s)\n        out = \"[\" + \", \".join(f'\"{ch}\"' for ch in s) + \"]\"\n        print(out)",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst line = fs.readFileSync(0, 'utf-8').trim();\nif (line) {\n    const s = line.split(/\\s+/);\n    const res = reverseString(s);\n    console.log(\"[\" + s.map(ch => `\"${ch}\"`).join(\", \") + \"]\");\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    stringstream ss(line);\n    string item; vector<char> s;\n    while (ss >> item) s.push_back(item[0]);\n    Solution solver;\n    solver.reverseString(s);\n    cout << \"[\";\n    for(size_t i=0; i<s.size(); ++i) {\n        cout << \"\\\"\" << s[i] << \"\\\"\" << (i == s.size()-1 ? \"\" : \", \");\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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
    "outputType": "boolean",
    "starterCode": {
      "java": "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function isPalindrome(x) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n \n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        int x = Integer.parseInt(line.trim());\n        Solution solver = new Solution();\n        System.out.println(solver.isPalindrome(x) ? \"true\" : \"false\");\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        x = int(line)\n        print(\"true\" if Solution().isPalindrome(x) else \"false\")",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst line = fs.readFileSync(0, 'utf-8').trim();\n\nif (!line) {\n    console.error('No input provided.');\n    process.exit(1);\n}\n\nconst x = parseInt(line, 10);\n\nlet result;\n\ntry {\n    result = isPalindrome(x);\n} catch (err) {\n    console.error(err.message);\n    process.exit(1);\n}\n\nif (typeof result !== 'boolean') {\n    console.error(`Expected isPalindrome() to return a boolean, but got ${typeof result}.`);\n    process.exit(1);\n}\n\nconsole.log(result ? 'true' : 'false');",
      "cpp": "#include <iostream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    int x;\n    if (cin >> x) {\n        Solution solver;\n        cout << (solver.isPalindrome(x) ? \"true\" : \"false\") << endl;\n    }\n    return 0;\n}"
    }
  },
  {
    "title": "Climbing Stairs",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? For example, if n = 3, there are three ways: (1 step + 1 step + 1 step), (1 step + 2 steps), and (2 steps + 1 step).",
    "constraints": [
      "1 <= n <= 45"
    ],
    "examples": "Input: n = 3. Output: 3. Explanation: There are three ways to climb to the top: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step.",
    "outputType": "int",
    "starterCode": {
      "java": "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your code here\n        pass",
      "javascript": "function climbStairs(n) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        int n = Integer.parseInt(line.trim());\n        Solution solver = new Solution();\n        System.out.println(solver.climbStairs(n));\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        n = int(line)\n        print(Solution().climbStairs(n))",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst line = fs.readFileSync(0, 'utf-8').trim();\nif (line) {\n    const n = parseInt(line, 10);\n    const res = climbStairs(n);\n    if (!Number.isInteger(res)) {\n        console.error('Expected climbStairs to return an integer.');\n        process.exit(1);\n    }\n    console.log(res);\n}",
      "cpp": "#include <iostream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    int n;\n    if (cin >> n) {\n        Solution solver;\n        cout << solver.climbStairs(n) << endl;\n    }\n    return 0;\n}"
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
    "outputType": "int",
    "starterCode": {
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your code here\n        pass",
      "javascript": "function maxProfit(prices) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        String[] pricesStr = line.trim().split(\"\\\\s+\");\n        int[] prices = new int[pricesStr.length];\n        for (int i = 0; i < pricesStr.length; i++) prices[i] = Integer.parseInt(pricesStr[i]);\n        Solution solver = new Solution();\n        System.out.println(solver.maxProfit(prices));\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\nfrom typing import List\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        prices = list(map(int, line.split()))\n        print(Solution().maxProfit(prices))",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst line = fs.readFileSync(0, 'utf-8').trim();\nif (line) {\n    const prices = line.split(/\\s+/).map(Number);\n    const res = maxProfit(prices);\n    if (!Number.isInteger(res)) {\n        console.error('Expected maxProfit to return an integer.');\n        process.exit(1);\n    }\n    console.log(res);\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    stringstream ss(line);\n    int val; vector<int> prices;\n    while (ss >> val) prices.push_back(val);\n    Solution solver;\n    cout << solver.maxProfit(prices) << endl;\n    return 0;\n}"
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
    "outputType": "boolean",
    "starterCode": {
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n    }\n}",
      "python": "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        # Write your code here\n        pass",
      "javascript": "function containsDuplicate(nums) {\n    // Write your code here\n};",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your code here\n    }\n};"
    },
    "runnerCode": {
      "java": "import java.util.*;\nimport java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        String[] numsStr = line.trim().split(\"\\\\s+\");\n        int[] nums = new int[numsStr.length];\n        for (int i = 0; i < numsStr.length; i++) nums[i] = Integer.parseInt(numsStr[i]);\n        Solution solver = new Solution();\n        System.out.println(solver.containsDuplicate(nums) ? \"true\" : \"false\");\n    }\n}\n\n{{USER_CODE}}\n",
      "python": "import sys\nfrom typing import List\n\n{{USER_CODE}}\n\nif __name__ == '__main__':\n    line = sys.stdin.read().strip()\n    if line:\n        nums = list(map(int, line.split()))\n        print(\"true\" if Solution().containsDuplicate(nums) else \"false\")",
      "javascript": "const fs = require('fs');\n\n{{USER_CODE}}\n\nconst line = fs.readFileSync(0, 'utf-8').trim();\nif (line) {\n    const nums = line.split(/\\s+/).map(Number);\n    const res = containsDuplicate(nums);\n    if (typeof res !== 'boolean') {\n        console.error('Expected containsDuplicate to return a boolean.');\n        process.exit(1);\n    }\n    console.log(res ? \"true\" : \"false\");\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\nusing namespace std;\n\n{{USER_CODE}}\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    stringstream ss(line);\n    int val; vector<int> nums;\n    while (ss >> val) nums.push_back(val);\n    Solution solver;\n    cout << (solver.containsDuplicate(nums) ? \"true\" : \"false\") << endl;\n    return 0;\n}"
    }
  }
];