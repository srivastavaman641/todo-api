// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
      return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server.');

    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // },(err) => {
    //   console.log('Unable to delete Todos');
    // });

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // },(err) => {
    //   console.log('Unable to delete Todos');
    // });

    // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // },(err) => {
    //   console.log('Unable to delete Todos');
    // });

    // db.collection('Users').deleteMany({name: 'Aman'}).then((result) => {
    //   console.log(result);
    // },(err) => {
    //   console.log('Unable to delete Todos');
    // });

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5b314725853d0b65c9324427')
    }).then((result) => {
      console.log(result);
    },(err) => {
      console.log('Unable to delete Todos');
    });

    // db.close();
});
