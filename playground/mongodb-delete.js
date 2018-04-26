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


//deleteMany
  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // },(err)=>{
  //   console.log("unable to fetch");
  // });
//deleteOne
// db.collection('Todos').deleteOne({_id:123}).then((result)=>{
//   console.log(JSON.stringify(result,undefined,2));
//
// },(err)=>{
//   console.log("unable to fetch");
// });
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({text:'walking'}).then((result)=>{
//   console.log(JSON.stringify(result.value,undefined,2));
//
// },(err)=>{
//   console.log("unable to fetch");
// });




});
