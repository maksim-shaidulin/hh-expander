// chrome.browserAction.setBadgeText({text: "ON"});

// chrome.browserAction.onClicked.addListener(function (tab) {
//     console.log('Turning ' + tab.url + ' red!');
//     chrome.tabs.executeScript({
//         code: '\
//         if (document.getElementsByClassName("resume-form-show-hint").length==3){ \
//             document.getElementsByClassName("resume-form-show-hint")[1].parentNode.parentNode.parentNode.remove(); \
//         }; \
//         document.getElementsByTagName("textarea").forEach(function(elem) { \
//             elem.style.width="100%"; \
//             elem.style.height="400px"; \
//             elem.parentNode.parentNode.style.width="100%"; \
//             elem.parentNode.parentNode.parentNode.style.width="100%"; \
//         }); \
//         '
//     });
// });

// chrome.runtime.onInstalled.addListener(function () {
//     // Replace all rules ...
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         // With a new rule ...
//         chrome.declarativeContent.onPageChanged.addRules([
//             {
//                 conditions: [
//                     new chrome.declarativeContent.PageStateMatcher({
//                         // pageUrl: { hostSuffix: '.hh.ru' },
//                         pageUrl: { hostSuffix: '.hh.ru', pathPrefix: 'applicant/resumes/edit' },
//                         // pageUrl: { hostEquals: 'kaliningrad.hh.ru' },
//                     })
//                 ],
//                 // And shows the extension's page action.
//                 actions: [new chrome.declarativeContent.ShowPageAction()]
//                 // chrome.browserAction.setBadgeText({text: 'ON'})]
//             }
//         ]);
//     });
// });