// chrome.browserAction.setBadgeText({ text: "ON" });
console.log("DAAA");
window.onload = function () {

    // remove hint from right side
    legends = document.getElementsByClassName("resume-form-show-hint");
    if (legends.length == 3) {
        // there are several hidden hints, only second one is visible
        legends[1].parentNode.parentNode.parentNode.remove();
    };

    // make parent's width = 100%
    document.getElementsByClassName("resume__experiences")[0].
        parentNode.parentNode.style.width='100%'

    // increase height and width of all textareas
    textareas = document.getElementsByTagName("textarea");
    for (let i = 0; i < textareas.length; i++) {
        const element = textareas[i];
        element.style.width = "98%";
        element.style.height = "400px";
        element.parentNode.parentNode.style.width = "100%";
        element.parentNode.parentNode.parentNode.style.width = "100%";
    }
}