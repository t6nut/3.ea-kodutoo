
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  var items = Array("normal","italic","oblique","initial","inherit");
  var item = items[Math.floor(Math.random()*items.length)];
  var query = document.querySelectorAll('p, div');
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.insertCSS({
    code: 'p div {color:pink;}div {color:red;}'
  });
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")", document.body.style.fontStyle = "italic", document.body.style.fontFamily ="Impact,Charcoal,sans-serif", document.body.style.color = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";'
  });
});
colorLinks("#555586");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;
        }
    }
}
/*document.getElementById('btn').onclick = function() {
            var val = document.getElementById('imagename').value,
                src = 'http://webpage.com/images/' + val +'.png',
                img = document.createElement('img');

            img.src = src;
            document.body.appendChild(img);*/
