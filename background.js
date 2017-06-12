chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  /*var items = ["normal","italic","oblique","initial","inherit"];
  var item = items[Math.floor(Math.random()*items.length)];
  console.log("font: " + item);
  //var query = document.querySelectorAll('p, div');*/
  //var randomColor = rgb("'+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+'");
  chrome.tabs.insertCSS({
    code: 'p {color:pink;}div {color:red;} *:hover {}'
  });
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")", document.body.style.fontStyle = "italic", document.body.style.fontFamily ="Impact,Charcoal,sans-serif", document.body.style.color = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";'
  });
  /*function colorLinks(rgb) {
      var links = document.getElementsByTagName("a");
      for(var i=0;i<links.length;i++)
      {
          if(links[i].href) {
              links[i].style.color = rgb;
          }
      }
  }
  colorLinks("'" + randomColor + "'");*/
});
/*colorLinks("#555586");

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
