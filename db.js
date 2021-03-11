// 单独定义了一个模块
function db(sql, params, fn) {
  const mysql = require("mysql");
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root', // 改为自己的密码
    database: 'be-server'
  });
  conn.connect();

  conn.query(sql, params, fn);

  conn.end();
}


// 导出该模块
module.exports = db;