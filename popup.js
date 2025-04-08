document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(["translatedText", "originalText", "selectedLanguage", "image"], (data) => {
      document.getElementById("languageHeader").textContent = data.selectedLanguage;
      document.getElementById("translatedText").textContent = data.translatedText;
      document.getElementById("originalText").textContent = data.originalText;
      document.getElementById("languageImage").src = data.image;
    });
  });