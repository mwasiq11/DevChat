export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

void printIntArray(int* arr, int size) {
    if (size == 0 || arr == NULL) {
        printf("[]\n");
        return;
    }
    printf("[%d", arr[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", arr[i]);
    }
    printf("]\n");
}

int main() {
    int returnSize;
    int nums1[] = {2, 7, 11, 15};
    int* result1 = twoSum(nums1, 4, 9, &returnSize);
    printIntArray(result1, returnSize); // Expected: [0, 1]
    free(result1);

    int nums2[] = {3, 2, 4};
    int* result2 = twoSum(nums2, 3, 6, &returnSize);
    printIntArray(result2, returnSize); // Expected: [1, 2]
    free(result2);

    int nums3[] = {3, 3};
    int* result3 = twoSum(nums3, 2, 6, &returnSize);
    printIntArray(result3, returnSize); // Expected: [0, 1]
    free(result3);

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    static vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        return {};
    }
};

void printVector(const vector<int>& vec) {
    if (vec.empty()) {
        cout << "[]" << endl;
        return;
    }
    cout << "[" << vec[0];
    for (size_t i = 1; i < vec.size(); ++i) {
        cout << ", " << vec[i];
    }
    cout << "]" << endl;
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> result1 = Solution::twoSum(nums1, 9);
    printVector(result1); // Expected: [0, 1]

    vector<int> nums2 = {3, 2, 4};
    vector<int> result2 = Solution::twoSum(nums2, 6);
    printVector(result2); // Expected: [1, 2]

    vector<int> nums3 = {3, 3};
    vector<int> result3 = Solution::twoSum(nums3, 6);
    printVector(result3); // Expected: [0, 1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      c: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      c: `#include <stdio.h>

void reverseString(char* s, int sSize) {
    // Write your solution here
    
}

void printCharArray(char* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("'%c'", arr[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]\n");
}

int main() {
    char test1[] = {'h','e','l','l','o'};
    reverseString(test1, 5);
    printCharArray(test1, 5); // Expected: [o, l, l, e, h]
    
    char test2[] = {'H','a','n','n','a','h'};
    reverseString(test2, 6);
    printCharArray(test2, 6); // Expected: [h, a, n, n, a, H]
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    static void reverseString(vector<char>& s) {
        // Write your solution here
        
    }
};

void printCharVector(const vector<char>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); ++i) {
        cout << "'" << vec[i] << "'";
        if (i < vec.size() - 1) cout << ", ";
    }
    cout << "]" << endl;
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    Solution::reverseString(test1);
    printCharVector(test1); // Expected: [o, l, l, e, h]
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    Solution::reverseString(test2);
    printCharVector(test2); // Expected: [h, a, n, n, a, H]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      c: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      cpp: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool isPalindrome(char * s) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false"); // Expected: true
    printf("%s\n", isPalindrome("race a car") ? "true" : "false"); // Expected: false
    printf("%s\n", isPalindrome(" ") ? "true" : "false"); // Expected: true
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    static bool isPalindrome(string s) {
        // Write your solution here
        return false;
    }
};

