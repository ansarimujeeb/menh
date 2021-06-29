const express = require("express");
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

/* setiing the path*/
const staticpath = path.join(__dirname, "../public");

/* middleware*/
app.use('css/', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('js/', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('jquery/', express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.set("view engine","hbs");

/* routing */
app.get("/", (req,res)=>{
	res.send("Hii im here");
});

/* server create */
app.listen(port, () => {
	console.log(`server running at port ${port}`);
});