
require('dotenv').config()
const app = require("./src/app")
const connectToDB = require("./src/config/Database")

connectToDB();

app.listen(3000, ()=>{
    console.log("Sever is running on PORT 3000");
})