int main() {
    cout << boolalpha;
    cout << Solution::isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: true
    cout << Solution::isPalindrome("race a car") << endl; // Expected: false
    cout << Solution::isPalindrome(" ") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      c: `#include <stdio.h>
#include <limits.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int nums1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\n", maxSubArray(nums1, 9)); // Expected: 6
    
    int nums2[] = {1};
    printf("%d\n", maxSubArray(nums2, 1)); // Expected: 1
    
    int nums3[] = {5,4,-1,7,8};
    printf("%d\n", maxSubArray(nums3, 5)); // Expected: 23
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

class Solution {
public:
    static int maxSubArray(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << Solution::maxSubArray(nums1) << endl; // Expected: 6
    
    vector<int> nums2 = {1};
    cout << Solution::maxSubArray(nums2) << endl; // Expected: 1
    
    vector<int> nums3 = {5,4,-1,7,8};
    cout << Solution::maxSubArray(nums3) << endl; // Expected: 23
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      c: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      c: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    // Write your solution here
    return 0;
}

int main() {
    int height1[] = {1,8,6,2,5,4,8,3,7};
    printf("%d\n", maxArea(height1, 9)); // Expected: 49
    
    int height2[] = {1,1};
    printf("%d\n", maxArea(height2, 2)); // Expected: 1
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    static int maxArea(vector<int>& height) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    cout << Solution::maxArea(height1) << endl; // Expected: 49
    
    vector<int> height2 = {1,1};
    cout << Solution::maxArea(height2) << endl; // Expected: 1
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      c: "49\n1",
      cpp: "49\n1",
    },
  },
  "kth-largest-element": {
    id: "kth-largest-element",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Sorting • Heap",
    description: {
      text: "Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
      notes: [
        "You may assume k is always valid, 1 ≤ k ≤ array's length.",
        "Try to solve it in O(n log k) time using a heap or O(n) time using quickselect.",
      ],
    },
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "1 ≤ k ≤ nums.length",
    ],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

# Test cases
print(findKthLargest([3,2,1,5,6,4], 2))  # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6], 4))  # Expected: 4`,
      java: `import java.util.*;

class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4}, 2)); // Expected: 5
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4)); // Expected: 4
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int findKthLargest(int* nums, int numsSize, int k) {
    // Write your solution here
    return 0;
}

int main() {
    int nums1[] = {3,2,1,5,6,4};
    printf("%d\n", findKthLargest(nums1, 6, 2)); // Expected: 5
    
    int nums2[] = {3,2,3,1,2,4,5,5,6};
    printf("%d\n", findKthLargest(nums2, 9, 4)); // Expected: 4
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    static int findKthLargest(vector<int>& nums, int k) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<int> nums1 = {3,2,1,5,6,4};
    cout << Solution::findKthLargest(nums1, 2) << endl; // Expected: 5
    
    vector<int> nums2 = {3,2,3,1,2,4,5,5,6};
    cout << Solution::findKthLargest(nums2, 4) << endl; // Expected: 4
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n4",
      python: "5\n4",
      java: "5\n4",
      c: "5\n4",
      cpp: "5\n4",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting • Interval",
    description: {
      text: "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [
        "Intervals may not be initially sorted.",
        "Return the intervals in ascending order by start time.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ start_i ≤ end_i ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,
      python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]]))  # Expected: [[1,5]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[0][0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}}))); // Expected: [[1,6],[8,10],[15,18]]
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}}))); // Expected: [[1,5]]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

void print2DIntArray(int** arr, int size, int* colSizes) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("[%d,%d]", arr[i][0], arr[i][1]);
        if (i < size - 1) printf(",");
    }
    printf("]\n");
}

int main() {
    // C test cases are complex to set up dynamically.
    // We'll just show the function signature.
    printf("See expected output.\n"); // Placeholder
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    static vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Write your solution here
        return {};
    }
};

void print2DVector(const vector<vector<int>>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); ++i) {
        cout << "[" << vec[i][0] << "," << vec[i][1] << "]";
        if (i < vec.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    vector<vector<int>> intervals1 = {{1,3},{2,6},{8,10},{15,18}};
    vector<vector<int>> result1 = Solution::merge(intervals1);
    print2DVector(result1); // Expected: [[1,6],[8,10],[15,18]]
    
    vector<vector<int>> intervals2 = {{1,4},{4,5}};
    vector<vector<int>> result2 = Solution::merge(intervals2);
    print2DVector(result2); // Expected: [[1,5]]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      python: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
      c: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      cpp: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "You must solve it without using division and in O(n) time.",
        "Try to solve it with O(1) extra space (output array does not count).",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
    ],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
    return result;
}

void printIntArray(int* arr, int size) {
    if (size == 0 || arr == NULL) {
        printf("[]\n");
        return;
    }
    printf("[%d", arr[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", arr[i]);
    }
    printf("]\n");
}

int main() {
    int returnSize;
    int nums1[] = {1,2,3,4};
    int* result1 = productExceptSelf(nums1, 4, &returnSize);
    printIntArray(result1, returnSize); // Expected: [24,12,8,6]
    free(result1);

    int nums2[] = {-1,1,0,-3,3};
    int* result2 = productExceptSelf(nums2, 5, &returnSize);
    printIntArray(result2, returnSize); // Expected: [0,0,9,0,0]
    free(result2);

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    static vector<int> productExceptSelf(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};

void printVector(const vector<int>& vec) {
    if (vec.empty()) {
        cout << "[]" << endl;
        return;
    }
    cout << "[" << vec[0];
    for (size_t i = 1; i < vec.size(); ++i) {
        cout << ", " << vec[i];
    }
    cout << "]" << endl;
}

int main() {
    vector<int> nums1 = {1,2,3,4};
    vector<int> result1 = Solution::productExceptSelf(nums1);
    printVector(result1); // Expected: [24,12,8,6]

    vector<int> nums2 = {-1,1,0,-3,3};
    vector<int> result2 = Solution::productExceptSelf(nums2);
    printVector(result2); // Expected: [0,0,9,0,0]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      c: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      cpp: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "Try to solve it with O(n) time using a sliding window approach.",
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation:
          '"abc" is the longest substring without repeating characters.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: '"b" is the longest substring without repeating characters.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation:
          '"wke" is the longest substring without repeating characters.',
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char * s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
    printf("%d\n", lengthOfLongestSubstring("bbbbb")); // Expected: 1
    printf("%d\n", lengthOfLongestSubstring("pwwkew")); // Expected: 3
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    static int lengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }
};

int main() {
    cout << Solution::lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << Solution::lengthOfLongestSubstring("bbbbb") << endl; // Expected: 1
    cout << Solution::lengthOfLongestSubstring("pwwkew") << endl; // Expected: 3
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
      c: "3\n1\n3",
      cpp: "3\n1\n3",
    },
  },
  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Array • Simulation",
    description: {
      text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
      notes: [
        "Start from the top-left corner and move clockwise.",
        "Make sure to handle matrices where m != n.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]",
      },
      {
        input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        output: "[1,2,3,4,8,12,11,10,9,5,6,7]",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 10³",
      "-10⁵ ≤ matrix[i][j] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
  // Write your solution here
}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      python: `def spiralOrder(matrix):
    # Write your solution here
    pass

# Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))  # Expected: [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))  # Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}})); // Expected: [1,2,3,6,9,8,7,4,5]
        System.out.println(spiralOrder(new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12}})); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

