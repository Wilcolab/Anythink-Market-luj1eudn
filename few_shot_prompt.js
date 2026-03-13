/**
 * Converts strings from various formats (kebab, snake, space-separated) to camelCase.
 * @param {string} str - The input string.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) => {
  if (typeof str !== 'string') return '';

  return str
    // 1. Replace underscores, hyphens, and non-alphanumeric chars with spaces
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      // 2. Convert everything to lowercase first
      const lower = word.toLowerCase();
      // 3. Keep first word lowercase, capitalize first letter of subsequent words
      return index === 0 
        ? lower 
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
};
