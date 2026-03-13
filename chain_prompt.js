/**
 * Converts a string to kebab-case (e.g., "hello-world").
 * Handles spaces, underscores, camelCase, and PascalCase.
 * * @param {string} str - The input string to transform.
 * @returns {string} The kebab-cased string.
 * @throws {TypeError} If the input is not a string.
 */
const toKebabCase = (str) => {
  // 1. Error Handling: Validate input type
  if (typeof str !== 'string') {
    throw new TypeError(`Invalid input: Expected a string but received ${str === null ? 'null' : typeof str}.`);
  }

  return str
    // 2. Enhancement: Handle camelCase and PascalCase
    // Inserts a space before any uppercase letter followed by lowercase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // 3. Enhancement: Remove punctuation and replace non-alphanumeric with spaces
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase()
    // 4. Initial Functionality: Replace spaces with hyphens
    .split(/\s+/)
    .join('-');
};
