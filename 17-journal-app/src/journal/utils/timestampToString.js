/**
 * Converts a timestamp to a formatted date string according to the provided style.
 * @param {number} timestamp - The timestamp to convert.
 * @param {'short' | 'medium' | 'long' | 'full'} dateStyle - The date formatting style.
 * @returns {string} The formatted date string.
 */
function timestampToString(timestamp, dateStyle = 'full') {
  return new Date(timestamp).toLocaleDateString('en-US', { dateStyle })
}

export default timestampToString
