const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b352f97e9fe9f0c67f20918';
var id2 = '5b322a9c507aeb0526ee0ab9';

// if(!ObjectID.isValid(id)){
//   console.log('Invalid ID');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e) => console.log(e));
User.findById(id2).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User',user);
}).catch((e) => console.log(e));
