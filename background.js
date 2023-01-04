chrome.action.onClicked.addListener((tab) => {
    const randomSubUrl = "https://www.reddit.com/r/random";
    chrome.tabs.update(tab.id, { url: randomSubUrl });
});