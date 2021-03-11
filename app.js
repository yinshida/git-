const express = require("express");
const app = express();
app.listen(3000, function() {
  console.log("is running at 3000");
});
const expressJWT = require('express-jwt');



// 用于处理post请求参数解析
app.use(express.urlencoded({ extended: false }));





// 1.应该在/my开头路径之前，需要做token验证：第三方中间件；
//     内部对req,res对象 把token解密后信息设置req上；
//     token解密：id数据；req.user.属性名;  过期时间：

app.use(expressJWT({
  secret: 'xxx', // 解密字符串，要和加密的secret一样
  algorithms: ['HS256']
}).unless({
  // 排除某些路径不需要经过这个中间件处理！
  path: ['/api/login', '/api/reguser']
}));

// 2.如果验证不通过（时间过期），第三方中间件内部会给next传入数据！
// next({name:"UnauthorizedError"}) 




// 登录注册
app.use('/api', require("./routers/login"));


// 分类
app.use('/my/article', require("./routers/category"));


// 个人信息：/my/user
app.use('/my', require("./routers/user"));







// 文章: /my/wenz









// 处理：中间件错误的函数；
app.use(function(err, req, res, next) {
  if (err.name == "UnauthorizedError") { // 验证token有问题！
    res.send({
      status: 1,
      message: "身份认证失败!!!!!!!!!!!!!!"
    });
  }
})