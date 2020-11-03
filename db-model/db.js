const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost/product", {
    //连接数据库
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
db.then(
    //db promise对象
    () => {
        console.log("数据库连接成功");
    },
    () => {
        console.log("数据库连接失败");
    }
); //连接数据库成功
module.exports = db; //把数据库暴露出去