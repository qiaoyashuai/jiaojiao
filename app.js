const express = require("express");
const app = new express();
const session = require("express-session"); //利用session来存储数据
app.use(
    session({
        secret: "keyboard cat", //用于加密
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: true,
            maxAge: 1000 * 60 * 10,
        },
        rolling: true, //强制刷新页面时同时刷新session的过期时间 重新开始
    })
);
const db = require("./db-model/db"); //连接到数据库product
let bodyParser = require("body-parser"); //引入body-parser  用于解析post传送的数据
// 配置bodyParser  固定搭配
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let mongoos = require("mongoose"); //引入mongoose  配置mongo db
let ejs = require("ejs");
const uname = require("./db-model/uname");
// 配置ejs模板  固定搭配
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// 配置静态资源目录
app.use(express.static("public"));
let admin = require("./route/admin"); //引入路由模块
app.use("/admin", admin); //使用引入的路由模块
app.listen(9527, () => {
    console.log("9527runnings");
});