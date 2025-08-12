// This function will find and replace text in the page's body
function replaceTextOnPage() {
    // Use a TreeWalker to efficiently find all text nodes
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    // Loop through all the text nodes
    while (node = walker.nextNode()) {
        // We don't want to change text in script or style tags
        const parentTag = node.parentElement.tagName.toUpperCase();
        if (parentTag !== 'SCRIPT' && parentTag !== 'STYLE') {
            const text = node.nodeValue;
            // Use a regular expression to replace all 'a' and 'A'
            const newText = text.replace(/也/g, '这一块').replace(/ですわ/g,'这一块').replace(/desuwa/g,'这一块').replace(/Desuwa/g,'这一块');

            
            // Only update if the text has actually changed
            if (newText !== text) {
                node.nodeValue = newText;
            }
        }
    }
}

// Listen for a message from the popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "change_text") {
            replaceTextOnPage();
        }
    }
);