/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The converted camelCase string.
 */
function toCamelCase(str) {
  if (typeof str !== 'string') return '';

  return str
    .trim()
    // 1. Replace all non-alphanumeric characters with a single space
    .replace(/[^a-z0-9]/gi, ' ')
    // 2. Split the string into an array of words
    .split(/\s+/)
    // 3. Transform the words
    .map((word, index) => {
      const lower = word.toLowerCase();
      // Keep the first word lowercase; capitalize the first letter of others
      return index === 0 
        ? lower 
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    // 4. Join them back together
    .join('');
}
