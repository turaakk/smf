let title = document.getElementsByTagName('a');
for(tit of title){
  if(tit.href.includes('youtube.com/watch?v=')){
    videoLink = tit.href
    console.log(videoLink)
  }
}
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});