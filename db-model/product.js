const mongoose = require("mongoose");
// 创建集合规则
let setroue = new mongoose.Schema({
    description: String, //商品描述
    imgsrc: Object, //图片地址
    name: String, //名称
    price: Number, //价格  //转换成数值型可以用来比大小
    spend: String, //邮费
});
let lists = mongoose.model("lists", setroue); //创建的集合名称
// lists
//     .create({  //添加数据
//         order: 1, //序号
//         imgsrc: "String", //图片地址
//         name: "String", //名称
//         price: "String", //价格
//         spend: "String", //邮费
//     })
//     .then((resault) => {
//         console.log(resault);
//     });
// lists.deleteMany().then(() => {
//     //删除元素
//     console.log("删完了");
// });
// lists.find().then((data) => {
//     //查找数据库集合里面的数据
//     // console.log(data);
// });
module.exports = lists; //暴露出去