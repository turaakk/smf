chrome.action.onClicked.addListener(function(tab){
    chrome.tabs.create({
       url: ("../pages/feed.html"),
   });
});
