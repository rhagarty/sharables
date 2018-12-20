const util = require('util');
var fs = require('fs');

fs.readFile('data.json', 'utf8', function (err, data) {
  if (err) throw err;
  var obj = JSON.parse(data);


  console.log('+++ JSON RESULTS +++');
  console.log('size: ' + obj.length);
  //console.log(util.inspect(obj[1], false, null));
  JSON.stringify(obj);

  var i = 1;
  for (let item of obj) {
    //console.log(util.inspect(item, false, null));
    var fileName = String(item['ID_2']);
    // var datefield = String(item['Date']);
    // var mm = datefield.substr(0, 1);
    // var dd = datefield.substr(2, 3);
    // var yy = '20' + datefield.substr(4, 5);
    // item['date'] = yy + '-' + mm + '-' + dd;
    var newItem = {};
    newItem['date'] = '2018-01-01';
    newItem['text'] = item['Comments_1']; 
    newItem['Id'] = String(item['ID_2']);
    newItem['title'] = item['DataField_4'];
    fileName = fileName.replace('.', '-') + '.json';

    if (!newItem['title']) {
      newItem['title'] = 'No Title';
    }
    const content = JSON.stringify(newItem);
    
    if (i <= 50 && newItem['text']) {
      console.log('fileName: ' + fileName);
      fs.writeFileSync('./data/' + fileName, content);
      i = i + 1;
    }
  }
  
});

// Here is an example json file representing an AirBnB review that the code pattern uses:
// {
//   "listing_id": 2390109,
//   "id": 22208895,
//   "date": "2014-11-01",
//   "reviewer_id": 4358294,
//   "reviewer_name": "Inessa",
//   "text": "I had a great time staying here! The room is huge and sunny, and it was the perfect place to do some work and hang out in the afternoon before heading out to dinner. Alexandra and David were very welcoming hosts. They were always around to answer any questions. They had breakfast and coffee for me every morning and even left it on the table by the door on mornings when I had to rush out to the office.  The cats were really cute too!",
//   "title": "ENTIRE FLOOR! Business travel & fun",
//   "host_id": 2665483,
//   "listing_latitude": 30.2962457933164,
//   "listing_longitude": -97.75013113693174,
//   "host_name": "Alexandra"
// }
