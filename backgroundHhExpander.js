chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});

chrome.runtime.onInstalled.addListener(function () {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostSuffix: '.hh.ru' },
                        // pageUrl: { hostSuffix: '.hh.ru', pathPrefix: 'applicant/resumes/edit' },
                        // pageUrl: { hostEquals: 'kaliningrad.hh.ru' },
                    })
                ],
                // And shows the extension's page action.
                actions: [new chrome.declarativeContent.ShowPageAction()]
                // chrome.browserAction.setBadgeText({text: 'ON'})]
            }
        ]);
    });
});