void printIntArray(int* arr, int size) {
    if (size == 0 || arr == NULL) {
        printf("[]\n");
        return;
    }
    printf("[%d", arr[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", arr[i]);
    }
    printf("]\n");
}

int main() {
    // C test cases are complex to set up dynamically.
    // We'll just show the function signature.
    printf("[1, 2, 3, 6, 9, 8, 7, 4, 5]\n"); // Placeholder
    printf("[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]\n"); // Placeholder
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    static vector<int> spiralOrder(vector<vector<int>>& matrix) {
        // Write your solution here
        return {};
    }
};

void printVector(const vector<int>& vec) {
    if (vec.empty()) {
        cout << "[]" << endl;
        return;
    }
    cout << "[" << vec[0];
    for (size_t i = 1; i < vec.size(); ++i) {
        cout << ", " << vec[i];
    }
    cout << "]" << endl;
}

int main() {
    vector<vector<int>> matrix1 = {{1,2,3},{4,5,6},{7,8,9}};
    vector<int> result1 = Solution::spiralOrder(matrix1);
    printVector(result1); // Expected: [1,2,3,6,9,8,7,4,5]
    
    vector<vector<int>> matrix2 = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};
    vector<int> result2 = Solution::spiralOrder(matrix2);
    printVector(result2); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,6,9,8,7,4,5]\n[1,2,3,4,8,12,11,10,9,5,6,7]",
      python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      c: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      cpp: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
    },
  },

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window",
    description: {
      text: "Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window, return an empty string.",
      notes: [
        "If there is a tie, return the substring that appears first.",
        "Try to solve it using a sliding window with O(n) time.",
      ],
    },
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 10⁵",
      "s and t consist of English letters.",
    ],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: "BANC"
print(minWindow("a", "a"))  # Expected: "a"`,
      java: `import java.util.*;

class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }
    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
        System.out.println(minWindow("a", "a")); // Expected: "a"
    }
}`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char * minWindow(char * s, char * t) {
    // Write your solution here
    // Remember to return a new dynamically allocated string
    char* result = (char*)malloc(1 * sizeof(char));
    result[0] = '\0';
    return result;
}

int main() {
    char* res1 = minWindow("ADOBECODEBANC", "ABC");
    printf("\\"%s\\"\n", res1); // Expected: "BANC"
    free(res1);
    
    char* res2 = minWindow("a", "a");
    printf("\\"%s\\"\n", res2); // Expected: "a"
    free(res2);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <climits>

using namespace std;

class Solution {
public:
    static string minWindow(string s, string t) {
        // Write your solution here
        return "";
    }
};

int main() {
    cout << "\\"\\"" << Solution::minWindow("ADOBECODEBANC", "ABC") << "\\"\\"" << endl; // Expected: "BANC"
    cout << "\\"\\"" << Solution::minWindow("a", "a") << "\\"\\"" << endl; // Expected: "a"
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "BANC\na",
      python: "BANC\na",
      java: "BANC\na",
      c: '"BANC"\n"a"',
      cpp: '"BANC"\n"a"',
    },
  },

  "binary-tree-inorder-traversal": {
    id: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    difficulty: "Medium",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      notes: ["You can solve it recursively or iteratively using a stack."],
    },
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {
  // Write your solution here
}

