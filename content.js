function getArticleText() {
  const article =
    document.querySelector("article, .article, .post-content, .entry-content, .main-content");

  if (article) return article.innerText;

  const paragraphs = Array.from(document.querySelectorAll("p"));
  return paragraphs.map((p) => p.innerText).join("\n");
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_ARTICLE_TEXT") {
    const text = getArticleText();
    sendResponse({ text });
  }
});
