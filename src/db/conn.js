const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/mongo_first",{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true
}).then(() => {
	console.log("Connection Success");
}).catch((error) => {
	console.log(error);
});