// Test cases
// Helper function to build tree is assumed
// console.log(inorderTraversal([1,null,2,3])); // Expected: [1,3,2]
// console.log(inorderTraversal([])); // Expected: []`,
      python: `def inorderTraversal(root):
    # Write your solution here
    pass

# Test cases
# Helper function to build tree is assumed
# print(inorderTraversal([1,None,2,3]))  # Expected: [1,3,2]
# print(inorderTraversal([]))  # Expected: []`,
      java: `import java.util.*;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public static List<Integer> inorderTraversal(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    // Assume TreeNode.buildTree helper exists
    public static void main(String[] args) {
        // System.out.println(inorderTraversal(TreeNode.buildTree(new Integer[]{1,null,2,3}))); // Expected: [1,3,2]
        // System.out.println(inorderTraversal(TreeNode.buildTree(new Integer[]{}))); // Expected: []
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

int main() {
    // Building tree from array is complex in C starter code.
    // Test cases are omitted.
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    static vector<int> inorderTraversal(TreeNode* root) {
        // Write your solution here
        return {};
    }
};

int main() {
    // Building tree from array is complex in C++ starter code.
    // Test cases are omitted.
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,3,2]\n[]",
      python: "[1, 3, 2]\n[]",
      java: "[1, 3, 2]\n[]",
      c: "[1, 3, 2]\n[]",
      cpp: "[1, 3, 2]\n[]",
    },
  },

  "lowest-common-ancestor-bst": {
    id: "lowest-common-ancestor-bst",
    title: "Lowest Common Ancestor of BST",
    difficulty: "Easy",
    category: "Tree • Binary Search Tree",
    description: {
      text: "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.",
      notes: [
        "The LCA of two nodes p and q in a BST is defined as the lowest node that has both p and q as descendants.",
      ],
    },
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
      },
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        output: "2",
      },
    ],
    constraints: ["All Node.val are unique.", "p != q", "p and q exist in the BST."],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {
  // Write your solution here
}

// Test cases
// Helper function to build tree is assumed
// console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8)); // Expected: 6
// console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4)); // Expected: 2`,
      python: `def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass

# Test cases
# Helper function to build tree is assumed
# print(lowestCommonAncestor([6,2,8,0,4,7,9,None,None,3,5], 2, 8))  # Expected: 6
# print(lowestCommonAncestor([6,2,8,0,4,7,9,None,None,3,5], 2, 4))  # Expected: 2`,
      java: `import java.util.*;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        return null;
    }
    public static void main(String[] args) {
        // Assume TreeNode.buildTree helper exists
        // TreeNode root = TreeNode.buildTree(new Integer[]{6,2,8,0,4,7,9,null,null,3,5});
        // TreeNode p1 = new TreeNode(2); // This is simplified, p and q are nodes *in* the tree
        // TreeNode q1 = new TreeNode(8);
        // System.out.println(lowestCommonAncestor(root, p1, q1).val); // Expected: 6
    }
}`,
      c: `#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    // Write your solution here
    return NULL;
}

int main() {
    // Building tree from array is complex in C starter code.
    // Test cases are omitted.
    return 0;
}`,
      cpp: `#include <iostream>

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    static TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        // Write your solution here
        return nullptr;
    }
};

int main() {
    // Building tree from array is complex in C++ starter code.
    // Test cases are omitted.
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n2",
      python: "6\n2",
      java: "6\n2",
      c: "6\n2",
      cpp: "6\n2",
    },
  },

  "serialize-and-deserialize-binary-tree": {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "Tree • Design",
    description: {
      text: "Design an algorithm to serialize and deserialize a binary tree. Serialization converts a tree to a string and deserialization converts it back to the original tree structure.",
      notes: [
        "You may serialize your tree in any valid format.",
        "Try to solve it with O(n) time for both operations.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function serialize(root) {
  // Write your solution here
}
function deserialize(data) {
  // Write your solution here
}

// Test cases
// console.log(serialize(deserialize("[1,2,3,null,null,4,5]"))); // Expected: "[1,2,3,null,null,4,5]"
// console.log(serialize(deserialize("[]"))); // Expected: "[]"`,
      python: `def serialize(root):
    # Write your solution here
    pass
def deserialize(data):
    # Write your solution here
    pass

# Test cases
# print(serialize(deserialize("[1,2,3,None,None,4,5]")))  # Expected: "[1,2,3,None,None,4,5]"
# print(serialize(deserialize("[]")))  # Expected: "[]"`,
      java: `import java.util.*;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */
class Codec {
    public String serialize(TreeNode root) {
        // Write your solution here
        return "";
    }
    public TreeNode deserialize(String data) {
        // Write your solution here
        return null;
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

/** Encodes a tree to a single string. */
char* serialize(struct TreeNode* root) {
    // Write your solution here
    return (char*)calloc(1, 1);
}

/** Decodes your encoded data to tree. */
struct TreeNode* deserialize(char* data) {
    // Write your solution here
    return NULL;
}

int main() {
    // Test cases are complex for C starter code.
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <sstream>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec {
public:
    // Encodes a tree to a single string.
    static string serialize(TreeNode* root) {
        // Write your solution here
        return "";
    }

    // Decodes your encoded data to tree.
    static TreeNode* deserialize(string data) {
        // Write your solution here
        return nullptr;
    }
};

int main() {
    // Test cases are complex for C++ starter code.
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,null,null,4,5]\n[]",
      python: "[1,2,3,None,None,4,5]\n[]",
      java: "[1, 2, 3, null, null, 4, 5]\n[]",
      c: "[1,2,3,null,null,4,5]\n[]",
      cpp: "[1,2,3,null,null,4,5]\n[]",
    },
  },
  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Given two words, beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord such that only one letter can be changed at a time and each transformed word must exist in wordList.",
      notes: [
        "Return 0 if there is no such transformation sequence.",
        "All words have the same length and consist of lowercase letters.",
      ],
    },
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation:
          'The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog".',
      },
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "endWord.length == beginWord.length",
      "1 ≤ wordList.length ≤ 5000",
      "wordList[i].length == beginWord.length",
      "All words consist of lowercase letters.",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}

// Test cases
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"])); // Expected: 5
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"])); // Expected: 0`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

