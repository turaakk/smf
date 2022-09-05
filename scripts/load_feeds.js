// load feed u say

chrome.storage.local.get(['vids'], function(result) {
    var duplicate = []
    for(let videoLink of result.vids){
        if(!duplicate.includes(videoLink)){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(videoLink);
            node.appendChild(textnode); 
            document.getElementById("feed-view").appendChild(node);
            duplicate.push(videoLink)
        }
    }
});