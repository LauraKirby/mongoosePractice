var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/dog_park") //dog_park is the name of the database
mongoose.set('debug',true); //this is for debugging, not required. it tells us what the mongoose complies to in mongo. which mongo command is being run 

//run this file with node in terminal: node filename.js

var dogSchema = new mongoose.Schema({
	name: String, 
	breed: String, 
	age: Number
	//you can use boolean and date here too
	//mongo will create an object id for us
	//this is a patter that we expect to see
	//now we need to compile it into a model 
})

// //make model 
// //mongoose will take this and make a collection called dogs 
// var Dog = mongoose.model("Dog", dogSchema) 

// Dog.find 
// Dog.create
// Dog.update
// Dog.findByIdAndRemove


// //it always has two things: The thing we are creating and the callback function 
// Dog.create([
// 	{name:"charlie", breed: "lab", age: 2},
// 	{name:"wyatt", breed: "lab", age: 11},
// 	{name:"sitka", breed: "malamute", age: 2},
// 	],
// 	function(err, dog){ //this callback will tell us that we were successful or not, error or data
// 		if(err) {
// 			console.log()
// 		}
// 		else {
// 			console.log("it worked")
// 			console.log(dog)
// 		}
// 	}
// 	);

//find one: Dog.find({breed:"lab"})
//find all dogs: 
Dog.find({}), function(err, dogs) { //this callback is mandatory when you want data back. //any time you want data back you have to do it in the callback  
		if(err){
			console.log(error)
		}
		else{
			var dogPack = dogs; //loop through dogpack array
			dogPack.forEach(function(dog){
				console.log(dog.name + " says woof")
			}) 
		}
	}; 

//bc this is mongoose we do not need $set
// Dog.update({name:"wyatt"}, {name:"willy", age:3}, function (err,dog) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("name change");
// 		console.log(dog.name); 
// 	}
// });

//it is hard to write raw mongo in js. we wouldn't have access to the methods on our objects (e.g. find())

//ensure this worked from terminal
//db.gogs.find({name:"willy"})

//update all labs 

// Dog.update({breed:"lab"}, {breed:"labradors"},{multi:true}, function (err,dog) { //function handles the error / success message and data. it doesn't do anything to our data
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("breed change");
// 		console.log(dog.name); 
// 	}
// });

//check your work
//in terminal 
//db.dogs.find({breed:"labs"})
//you will need mult to access all dogs with the breed "labs."
//--------------------------------


// Dog.remove({name:"willy"}, function (err,dog) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("remove willy");
// 		console.log(dog.name); 
// 	}
// });









