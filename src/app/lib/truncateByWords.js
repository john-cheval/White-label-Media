// export function truncateByWords(htmlString, wordLimit, addDot = true) {
//   if (!htmlString) return { text: "", isTruncated: false };

//   const tempElement = document.createElement("div");
//   tempElement.innerHTML = htmlString;
//   const plainText = tempElement.textContent || tempElement.innerText || "";

//   const words = plainText.trim().split(/\s+/);
//   const isTruncated = words.length > wordLimit;

//   if (!isTruncated) return { text: plainText, isTruncated: false };

//   const truncated = words.slice(0, wordLimit).join(" ");
//   return {
//     text: addDot ? truncated + "…" : truncated,
//     isTruncated: true,
//   };
// }
import { convert } from "html-to-text";

export function truncateByWords(htmlString, wordLimit, addDot = true) {
  if (!htmlString) return { text: "", isTruncated: false };

  const plainText = convert(htmlString, {
    wordwrap: false,
    selectors: [{ selector: "a", options: { ignoreHref: true } }],
  });

  const words = plainText.trim().split(/\s+/);
  const isTruncated = words.length > wordLimit;

  if (!isTruncated) return { text: plainText, isTruncated: false };

  const truncated = words.slice(0, wordLimit).join(" ");
  return {
    text: addDot ? truncated + "…" : truncated,
    isTruncated: true,
  };
}

export function truncateByChars(text, limit, dots = true) {
  if (text.length <= limit) return text;

  return text.slice(0, limit) + (dots ? "..." : "");
}
