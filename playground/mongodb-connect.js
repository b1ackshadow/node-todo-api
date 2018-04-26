// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//to simply create a new object id as in the _id by mongodb use below code
var obj1 = new ObjectID();
console.log(obj1);
var obj2 = new ObjectID();
console.log(obj2);


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
var db = client.db('TodoApp');
  if(err)
  {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');

  // db.collection('Todos').insertOne({
  //   text:'Something',
  //   completed:false
  // },(err,insertedData)=>{
  //   if(err)
  //   console.log(err);
  //   else {
  //     console.log(JSON.stringify(insertedData.ops));
  //   }
  // });
  // db.collection('Users').insertOne({
  //   name:'Dhanush',
  //   age:19,
  //   location:'India',
  // },(err,insertedData)=>{
  //   if(err)
  //   console.log(err);
  //   else {
  //     console.log(JSON.stringify(insertedData.ops));
  //   }
  // });
  client.close();
});
