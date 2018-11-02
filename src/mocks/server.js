const express=require("express");
const app=new express();


var crud=require("./crud");
var bodyParser = require('body-parser');//中间件获取req.body

app.use(bodyParser.json()); // for parsing application/json

app.all('*', function (req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header('"Access-Control-Allow-Credentials", true');
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

//查询
app.get("/api/crud/basic/read",(req,res)=>{
  console.log("查找",req.query.mingcheng);
  let temp = crud.readJson(req.query.mingcheng);
  res.json(temp);
})
//新增
app.post("/api/crud/basic/create",(req,res)=>{
  console.log("新增",req.body);
  let temp=crud.createJson(req.body);
  res.json(temp);
});
//更新
app.post("/api/crud/basic/update",(req,res)=>{
  console.log("更新",req.body);
  let temp=crud.updateJson(req.body.id,req.body);
  res.json(temp);
});
//删除
app.get("/api/crud/basic/delete",(req,res)=>{
  console.log("删除",req.query.id);
  let temp=crud.deleteJson(req.query.id);
  res.json(temp);
});






app.listen(3000,()=>{
  console.log("api-server is ready on port 3000")
})
