// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//to simply create a new object id as in the _id by mongodb use below code
// var obj1 = new ObjectID();
// console.log(obj1);
// var obj2 = new ObjectID();
// console.log(obj2);


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
var db = client.db('TodoApp');
  if(err)
  {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');


//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5ae21628db4cfd19b3127a45'),
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5ae0af07e36b992e74abe378')
},{
$inc:{
  quantity: 1,
  'age':1
},$set:{
  location:'bangalore'
}
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});



});
