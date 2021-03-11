// 固定1：基本步骤：
const express = require('express');

// 固定2：使用express内部封装路由功能
const router = express.Router();

// 辅助：
const db = require("../db");

// 固定3：细分路由
router.get("/cates", function(req, res) {

  // 查询数据库？没有占位符传个null，
  db(`select * from category`, null, function(err, data) {

    if (err == null) {
      res.send({
        status: 0,
        message: "获取文章分类列表成功！",
        data: data
      });
    }
    // 
    else {
      res.send({
        status: 1,
        message: "获取文章分类列表失败！",
      });
    }

  })

});

// 新增
router.post("/addcates", function(req, res) {

  // 
  db(`insert into category set ?`, req.body, function(err) {
    if (err == null) {
      res.send({
        "status": 0,
        "message": "新增文章分类成功！"
      });
    }
    // 
    else {
      res.send({
        "status": 1,
        "message": "新增文章分类失败！"
      });
    }
  })

});

// 修改
router.post("/updatecate", function(req, res) {

  // 
  db(`update category set ? where Id=?`, [req.body, req.body.Id], function(err) {
    if (err == null) {
      res.send({
        "status": 0,
        "message": "更新文章分类成功！"
      });
    }
    // 
    else {
      res.send({
        "status": 1,
        "message": "更新文章分类失败！"
      });
    }
  })

  // res.send("99999");
});

// 删除：可以理解为就是特别传参的方式,动态地址；
router.get("/deletecate/:id", function(req, res) {
  // console.log(req.params);
  db("delete from category where Id=?", req.params.id, function(err) {
    if (err == null) {
      res.send({
        "status": 0,
        "message": "删除文章分类成功！"
      });
    }
    // 
    else {
      res.send({
        "status": 1,
        "message": "删除文章分类失败！"
      });
    }
  });
});


// 固定4：导出模块。主app.js内部需要这个JS文件的内容！
module.exports = router;