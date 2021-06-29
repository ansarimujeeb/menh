const express = require("express");
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

/* setiing the path*/
//const staticpath = path.join("__dirname");
//console.log(path.join("__dirname"));
/* middleware*/
//app.use(express.static(""));

/* routing */
app.get("/", (req,res)=>{
	res.send("Hii im here");
});

/* server create */
app.listen(port, () => {
	console.log(`server running at port ${port}`);
});