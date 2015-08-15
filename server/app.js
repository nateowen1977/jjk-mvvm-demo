var express = require('express');
var bodyParser = require('body-parser');
var Contact = require('./dto/Contact');

var app = express();
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

var contacts = [
    new Contact(1, 'Nate', 'Owen', 38),
    new Contact(2, 'Carrie', 'Arts', 37)
];

app.use(express.static('client'));

app.get('/api/contacts', (req, res) => { res.send(contacts);});

app.get('/api/contacts/:id', (req,res) => {
    var id = req.params.id;
    for(var contact of contacts){
        if(contact.Id == id){
            res.send(contact);
            return;
        }
    }

    res.status(404);
    res.send('unknown contact @ id: ' +  id);
});

app.post('/api/contacts', (req, res, next) => {
    var body = req.body;
    if(body.first && body.first.length > 0){
        if(body.last && body.last.length > 0){
            if(body.age && !isNaN(body.age)){
                var contact = new Contact(contacts.length + 1, body.first, body.last, parseInt(body.age));
                contacts.push(contact);
                res.status(201);
                res.end();
            }
        }
    }
});

app.delete('/api/contacts/:id', (req, res) =>{
    var id = req.params.id;
    if(id){
        var index = contacts.findIndex(x => x.Id == id);
        if(index >= 0) {
            contacts.splice(index, 1);
            res.status(200);
            res.send(contacts);
        }
    }

    res.status(404);
    res.end();
});

var server = app.listen(3000,function(){ 
	var port = server.address().port; 
	 
	console.log('Server listening on port:%s',port);
});