console.log('Simply.js demo!');

/*
simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Pressed ' + e.button + '!');
});

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});
*/
var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function getDate(){
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();
  var time = d.getHours() + ':' + d.getMinutes();
  
  simply.title(curr_date + "-" + m_names[curr_month] + "-" + curr_year + " " + time);
  setTimeout(getDate,60000);
}

function fetchNews() {
  ajax({ url: 'http://comeshare.net/getrss.php?q=Google' }, function(data){
    var headline = data.match(/<b>(.*?)<\/b>/)[1];
    simply.body(headline);
  });
  setTimeout(fetchNews, 1800000);
}

getDate();
fetchNews();