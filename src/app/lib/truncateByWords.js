// utils/truncate.ts
export function truncateByWords(text, wordLimit, addDot = true) {
  if (!text) return { text: "", isTruncated: false };

  const words = text.trim().split(/\s+/);
  const isTruncated = words.length > wordLimit;

  if (!isTruncated) return { text, isTruncated: false };

  const truncated = words.slice(0, wordLimit).join(" ");
  return {
    text: addDot ? truncated + "…" : truncated,
    isTruncated: true,
  };
}
