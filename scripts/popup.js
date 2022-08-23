// 
let links = document.getElementsByClassName('container')

chrome.storage.sync.get(['time'], function(result) {
    links.innerHTML = `<div class="links">${result.time}</div>`
    console.log('Value currently is ' + result.time);
});