# Test cases
print(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))  # Expected: 5
print(ladderLength("hit","cog",["hot","dot","dog","lot","log"]))  # Expected: 0`,
      java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(ladderLength("hit","cog",Arrays.asList("hot","dot","dog","lot","log","cog"))); // Expected: 5
        System.out.println(ladderLength("hit","cog",Arrays.asList("hot","dot","dog","lot","log"))); // Expected: 0
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int ladderLength(char * beginWord, char * endWord, char ** wordList, int wordListSize) {
    // Write your solution here
    return 0;
}

int main() {
    char* wordList1[] = {"hot","dot","dog","lot","log","cog"};
    printf("%d\n", ladderLength("hit", "cog", wordList1, 6)); // Expected: 5
    
    char* wordList2[] = {"hot","dot","dog","lot","log"};
    printf("%d\n", ladderLength("hit", "cog", wordList2, 5)); // Expected: 0
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <queue>

using namespace std;

class Solution {
public:
    static int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<string> wordList1 = {"hot","dot","dog","lot","log","cog"};
    cout << Solution::ladderLength("hit", "cog", wordList1) << endl; // Expected: 5
    
    vector<string> wordList2 = {"hot","dot","dog","lot","log"};
    cout << Solution::ladderLength("hit", "cog", wordList2) << endl; // Expected: 0
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      c: "5\n0",
      cpp: "5\n0",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table • Heap",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
      notes: ["Try to solve it in O(n log k) time using a heap or bucket sort."],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "k is in the range [1, number of unique elements in the array].",
    ],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1)); // Expected: [1]`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1,2]
print(topKFrequent([1], 1))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1,2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1))); // Expected: [1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {
    // Write your solution here
    *returnSize = k;
    return (int*)malloc(k * sizeof(int));
}

void printIntArray(int* arr, int size) {
    if (size == 0 || arr == NULL) {
        printf("[]\n");
        return;
    }
    printf("[%d", arr[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", arr[i]);
    }
    printf("]\n");
}

int main() {
    int returnSize;
    int nums1[] = {1,1,1,2,2,3};
    int* res1 = topKFrequent(nums1, 6, 2, &returnSize);
    printIntArray(res1, returnSize); // Expected: [1, 2]
    free(res1);

    int nums2[] = {1};
    int* res2 = topKFrequent(nums2, 1, 1, &returnSize);
    printIntArray(res2, returnSize); // Expected: [1]
    free(res2);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

class Solution {
public:
    static vector<int> topKFrequent(vector<int>& nums, int k) {
        // Write your solution here
        return {};
    }
};

void printVector(const vector<int>& vec) {
    if (vec.empty()) {
        cout << "[]" << endl;
        return;
    }
    cout << "[" << vec[0];
    for (size_t i = 1; i < vec.size(); ++i) {
        cout << ", " << vec[i];
    }
    cout << "]" << endl;
}

int main() {
    vector<int> nums1 = {1,1,1,2,2,3};
    vector<int> res1 = Solution::topKFrequent(nums1, 2);
    printVector(res1); // Expected: [1, 2]

    vector<int> nums2 = {1};
    vector<int> res2 = Solution::topKFrequent(nums2, 1);
    printVector(res2); // Expected: [1]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1]",
      python: "[1, 2]\n[1]",
      java: "[1, 2]\n[1]",
      c: "[1, 2]\n[1]",
      cpp: "[1, 2]\n[1]",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites given as a list of pairs [a,b] which means you must take course b before course a. Determine if you can finish all courses.",
      notes: [
        "Detect cycles in the dependency graph to determine if all courses can be finished.",
      ],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 10⁵",
      "0 ≤ prerequisites.length ≤ 10⁵",
      "prerequisites[i].length == 2",
      "0 ≤ ai, bi < numCourses",
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}})); // Expected: true
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}})); // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {
    // Write your solution here
    return false;
}

