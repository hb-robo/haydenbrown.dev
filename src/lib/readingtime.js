const WORDS_PER_MINUTE = 200;

export function getReadingTime(text) {
  if (!text) return 0;
  const numberOfWords = text.trim().split(/\s+/).length; // Improved word counting
  return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}