const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/* routing */
app.get("/", (req,res)=>{
	res.send("Hii im here");
});

/* server create */
app.listen(port, () => {
	console.log(`server running at port ${port}`);
});