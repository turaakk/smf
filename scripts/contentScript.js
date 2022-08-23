// content Script

var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + ":" 
                + currentdate.getMilliseconds();


let links = document.getElementsByTagName('a');

var videos = []

for(vidLink of links){

  if(vidLink.href.includes('youtube.com/watch?v=')){

    videos.push(vidLink.href)

  }
}
chrome.storage.local.set({vids: videos}, function() {

  console.log('Value is set to ' + videos);
  
});
