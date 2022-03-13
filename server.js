var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
      var tagline = "No programming concept is complete without a cute animal mascot.";
  
      res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
      });
});

// about page
app.get('/about', function(req, res) {
  let user = {
    firstName: 'Ting',
    lastName: 'Yen'
  }

  res.render('pages/about', {
    user: user
  });
});

//pet
app.get('/tag', function(req, res) {
  let pet = {
    petName: 'Bobi',
    breed: 'Schnauzer',
    ownerName: 'Yen'
    
  };

  let tags = [
    { order: 'First', Name: 'Escaped output', tagIcon: '\<%='},
    { order: 'Second', Name: 'Unescaped output', tagIcon: '\<%-'},
    { order: 'Third', Name: 'Comments ', tagIcon: '\<%#'},
    { order: 'Fourth', Name: 'MultiComments', tagIcon: '\<%/*'},
    { order: 'Fifth', Name: 'Scriptlet', tagIcon: '\<%'},
    { order: 'Sixth', Name: 'Scriptlet', tagIcon: '\<%_'}
  ];

  res.render('pages/tag', {
    pet: pet,
    tags: tags
  });
});

app.listen(8080);
console.log('Server is listening on port 8080');
