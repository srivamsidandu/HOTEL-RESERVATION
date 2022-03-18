const httpv = require("http")
const app =require("./backend/app");
const server = httpv.createServer(app);
server.listen("3000",()=>{
    console.log("Please check port no 3000")
});