let _boundaryCheckingState = true; // Global switch for whether to perform out-of-bounds checks

/**
 * Correct the wrong data
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num, precision = 15) {
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
 * Return digits length of a number
 * @private
 * @param {*number} num Input number
 */
function digitLength(num) {
  // Get digit length of e
  const eSplit = num.toString().split(/[eE]/);
  const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
 * Convert a decimal number to an integer, or enlarge it to an integer if it is a decimal number
 * @private
 * @param {*number} num Number of inputs
 */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  const dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
 * Detects if a number is out of bounds, and gives a hint if it is out of bounds
 * @private
 * @param {*number} num Number of inputs
 */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(`${num} Accuracy limits are exceeded and results may be incorrect`);
    }
  }
}

/**
 * Flattening recursive operations to iterate
 * @param {number[]} arr The array of numbers to be manipulated
 * @param {function} operation Iterative Operations
 * @private
 */
function iteratorOperation(arr, operation) {
  const [num1, num2, ...others] = arr;
  let res = operation(num1, num2);

  others.forEach((num) => {
    res = operation(res, num);
  });

  return res;
}

/**
 * High precision multiplication
 * @export
 */
export function times(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }

  const [num1, num2] = nums;
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  const baseNum = digitLength(num1) + digitLength(num2);
  const leftValue = num1Changed * num2Changed;

  checkBoundary(leftValue);

  return leftValue / Math.pow(10, baseNum);
}

/**
 * High precision addition
 * @export
 */
export function plus(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }

  const [num1, num2] = nums;
  // Take the largest decimal place
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // Convert all decimals to integers and then calculate
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
 * High precision subtraction
 * @export
 */
export function minus(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }

  const [num1, num2] = nums;
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
 * High precision division
 * @export
 */
export function divide(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }

  const [num1, num2] = nums;
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // Important, here the correction must be made with strip
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
 * Rounding
 * @export
 */
export function round(num, ratio) {
  const base = Math.pow(10, ratio);
  let result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // If the number of digits is not enough, 0 will be added.
  return result;
}

/**
 * Whether to perform boundary check, default on
 * @param flag Flag switch, true is on, false is off, default is true
 * @export
 */
export function enableBoundaryChecking(flag = true) {
  _boundaryCheckingState = flag;
}


export default {
  times,
  plus,
  minus,
  divide,
  round,
  enableBoundaryChecking,
};

