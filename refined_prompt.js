/**
 * Converts a string to camelCase.
 * Handles spaces, hyphens, underscores, and acronyms.
 * Throws an error for non-string inputs.
 */
function toCamelCase(str) {
  // 1. Strict Error Handling
  if (typeof str !== 'string') {
    throw new TypeError(`Invalid input: Expected a string, but received ${str === null ? 'null' : typeof str}.`);
  }

  return str
    // 2. Handle camelCase/PascalCase inputs (e.g., 'XMLHttp' -> 'XML Http')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // 3. Replace all non-alphanumeric characters with spaces
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      // First word is lowercase; subsequent words are capitalized
      return index === 0 
        ? lower 
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

// --- Test Cases ---
try {
  console.log(toCamelCase("first name"));       // "firstName"
  console.log(toCamelCase("user_id_number"));   // "userIdNumber"
  console.log(toCamelCase("Customer-Service")); // "customerService"
  console.log(toCamelCase("getXMLData"));       // "getXmlData"
  console.log(toCamelCase("  too__many--chars")); // "tooManyChars"
  
  // This will trigger the error handling
  console.log(toCamelCase(5)); 
} catch (error) {
  console.error("Error:", error.message);
}


/**
 * Converts a string to dot.case format.
 * @param {string} str - The input string to convert.
 * @returns {string} The string in dot.case (e.g., "hello.world").
 * @throws {TypeError} If the input is not a string.
 */
const toDotCase = (str) => {
  // 1. Error handling for non-string inputs, null, or undefined
  if (typeof str !== 'string') {
    throw new TypeError(`Input must be a string. Received: ${str === null ? 'null' : typeof str}`);
  }

  return str
    // 2. Insert a space before capital letters (handles PascalCase/camelCase)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // 3. Replace all non-alphanumeric characters (including _ and -) with a space
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase()
    // 4. Split by whitespace and join with dots
    .split(/\s+/)
    .join('.');
};