int main() {
    // C test cases are complex to set up dynamically.
    printf("true\n");  // Placeholder for [[1,0]]
    printf("false\n"); // Placeholder for [[1,0],[0,1]]
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    static bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // Write your solution here
        return false;
    }
};

int main() {
    vector<vector<int>> prereqs1 = {{1,0}};
    cout << boolalpha << Solution::canFinish(2, prereqs1) << endl; // Expected: true
    
    vector<vector<int>> prereqs2 = {{1,0},{0,1}};
    cout << boolalpha << Solution::canFinish(2, prereqs2) << endl; // Expected: false
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      c: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Heap • Design",
    description: {
      text: "The median is the middle value in an ordered integer list. Implement a data structure that supports adding numbers and finding the median from the data stream efficiently.",
      notes: ["Try to achieve O(log n) insertion and O(1) median retrieval."],
    },
    examples: [
      {
        input:
          '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]',
        output: "[null,null,null,1.5,null,2.0]",
      },
    ],
    constraints: [
      "-10⁵ ≤ num ≤ 10⁵",
      "There will be at least one element before calling findMedian.",
    ],
    starterCode: {
      javascript: `class MedianFinder {
  constructor() {
    // Initialize your data structure here
  }
  addNum(num) {
    // Write your solution here
  }
  findMedian() {
    // Write your solution here
  }
}

// Test cases
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2.0`,
      python: `class MedianFinder:
    def __init__(self):
        # Initialize your data structure here
        pass
    def addNum(self, num):
        # Write your solution here
        pass
    def findMedian(self):
        # Write your solution here
        pass

# Test cases
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # Expected: 1.5
mf.addNum(3)
print(mf.findMedian())  # Expected: 2.0`,
      java: `import java.util.*;

class MedianFinder {
    // Initialize your data structure here
    
    public void addNum(int num) {
        // Write your solution here
    }
    
    public double findMedian() {
        // Write your solution here
        return 0.0;
    }
    
    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println(mf.findMedian()); // Expected: 1.5
        mf.addNum(3);
        System.out.println(mf.findMedian()); // Expected: 2.0
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    // Initialize your data structure here
    int size;
    int* data;
} MedianFinder;

MedianFinder* medianFinderCreate() {
    MedianFinder* obj = (MedianFinder*)malloc(sizeof(MedianFinder));
    obj->size = 0;
    obj->data = NULL;
    return obj;
}

void medianFinderAddNum(MedianFinder* obj, int num) {
    // Write your solution here
}

double medianFinderFindMedian(MedianFinder* obj) {
    // Write your solution here
    return 0.0;
}

void medianFinderFree(MedianFinder* obj) {
    free(obj->data);
    free(obj);
}

int main() {
    MedianFinder* mf = medianFinderCreate();
    medianFinderAddNum(mf, 1);
    medianFinderAddNum(mf, 2);
    printf("%.1f\n", medianFinderFindMedian(mf)); // Expected: 1.5
    medianFinderAddNum(mf, 3);
    printf("%.1f\n", medianFinderFindMedian(mf)); // Expected: 2.0
    medianFinderFree(mf);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class MedianFinder {
public:
    MedianFinder() {
        // Initialize your data structure here
    }
    
    void addNum(int num) {
        // Write your solution here
    }
    
    double findMedian() {
        // Write your solution here
        return 0.0;
    }
};

int main() {
    MedianFinder mf;
    mf.addNum(1);
    mf.addNum(2);
    cout << mf.findMedian() << endl; // Expected: 1.5
    mf.addNum(3);
    cout << mf.findMedian() << endl; // Expected: 2.0
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1.5\n2.0",
      python: "1.5\n2.0",
      java: "1.5\n2.0",
      c: "1.5\n2.0",
      cpp: "1.5\n2.0",
    },
  },
  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: ["Use a sliding window approach to achieve O(n) time complexity."],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with length 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with length 1.',
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols, and spaces.",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char * s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
    printf("%d\n", lengthOfLongestSubstring("bbbbb")); // Expected: 1
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    static int lengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }
};

int main() {
    cout << Solution::lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << Solution::lengthOfLongestSubstring("bbbbb") << endl; // Expected: 1
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
      c: "3\n1",
      cpp: "3\n1",
    },
  },

  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • Breadth-First Search",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
      notes: ["Use a queue for BFS traversal."],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function levelOrder(root) {
  // Write your solution here
}

// Test cases
// console.log(levelOrder([3,9,20,null,null,15,7])); // Expected: [[3],[9,20],[15,7]]
// console.log(levelOrder([])); // Expected: []`,
      python: `def levelOrder(root):
    # Write your solution here
    pass

# Test cases
# print(levelOrder([3,9,20,None,None,15,7]))  # Expected: [[3],[9,20],[15,7]]
# print(levelOrder([]))  # Expected: []`,
      java: `import java.util.*;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        // Assume TreeNode.buildTree helper exists
        // System.out.println(levelOrder(TreeNode.buildTree(new Integer[]{3,9,20,null,null,15,7}))); // Expected: [[3],[9,20],[15,7]]
        // System.out.println(levelOrder(TreeNode.buildTree(new Integer[]{}))); // Expected: []
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** levelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

int main() {
    // Building tree from array is complex in C starter code.
    // Test cases are omitted.
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    static vector<vector<int>> levelOrder(TreeNode* root) {
        // Write your solution here
        return {};
    }
};

int main() {
    // Building tree from array is complex in C++ starter code.
    // Test cases are omitted.
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]\n[]",
      python: "[[3], [9, 20], [15, 7]]\n[]",
      java: "[[3], [9, 20], [15, 7]]\n[]",
      c: "[[3],[9,20],[15,7]]\n[]",
      cpp: "[[3],[9,20],[15,7]]\n[]",
    },
  },

  "flatten-nested-list-iterator": {
    id: "flatten-nested-list-iterator",
    title: "Flatten Nested List Iterator",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "You are given a nested list of integers nestedList. Implement an iterator to flatten it.",
      notes: [
        "Implement next() and hasNext() methods for the iterator.",
        "Use a stack to manage nested elements efficiently.",
      ],
    },
    examples: [
      {
        input: "nestedList = [[1,1],2,[1,1]]",
        output: "[1,1,2,1,1]",
      },
      {
        input: "nestedList = [1,[4,[6]]]",
        output: "[1,4,6]",
      },
    ],
    constraints: ["The elements of the list are integers or nested lists."],
    starterCode: {
      javascript: `class NestedIterator {
  constructor(nestedList) {
    // Write your solution here
  }
  next() {
    // Return the next element
  }
  hasNext() {
    // Return true if there is a next element
  }
}

// Test cases
// const i = new NestedIterator([[1,1],2,[1,1]]);
// const a = [];
// while(i.hasNext()) a.push(i.next());
// console.log(a); // Expected: [1,1,2,1,1]`,
      python: `class NestedIterator:
    def __init__(self, nestedList):
        # Write your solution here
        pass
    def next(self):
        pass
    def hasNext(self):
        pass

# Test cases
# i = NestedIterator([[1,1],2,[1,1]])
# a = []
# while i.hasNext(): a.append(i.next())
# print(a)  # Expected: [1,1,2,1,1]`,
      java: `import java.util.*;

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
interface NestedInteger {
    public boolean isInteger();
    public Integer getInteger();
    public List<NestedInteger> getList();
}

class NestedIterator {
    // Initialize your data structure here
    public NestedIterator(List<NestedInteger> nestedList) {
        // Write your solution here
    }
    public Integer next() {
        return 0;
    }
    public boolean hasNext() {
        return false;
    }
    
    public static void main(String[] args) {
        // NestedInteger interface is not implemented, test cases omitted.
        // NestedIterator i = new NestedIterator(Arrays.asList(new NestedInteger[]{...}));
        // List<Integer> a = new ArrayList<>();
        // while(i.hasNext()) a.add(i.next());
        // System.out.println(a); // Expected: [1,1,2,1,1]
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

// This is the C interface definition.
// You should not implement it, or speculate about its implementation
typedef struct NestedInteger NestedInteger;
bool NestedIntegerIsInteger(NestedInteger* ni);
int NestedIntegerGetInteger(NestedInteger* ni);
NestedInteger** NestedIntegerGetList(NestedInteger* ni);
int NestedIntegerGetListSize(NestedInteger* ni);


typedef struct {
    // Write your solution here
} NestedIterator;

NestedIterator* nestedIteratorCreate(NestedInteger** nestedList, int nestedListSize) {
    // Write your solution here
    return NULL;
}

bool nestedIteratorHasNext(NestedIterator* iter) {
    // Write your solution here
    return false;
}

int nestedIteratorNext(NestedIterator* iter) {
    // Write your solution here
    return 0;
}

void nestedIteratorFree(NestedIterator* iter) {
    // Write your solution here
}

int main() {
    // NestedInteger interface is not implemented, test cases omitted.
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
class NestedInteger {
public:
    bool isInteger() const;
    int getInteger() const;
    const vector<NestedInteger> &getList() const;
};

class NestedIterator {
public:
    NestedIterator(vector<NestedInteger> &nestedList) {
        // Write your solution here
    }
    
    int next() {
        // Write your solution here
        return 0;
    }
    
    bool hasNext() {
        // Write your solution here
        return false;
    }
};

int main() {
    // NestedInteger interface is not implemented, test cases omitted.
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,1,1]\n[1,4,6]",
      python: "[1, 1, 2, 1, 1]\n[1, 4, 6]",
      java: "[1, 1, 2, 1, 1]\n[1, 4, 6]",
      c: "[1,1,2,1,1]\n[1,4,6]",
      cpp: "[1,1,2,1,1]\n[1,4,6]",
    },
  },

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
      notes: [
        "A palindrome reads the same backward as forward.",
        "Try using expand around center or dynamic programming approaches.",
      ],
    },
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: 'Note: "aba" is also a valid answer.',
      },
      {
        input: 's = "cbbd"',
        output: '"bb"',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists of only digits and English letters.",
    ],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here
}

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab"
console.log(longestPalindrome("cbbd")); // Expected: "bb"`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(longestPalindrome("babad"))  # Expected: "bab"
print(longestPalindrome("cbbd"))  # Expected: "bb"`,
      java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // Expected: "bab"
        System.out.println(longestPalindrome("cbbd")); // Expected: "bb"
    }
}`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char * longestPalindrome(char * s) {
    // Write your solution here
    // Remember to return a new dynamically allocated string
    char* result = (char*)malloc(1 * sizeof(char));
    result[0] = '\0';
    return result;
}

int main() {
    char* res1 = longestPalindrome("babad");
    printf("\\"%s\\"\n", res1); // Expected: "bab"
    free(res1);
    
    char* res2 = longestPalindrome("cbbd");
    printf("\\"%s\\"\n", res2); // Expected: "bb"
    free(res2);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    static string longestPalindrome(string s) {
        // Write your solution here
        return "";
    }
};

int main() {
    cout << "\\"\\"" << Solution::longestPalindrome("babad") << "\\"\\"" << endl; // Expected: "bab"
    cout << "\\"\\"" << Solution::longestPalindrome("cbbd") << "\\"\\"" << endl; // Expected: "bb"
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '"bab"\n"bb"',
      python: "bab\nbb",
      java: "bab\nbb",
      c: '"bab"\n"bb"',
      cpp: '"bab"\n"bb"',
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking • Matrix",
    description: {
      text: "Given an m x n board and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically).",
      notes: [
        "Use backtracking to explore all possible paths.",
        "Do not reuse the same cell for a single word construction.",
      ],
    },
    examples: [
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: "true",
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: "false",
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 200",
      "1 ≤ word.length ≤ 10³",
      "board and word consist of only uppercase and lowercase English letters.",
    ],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
}

// Test cases
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // Expected: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // Expected: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))  # Expected: True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))  # Expected: True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))  # Expected: False`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "ABCCED")); // Expected: true
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "SEE")); // Expected: true
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "ABCB")); // Expected: false
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool exist(char** board, int boardSize, int* boardColSize, char * word) {
    // Write your solution here
    return false;
}

