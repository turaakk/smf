// load feed u say
chrome.storage.local.get(['vids'], function(result) {
    console.log(result);
    document.getElementById("feed-view").innerHTML = result.vids
});
