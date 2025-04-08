chrome.contextMenus.onClicked.addListener(genericOnClick);

let selectedLanguage = "English";
let titleSelection =
  selectedLanguage === "Español"
    ? "Traducir a Español"
    : "Translate to English";
const API_KEY = ":)";
async function genericOnClick(info) {
  if (info.menuItemId === "selection") {
    try {
      const translateString = info.selectionText;
      let target = selectedLanguage === "Español" ? "ES" : "EN";

      const res = await fetch("https://api-free.deepl.com/v2/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: API_KEY,
        },
        body: new URLSearchParams({
          text: [translateString],
          source_lang: "DE",
          target_lang: target,
        }),
      });

      const text = await res.text();
      const data = JSON.parse(text);
      const translatedText = data.translations[0].text;
      const imgEs = "/images/es-16.png";
      const imgEn = "/images/en-16.png";
      chrome.storage.local.set(
        {
          translatedText: translatedText,
          originalText: translateString,
          selectedLanguage: selectedLanguage,
          image: selectedLanguage === "Español" ? imgEs : imgEn,
        },
        () => {
          chrome.action.openPopup();
        }
      );
    } catch (err) {
      console.error("Translation error:", err);
    }
  } else if (info.menuItemId === "English" || info.menuItemId === "Español") {
    selectedLanguage = info.menuItemId;
    titleSelection = "Translate to " + selectedLanguage;
    chrome.contextMenus.update("selection", { title: titleSelection });
  }
}

chrome.runtime.onInstalled.addListener(function () {
  
  //Context menu selection --> Translate on select
  chrome.contextMenus.create({
    title: titleSelection,
    contexts: ["selection"],
    id: "selection",
  });

  //Context menu page --> Select language on click
  const titlePage = "Select Language";
  chrome.contextMenus.create({
    title: titlePage,
    contexts: ["page"],
    id: "page",
  });

  const languages = ["English", "Español"];
  for (let i = 0; i < languages.length; i++) {
    chrome.contextMenus.create({
      title: languages[i],
      parentId: "page",
      id: languages[i],
      contexts: ["page"],
      type: "radio",
    });
  }
});
