let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3000,()=>{
    console.log('服务器1启动成功')
  })
