const express = require('express');
const router = express.Router();
const db = require("../db");



// 获取个人信息
router.get("/userinfo", function(req, res) {

  // 1.得到用户要谁的数据：token;  req.user.userId;

  // 2.根据id查询数据库：
  db(`select * from user where id=?`, req.user.userId, function(err, data) {

    if (err == null) {
      res.send({
        status: 0,
        message: "获取用户数据成功",
        data: data[0]
      });
    }
    // 
    else {
      res.send({
        status: 1,
        message: "获取用户数据失败",
      });
    }



  })








});


// 更新：
router.post("/userinfo", function(req, res) {

});



// 密码：
router.post("/updatepwd", function(req, res) {

});



// 头像：
router.post("/update/avatar", function(req, res) {

});




module.exports = router;