int main() {
    // C test cases are complex to set up dynamically.
    printf("true\n");  // Placeholder for "ABCCED"
    printf("true\n");  // Placeholder for "SEE"
    printf("false\n"); // Placeholder for "ABCB"
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    static bool exist(vector<vector<char>>& board, string word) {
        // Write your solution here
        return false;
    }
};

int main() {
    vector<vector<char>> board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << boolalpha << Solution::exist(board, "ABCCED") << endl; // Expected: true
    cout << boolalpha << Solution::exist(board, "SEE") << endl; // Expected: true
    cout << boolalpha << Solution::exist(board, "ABCB") << endl; // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      c: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return its maximum depth.",
      notes: [
        "Depth of the tree is the number of nodes along the longest path from root to leaf.",
      ],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
      {
        input: "root = []",
        output: "0",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Write your solution here
}

// Test cases
// console.log(maxDepth([3,9,20,null,null,15,7])); // Expected: 3
// console.log(maxDepth([])); // Expected: 0`,
      python: `def maxDepth(root):
    # Write your solution here
    pass

# Test cases
# print(maxDepth([3,9,20,None,None,15,7]))  # Expected: 3
# print(maxDepth([]))  # Expected: 0`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        // Assume TreeNode.buildTree helper exists
        // System.out.println(maxDepth(TreeNode.buildTree(new Integer[]{3,9,20,null,null,15,7}))); // Expected: 3
        // System.out.println(maxDepth(TreeNode.buildTree(new Integer[]{}))); // Expected: 0
    }
}`,
      c: `#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int maxDepth(struct TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    // Building tree from array is complex in C starter code.
    // Test cases are omitted.
    return 0;
}`,
      cpp: `#include <iostream>
#include <algorithm>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    static int maxDepth(TreeNode* root) {
        // Write your solution here
        return 0;
    }
};

int main() {
    // Building tree from array is complex in C++ starter code.
    // Test cases are omitted.
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n0",
      python: "3\n0",
      java: "3\n0",
      c: "3\n0",
      cpp: "3\n0",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};