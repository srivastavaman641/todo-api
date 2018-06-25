// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
      return console.log('Unable to connect to mongodb server');
    }

    // db.collection('Todos').find().toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //   console.log('Unable to fetch todos');
    // });

    // db.collection('Todos').find({
    //   _id: new ObjectID('5b30d64193e6a357e0a43e74')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //   console.log('Unable to fetch todos');
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos');
    // });

    db.collection('Users').find({
      name:'Aman'
    }).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
      console.log('Unable to fetch Users');
    });



    // db.close();
});
